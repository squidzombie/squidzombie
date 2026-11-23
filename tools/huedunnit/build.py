#!/usr/bin/env python3
"""Build games/huedunnit/puzzles.js.

For each game in games.tsv this reads the cover image from its Wikipedia
page once, works out nine colours, and writes only the title, the text clues
and the colour values. No image is written into the repo: covers are kept in
a cache folder you pass in, which should live outside the repo.

    python3 -I tools/huedunnit/build.py <cache-dir> [--cached-only]

--cached-only skips the network and builds from covers already in the cache.

Needs Pillow and numpy. Network: en.wikipedia.org, upload.wikimedia.org.
"""
import io
import json
import random
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).resolve().parent
OUT = HERE.parent.parent / "games" / "huedunnit" / "puzzles.js"
UA = "cover-palette-builder/0.1 (personal hobby project)"
API = "https://en.wikipedia.org/w/api.php"
PINNED = 3          # the first rows of games.tsv keep their place as puzzles 1..3
K_START, K_FINAL = 14, 9


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if attempt == 3 or e.code != 429:
                raise
            # The image host rate-limits; wait as long as it asks.
            time.sleep(min(180, int(e.headers.get("retry-after") or 30)) + 5)
        except Exception:
            if attempt == 3:
                raise
            time.sleep(5 * (attempt + 1))


def read_games():
    games = []
    for line in (HERE / "games.tsv").read_text(encoding="utf-8").splitlines():
        if not line.strip() or line.startswith("#"):
            continue
        page, title, year, genre, platforms, aliases = line.split("\t")
        games.append({
            "page": page, "t": title, "y": int(year), "g": genre, "p": platforms,
            "a": [a for a in aliases.split("|") if a],
        })
    return games


def cover_urls(pages):
    """Map each Wikipedia page title to the URL of its lead image."""
    urls = {}
    for i in range(0, len(pages), 40):
        batch = pages[i:i + 40]
        q = urllib.parse.urlencode({
            "action": "query", "format": "json", "redirects": 1,
            "prop": "pageimages", "piprop": "thumbnail", "pithumbsize": 330,
            "pilicense": "any", "titles": "|".join(batch),
        })
        data = json.loads(get(f"{API}?{q}"))["query"]
        back = {}
        for step in ("normalized", "redirects"):
            for m in data.get(step, []):
                back[m["to"]] = back.get(m["from"], m["from"])
        for page in data["pages"].values():
            # Ask for a standard thumbnail size, served from upload.wikimedia.org.
            src = page.get("thumbnail", {}).get("source")
            if src:
                src = src.replace("//thumb.wikimedia.org/", "//upload.wikimedia.org/")
            if src:
                urls[back.get(page["title"], page["title"])] = src
    return urls


def to_lab(rgb):
    c = rgb / 255.0
    c = np.where(c > 0.04045, ((c + 0.055) / 1.055) ** 2.4, c / 12.92)
    m = np.array([[0.4124564, 0.3575761, 0.1804375],
                  [0.2126729, 0.7151522, 0.0721750],
                  [0.0193339, 0.1191920, 0.9503041]])
    xyz = c @ m.T / np.array([0.95047, 1.0, 1.08883])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[:, 1] - 16, 500 * (f[:, 0] - f[:, 1]), 200 * (f[:, 1] - f[:, 2])], axis=1)


def to_hex(lab):
    fy = (lab[0] + 16) / 116
    f = np.array([fy + lab[1] / 500, fy, fy - lab[2] / 200])
    xyz = np.where(f ** 3 > 0.008856, f ** 3, (f - 16 / 116) / 7.787) * np.array([0.95047, 1.0, 1.08883])
    m = np.array([[3.2404542, -1.5371385, -0.4985314],
                  [-0.9692660, 1.8760108, 0.0415560],
                  [0.0556434, -0.2040259, 1.0572252]])
    c = np.clip(m @ xyz, 0, 1)
    c = np.where(c > 0.0031308, 1.055 * c ** (1 / 2.4) - 0.055, 12.92 * c)
    return "#" + "".join(f"{int(round(v * 255)):02x}" for v in c)


def palette(img_bytes):
    """Nine colours with their share of the cover, plus a 3x3 map of where they sit."""
    img = Image.open(io.BytesIO(img_bytes)).convert("RGBA")
    flat = Image.new("RGBA", img.size, (255, 255, 255, 255))
    flat.alpha_composite(img)
    img = flat.convert("RGB")
    w = 96
    h = max(9, round(img.height * w / img.width))
    img = img.resize((w, h), Image.LANCZOS)
    lab = to_lab(np.asarray(img, dtype=np.float64).reshape(-1, 3))

    rng = np.random.default_rng(7)
    centres = [lab[rng.integers(len(lab))]]
    for _ in range(K_START - 1):                      # k-means++ seeding
        d = np.min([((lab - c) ** 2).sum(1) for c in centres], axis=0)
        centres.append(lab[rng.choice(len(lab), p=d / d.sum())])
    centres = np.array(centres)
    for _ in range(30):
        labels = ((lab[:, None, :] - centres[None]) ** 2).sum(2).argmin(1)
        for k in range(len(centres)):
            if (labels == k).any():
                centres[k] = lab[labels == k].mean(0)
    counts = np.bincount(labels, minlength=len(centres)).astype(float)

    # Merge the two closest colours until nine are left, so near-duplicates
    # fold together and small accent colours survive.
    alive = [k for k in range(len(centres)) if counts[k] > 0]
    owner = np.arange(len(centres))
    while len(alive) > K_FINAL:
        best = None
        for i, a in enumerate(alive):
            for b in alive[i + 1:]:
                d = ((centres[a] - centres[b]) ** 2).sum()
                if best is None or d < best[0]:
                    best = (d, a, b)
        _, a, b = best
        centres[a] = (centres[a] * counts[a] + centres[b] * counts[b]) / (counts[a] + counts[b])
        counts[a] += counts[b]
        owner[owner == b] = a
        alive.remove(b)
    labels = owner[labels]

    order = sorted(alive, key=lambda k: -counts[k])
    hexes = {k: to_hex(centres[k]) for k in order}
    total = counts[order].sum()
    row = [[hexes[k], round(float(counts[k] / total), 3)] for k in order]

    grid = labels.reshape(h, w)
    cells = []
    for r in range(3):
        for c in range(3):
            cell = grid[r * h // 3:(r + 1) * h // 3, c * w // 3:(c + 1) * w // 3].ravel()
            # Favour colours that are concentrated in this cell over the cover's
            # overall background, so the map shows where the accents sit.
            share = np.bincount(cell, minlength=len(centres)) / len(cell)
            score = [share[k] / np.sqrt(counts[k] / total) if share[k] >= 0.15 else 0 for k in order]
            cells.append(int(np.argmax(score)))
    return row, cells, round(img.width / img.height, 2)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    cached_only = "--cached-only" in sys.argv
    if len(args) != 1:
        sys.exit(__doc__)
    cache = Path(args[0])
    cache.mkdir(parents=True, exist_ok=True)
    games = read_games()
    urls = {} if cached_only else cover_urls([g["page"] for g in games])

    puzzles, missing = [], []
    for g in games:
        f = cache / (re.sub(r"[^a-z0-9]+", "-", g["page"].lower()).strip("-") + ".img")
        if not f.exists():
            url = urls.get(g["page"])
            if not url:
                missing.append(g["page"])
                continue
            try:
                f.write_bytes(get(url))
            except Exception as e:
                missing.append(f"{g['page']} ({e})")
                continue
            time.sleep(6)                      # the image host allows only a slow trickle
        row, cells, ratio = palette(f.read_bytes())
        entry = {"t": g["t"], "y": g["y"], "g": g["g"], "p": g["p"], "c": row, "m": cells, "r": ratio}
        if g["a"]:
            entry["a"] = g["a"]
        puzzles.append(entry)

    rest = puzzles[PINNED:]
    random.Random(2026).shuffle(rest)
    puzzles = puzzles[:PINNED] + rest

    body = ",\n".join(json.dumps(p, ensure_ascii=False, separators=(",", ":")) for p in puzzles)
    OUT.write_text(
        "// Generated by tools/huedunnit/build.py. Don't hand-edit: change games.tsv and rebuild.\n"
        "// Each puzzle holds a title, text clues, nine colours with their share of the cover (c)\n"
        "// which of those colours stands out in each cell of a 3x3 map of the cover (m),\n"
        "// and the cover's width divided by its height (r).\n"
        f"window.HUEDUNNIT_PUZZLES = [\n{body}\n];\n", encoding="utf-8")
    print(f"wrote {len(puzzles)} puzzles to {OUT}")
    if missing:
        print("no cover found for:", ", ".join(missing))


if __name__ == "__main__":
    main()
