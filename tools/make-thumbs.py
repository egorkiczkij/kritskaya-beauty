"""Лёгкие копии фото для ленты и размытые превью.

Запуск из корня сайта:  python3 tools/make-thumbs.py
Для каждого .jpg в photos/ создаёт photos/s/<имя>.webp (ширина 640, для аватара 760)
и пишет photos/s/thumbs.js: путь оригинала -> лёгкая копия и встроенное размытое превью.
Оригиналы не меняются: они открываются при нажатии на фото.
"""
import base64, glob, io, json, os
from PIL import Image

os.makedirs("photos/s", exist_ok=True)
out = {}
for src in sorted(glob.glob("photos/*.jpg")):
    name = os.path.splitext(os.path.basename(src))[0]
    im = Image.open(src).convert("RGB")
    w = 760 if name == "avatar" else 640
    small = im.copy()
    if small.width > w:
        small = small.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    dst = f"photos/s/{name}.webp"
    small.save(dst, "WEBP", quality=78, method=6)
    tiny = im.resize((16, max(1, round(im.height * 16 / im.width))), Image.LANCZOS)
    buf = io.BytesIO()
    tiny.save(buf, "WEBP", quality=50)
    out[src] = {"s": dst, "q": "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode()}
    print(f"{src}: {os.path.getsize(src)//1024} КБ -> {os.path.getsize(dst)//1024} КБ")

with open("photos/s/thumbs.js", "w", encoding="utf-8") as f:
    f.write("// Создано tools/make-thumbs.py, вручную не править\nwindow.THUMBS = ")
    json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
    f.write(";\n")
print("превью:", os.path.getsize("photos/s/thumbs.js") // 1024, "КБ")
