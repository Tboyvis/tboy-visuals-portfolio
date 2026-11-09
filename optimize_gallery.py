
from PIL import Image, ImageOps
from pathlib import Path

ROOT = Path(__file__).parent
SOURCE = ROOT / "images-original"
OUTPUT = ROOT / "images-webp"

images = [
    ("ADE_4602.jpg.jpg", "ADE_4602"),
    ("wedding/1.webp", "wedding/1"),
    ("red-room/cover1.webp", "red-room/cover1"),
    ("fashion/cover.webp", "fashion/cover"),
    ("lifestyles/cover.webp", "lifestyles/cover"),
    ("Editorial/cover.webp", "Editorial/cover"),
]

sizes = [900, 1200, 1600, 1800]

for source_name, output_name in images:
    source_path = SOURCE / source_name

    if not source_path.exists():
        print(f"Missing source: {source_path}")
        continue

    with Image.open(source_path) as original:
        original = ImageOps.exif_transpose(original)

        if original.mode in ("RGBA", "LA"):
            original = original.convert("RGBA")
        else:
            original = original.convert("RGB")

        original_width, original_height = original.size

        print(f"\nProcessing: {source_name}")
        print(f"Original dimensions: {original_width} x {original_height}")

        for target_width in sizes:
            if original_width <= target_width:
                continue

            target_height = round(
                original_height * target_width / original_width
            )

            resized = original.resize(
                (target_width, target_height),
                Image.Resampling.LANCZOS
            )

            destination = OUTPUT / f"{output_name}-hq-{target_width}.webp"
            destination.parent.mkdir(parents=True, exist_ok=True)

            resized.save(
                destination,
                "WEBP",
                quality=92,
                method=6
            )

            size_kb = destination.stat().st_size / 1024

            print(
                f"Created: {destination.relative_to(ROOT)} "
                f"| {target_width}px "
                f"| {size_kb:.1f} KB"
            )

print("\nHIGH-QUALITY GALLERY OPTIMIZATION COMPLETE!")
