
from PIL import Image
from pathlib import Path

source = Path("images/hero.JPG")
output = Path("images")

sizes = [860, 1600, 2400]

with Image.open(source) as original:
    original = original.convert("RGB")

    for width in sizes:
        height = round(original.height * width / original.width)

        resized = original.resize(
            (width, height),
            Image.Resampling.LANCZOS
        )

        destination = output / f"hero-{width}.webp"

        resized.save(
            destination,
            "WEBP",
            quality=82,
            method=6
        )

        size_kb = destination.stat().st_size / 1024

        print(f"Created: {destination} — {size_kb:.1f} KB")

print("Hero optimization complete!")
