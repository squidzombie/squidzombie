# Art assets

Max's hand-drawn artwork (Procreate) that replaces the code-drawn creatures.
Full drawing order with layer-by-layer breakdowns lives in the art brief
artifact: https://claude.ai/code/artifact/1e88048b-432b-40ae-97c3-07467adaaaf0

## The rules (short version)

- **One part = one layer.** Separate layers are what make rigging possible.
- Square canvas, 2048×2048px+, one canvas per creature.
- Name layers before export (`body`, `tentacle-1`, `pupil-left`, …).
- Overlap joints: tentacle roots keep going *under* the body.
- Neutral pose, tentacles hanging straight-ish down.
- Export: Procreate Actions ▸ Share ▸ **PNG files** (transparent, full-canvas).

## Asset sets

| Folder | Contents | Used by |
|--------|----------|---------|
| `hero-squid/` | body, tentacles, eyes, pupils, eyelid, extras | homepage rig + Feed the Squid player |
| `plankton/` | plankton-1..3 | Feed the Squid food |
| `jellyfish/` | jelly-dome, jelly-threads | Feed the Squid enemy |
| `visitor/` | visitor silhouette | Abyssal Sonar mystery contact |
| `lost-squid/` | single drawing | future 404 page |
| `mark/` | logo/favicon icon | site-wide |

Raw layer exports go in these folders; rigged/processed versions are built
from them by the site's JS.
