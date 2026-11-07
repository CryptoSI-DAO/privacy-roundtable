"""Compose the 1200x630 OG share card from brand tokens (dark variant)."""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
INK = (8, 8, 10)
PANEL = (16, 16, 20)
GOLD = (232, 182, 76)
GOLDSOFT = (245, 215, 142)
ZINC = (161, 161, 170)
LINE = (35, 35, 43)
NEON = (231, 249, 0)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

card = Image.new("RGB", (W, H), INK)

# soft glow field (two blurred gold ellipses, low alpha)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
g = ImageDraw.Draw(glow)
g.ellipse([700, -200, 1450, 500], fill=GOLD + (26,))
g.ellipse([-250, 380, 450, 900], fill=GOLD + (18,))
glow = glow.filter(ImageFilter.GaussianBlur(90))
card = Image.alpha_composite(card.convert("RGBA"), glow).convert("RGB")

d = ImageDraw.Draw(card)

# hairline frame
d.rectangle([0, 0, W - 1, H - 1], outline=LINE, width=2)
d.rectangle([0, 0, 14, H], fill=GOLD)  # gold edge bar

# emblem medallion (right side): deliberate circular panel + transparent emblem
import cairosvg, io

svg_lock = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1024" height="1024">
  <circle cx="32" cy="32" r="24" fill="none" stroke="#e8b64c" stroke-width="2.5" opacity="0.5"/>
  <circle cx="32" cy="32" r="19" fill="none" stroke="#23232b" stroke-width="1.5"/>
  <g fill="#e8b64c">
    <rect x="26" y="28" width="12" height="10" rx="2"/>
    <path d="M28 28v-3a4 4 0 0 1 8 0v3h-2.5v-3a1.5 1.5 0 0 0-3 0v3Z"/>
    <circle cx="32" cy="32.5" r="1.8" fill="#08080a"/>
    <rect x="31.2" y="33.5" width="1.6" height="3.2" rx="0.8" fill="#08080a"/>
  </g>
  <circle cx="32" cy="8.5" r="2.5" fill="#e7f900"/>
</svg>'''
cairosvg.svg2png(bytestring=svg_lock.encode(), write_to="/root/prt-emblem-t.png",
                 output_width=400, output_height=400)
emblem = Image.open("/root/prt-emblem-t.png").convert("RGBA")

import math
cx, cy, R = 960, 300, 218
# medallion panel
d.ellipse([cx - R, cy - R, cx + R, cy + R], fill=PANEL, outline=LINE, width=4)
card.paste(emblem, (cx - 200, cy - 200), emblem)

# orbit dots on the medallion edge
for angle_deg in (20, 110, 200, 290):
    dx = cx + R * math.cos(math.radians(angle_deg))
    dy = cy + R * math.sin(math.radians(angle_deg))
    d.ellipse([dx - 7, dy - 7, dx + 7, dy + 7], fill=GOLD)

# left column
f_kicker = ImageFont.truetype(BOLD, 24)
f_title = ImageFont.truetype(BOLD, 86)
f_sub = ImageFont.truetype(REG, 30)
f_regulars = ImageFont.truetype(BOLD, 26)
f_url = ImageFont.truetype(BOLD, 28)
f_fine = ImageFont.truetype(REG, 21)

x = 70
d.text((x, 88), "LIVE ON X SPACES", font=f_kicker, fill=GOLD)

d.text((x, 150), "Privacy", font=f_title, fill=(244, 244, 245))
w_title = d.textlength("Privacy", font=f_title)
d.text((x, 246), "Roundtable", font=f_title, fill=GOLD)

d.text((x, 372), "Candid talks on privacy tech,", font=f_sub, fill=ZINC)
d.text((x, 412), "crypto & digital freedom.", font=f_sub, fill=ZINC)

d.text((x, 486), "PIVX · Firo · Zano · Particl · BasicSwap DEX", font=f_regulars, fill=GOLDSOFT)

# URL pill
pill_y = 540
tw = d.textlength("privacy-roundtable.vercel.app", font=f_url)
d.rounded_rectangle([x, pill_y, x + tw + 48, pill_y + 56], radius=28, fill=NEON)
d.text((x + 24, pill_y + 12), "privacy-roundtable.vercel.app", font=f_url, fill=INK)

# fine print bottom right
d.text((W - 470, H - 44), "Community archive · CryptoSI DAO", font=f_fine, fill=ZINC)

out = "/home/lisa/projects/privacy-roundtable/public/og-card.png"
card.save(out, optimize=True)
import os
print("saved", out, os.path.getsize(out), "bytes")
