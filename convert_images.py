from PIL import Image
from pathlib import Path

# Main image folder
SOURCE_FOLDER = Path("images")

# Where converted images will be saved
OUTPUT_FOLDER = Path("images-webp")

# WebP quality
QUALITY = 85

extensions = {".jpg", ".jpeg"}

converted = 0

for image_path in SOURCE_FOLDER.rglob("*"):

    if image_path.suffix.lower() not in extensions:
        continue

    try:
        with Image.open(image_path) as image:

            # Preserve the original folder structure
            relative_path = image_path.relative_to(SOURCE_FOLDER)

            output_path = OUTPUT_FOLDER / relative_path.with_suffix(".webp")

            output_path.parent.mkdir(parents=True, exist_ok=True)

            image.save(
                output_path,
                "WEBP",
                quality=QUALITY,
                method=6
            )

            converted += 1

            print(f"Converted: {image_path}")

    except Exception as error:
        print(f"Could not convert {image_path}: {error}")

print(f"\nFinished! {converted} images converted.")cd