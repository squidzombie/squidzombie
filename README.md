# squidzombie.com

Max's personal site + experiment lab, built collaboratively with Claude.
Risen from the deep. Expect it to mutate.

## Structure

- `index.html` — landing page (deep-sea zombie squid theme)
- `css/style.css` — all styles; palette lives in `:root` custom properties
- `js/main.js` — bioluminescent particle canvas + cursor-tracking squid eyes
- `experiments/` — each experiment gets its own folder with its own `index.html`,
  then gets a card on the landing page

## Running locally

No build step. Open `index.html` directly, or serve it:

```sh
python3 -m http.server 8000
```

## Conventions

- Plain HTML/CSS/JS until an experiment genuinely needs tooling
- Palette: abyss `#050a12`, biolume teal `#3dfbd8`, zombie green `#8aff5a`, violet `#8a6cff`
- Fonts: Rubik Glitch (display), Space Grotesk (body), via Google Fonts
