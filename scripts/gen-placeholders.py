"""
Generate PNG placeholder images for projects, testimonials, and OG image.
Run once: python3 scripts/gen-placeholders.py
"""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(os.path.join(BASE, "projects"), exist_ok=True)
os.makedirs(os.path.join(BASE, "testimonials"), exist_ok=True)

def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def gradient_image(w, h, c1, c2):
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / h
        color = lerp_color(c1, c2, t)
        draw.line([(0, y), (w, y)], fill=color)
    return img

def draw_centered_text(draw, text, y, w, size, color=(255,255,255), opacity=230):
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (w - tw) // 2
    r, g, b = color
    draw.text((x, y), text, font=font, fill=(r, g, b, opacity))

# ── Projects ──────────────────────────────────────────────────────────────────
projects = [
    (1, "E-Commerce Platform",        "Next.js · Stripe · PostgreSQL",   "#8b5cf6", "#06b6d4"),
    (2, "AI Chat Application",         "React · OpenAI · Socket.io",      "#06b6d4", "#ec4899"),
    (3, "DevOps Dashboard",            "React · Kubernetes · Grafana",    "#ec4899", "#8b5cf6"),
    (4, "Mobile Finance Tracker",      "React Native · Plaid · Firebase", "#22c55e", "#06b6d4"),
    (5, "Open Source CLI Tool",        "Node.js · TypeScript · CLI",      "#f59e0b", "#ec4899"),
    (6, "Data Visualization Platform", "React · D3.js · FastAPI",         "#06b6d4", "#22c55e"),
]

for pid, title, tags, c1s, c2s in projects:
    c1, c2 = hex_to_rgb(c1s), hex_to_rgb(c2s)
    # Dark base blended with gradient
    bg = gradient_image(800, 450, (10, 10, 20), (20, 20, 35))
    # Overlay gradient strip
    overlay = gradient_image(800, 450, (*c1, ), (*c2, ))
    blended = Image.blend(bg, overlay, 0.18)

    draw = ImageDraw.Draw(blended, "RGBA")
    # Subtle border
    draw.rounded_rectangle([30, 30, 770, 420], radius=16, outline=(255, 255, 255, 15), width=1)

    draw_centered_text(draw, title, 160, 800, 32, color=(255, 255, 255), opacity=240)
    draw_centered_text(draw, tags,  210, 800, 16, color=(200, 200, 220), opacity=150)

    # Accent bar
    bar_w = 120
    bar_x = (800 - bar_w) // 2
    bar = gradient_image(bar_w, 4, c1, c2)
    blended.paste(bar, (bar_x, 260))

    out = os.path.join(BASE, "projects", f"project-{pid}.jpg")
    blended.save(out, "JPEG", quality=90)
    print(f"  ✓ {out}")

# ── Testimonial avatars ────────────────────────────────────────────────────────
avatars = [
    (1, "SC", "#8b5cf6", "#06b6d4"),
    (2, "MW", "#06b6d4", "#ec4899"),
    (3, "PP", "#ec4899", "#8b5cf6"),
    (4, "DK", "#22c55e", "#06b6d4"),
]

for aid, initials, c1s, c2s in avatars:
    c1, c2 = hex_to_rgb(c1s), hex_to_rgb(c2s)
    img = gradient_image(200, 200, c1, c2)
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), initials, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((200 - tw) // 2, (200 - th) // 2 - 4), initials, font=font, fill=(255, 255, 255, 230))
    out = os.path.join(BASE, "testimonials", f"avatar-{aid}.jpg")
    img.save(out, "JPEG", quality=90)
    print(f"  ✓ {out}")

# ── OG image ──────────────────────────────────────────────────────────────────
c1, c2 = hex_to_rgb("#8b5cf6"), hex_to_rgb("#06b6d4")
og = gradient_image(1200, 630, (10, 10, 20), (20, 20, 40))
overlay = gradient_image(1200, 630, c1, c2)
og = Image.blend(og, overlay, 0.15)
draw = ImageDraw.Draw(og)
draw.rounded_rectangle([40, 40, 1160, 590], radius=24, outline=(255, 255, 255, 12), width=1)
draw_centered_text(draw, "Ashish Bharti",      200, 1200, 72, opacity=240)
draw_centered_text(draw, "Full Stack Developer", 300, 1200, 36, color=(180, 140, 255), opacity=220)
draw_centered_text(draw, "React · Node.js · TypeScript · Next.js", 370, 1200, 22, color=(180, 200, 220), opacity=140)
bar = gradient_image(200, 5, c1, c2)
og.paste(bar, (500, 430))
out = os.path.join(BASE, "og-image.jpg")
og.save(out, "JPEG", quality=90)
print(f"  ✓ {out}")

print("\nAll placeholder images generated successfully.")
