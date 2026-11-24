# squidzombie.com

Max's portfolio, built collaboratively with Claude.
Private software, risen from the deep. Expect it to mutate.

## Structure

- `index.html` — homepage: hero with the seal, selected work (one case card
  per project, each in its Work-page colour), how I build, about
- `css/style.css` — all styles; palette lives in `:root` custom properties
- `js/main.js` — bioluminescent particle canvas + the seal squid's
  cursor-tracking pupils
- `favicon.svg`, `apple-touch-icon.png`, `og-card.jpg` — the logo mark as
  favicon, iOS icon and social share card
- `work/` — portfolio: Sable Budget and FlowTime (shipped),
  Squid (in progress); each project's images live in `work/<project>/`
- `js/work.js` — the Work page's 3D screenshot showcase (one per project;
  add `showcase-wide` for landscape desktop screenshots)
- `js/ledger.js` — Squid's illustrated hash-chained ledger (Tock data only);
  used on the Work page and the homepage's Squid card
- `experiments/` — the archive: early toys and games, no longer on the
  homepage. `experiments/index.html` lists them (linked from the footer);
  each lives in its own folder with its own `index.html`
- `experiments/slimeball/` — build output of SLIMEBALL, published from the
  private `SlimeBall` repo with `npm run deploy:site`. Don't hand-edit: every
  deploy replaces it. Its card (SPECIMEN 004) lives in `experiments/index.html`.
- `games/` — the Games page (in the header nav on every page). One case card
  per game, built like the homepage's; card screenshots live in `games/img/`
- `games/imhit/` — build output of IMHIT (shown to players as IM HIT!), published from the private `IMHIT`
  repo with `npm run deploy:site`. Don't hand-edit: every deploy replaces it.
  Its card lives in `games/index.html`.

- `games/huedunnit/` — Huedunnit, a daily puzzle: name a video game from nine
  colours taken from its cover. Hand-written, one self-contained `index.html`
  plus `puzzles.js`. No cover image is stored or shown, only colour values:
  nine for the bar, and maps of 3x3, 6x6 and 12x12 flat squares. The 12x12
  map is the last clue and the closest the game gets to the artwork.
  Its card lives in `games/index.html`.
- `tools/huedunnit/` — builds `games/huedunnit/puzzles.js`. `games.tsv` is the
  list of games and their text clues; `build.py` reads each cover from
  Wikipedia once and writes only the colours. To add games, edit `games.tsv`
  and run `python3 -I tools/huedunnit/build.py <cache-dir>` (needs Pillow and
  numpy; keep the cache folder outside the repo). The first three rows stay
  as puzzles 1 to 3; the rest are shuffled in a fixed order.

## The logo

The mark is a classic, symmetric squid: finned mantle, two eyes, three arms
and a long curling tentacle per side. Each page carries it inline as two SVG
`<symbol>`s at the top of `<body>`: `sz-body` (eye sockets open) and
`sz-mark` (with pupils). The header and footer use `sz-mark`; the homepage
seal uses `sz-body` plus its own pupils so they can follow the cursor. If the
mark changes, update every page's sprites (home, Work, Games, the archive) and `favicon.svg` together.

## Running locally

No build step. Open `index.html` directly, or serve it:

```sh
python3 -m http.server 8000
```

## Conventions

- Plain HTML/CSS/JS until an experiment genuinely needs tooling
- Palette: abyss `#050a12`, biolume teal `#3dfbd8`, zombie green `#8aff5a`, violet `#8a6cff`;
  FlowTime's ember `#ff8a3d`
- Fonts: Fraunces (wordmark, page titles, display), Space Grotesk (everything
  else), via Google Fonts. The archived experiments keep their own Rubik Glitch.
