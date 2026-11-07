# Brand sources

- `icon-master-rounded.svg` — favicon master (rounded corners, transparent outside)
- `icon-master-fullbleed.svg` — apple-touch / Android maskable master (edge-to-edge)
- `generate-og-card.py` — regenerates `public/og-card.png` (1200x630)

Regenerate the icon ladder or OG card with cairosvg + Pillow:
`python generate-og-card.py` (paths inside assume the two masters are rendered
to /root first — see the script header).
