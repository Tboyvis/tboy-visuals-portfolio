
from PIL import Image, ImageOps, ImageDraw, ImageFont
from pathlib import Path

# Exact wedding image folder
image_folder = Path("images-webp/wedding")

# Only the 24 images used in the wedding viewer
image_files = [
    "1.webp", "2.webp", "3.webp", "4.webp",
    "5.webp", "6.webp", "8.webp", "10.jpgg.webp",
    "DSC_0044.webp", "DSC_0075.jpgg.webp",
    "DSC_0081.jpg2.webp", "DSC_0081.jpgg.webp",
    "DSC_0086.jpg1.webp", "DSC_0087.webp",
    "DSC_0108.webp", "DSC_0170.webp",
    "DSC_1950.webp", "DSC_1994.jpg1.webp",
    "DSC_1996.jpg1.webp", "DSC_2044.webp",
    "DSC_2054.webp", "DSC_2072.jpg1.webp",
    "DSC_2163.webp", "DSC02636.webp"
]

# Contact sheet layout
columns = 4
thumb_width = 320
thumb_height = 230
label_height = 35
padding = 18

rows = (len(image_files) + columns - 1) // columns

sheet_width = columns * (thumb_width + padding) + padding
sheet_height = rows * (thumb_height + label_height + padding) + padding

sheet = Image.new("RGB", (sheet_width, sheet_height), "#171512")
draw = ImageDraw.Draw(sheet)

font = ImageFont.load_default()

for index, filename in enumerate(image_files):

    image_path = image_folder / filename

    if not image_path.exists():
        print(f"Missing: {filename}")
        continue

    with Image.open(image_path) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        thumbnail = ImageOps.contain(image, (thumb_width, thumb_height))

    column = index % columns
    row = index // columns

    x = padding + column * (thumb_width + padding)
    y = padding + row * (thumb_height + label_height + padding)

    # Center image inside thumbnail area
    image_x = x + (thumb_width - thumbnail.width) // 2
    image_y = y + (thumb_height - thumbnail.height) // 2

    sheet.paste(thumbnail, (image_x, image_y))

    draw.text(
        (x, y + thumb_height + 8),
        filename,
        fill="#eeeae3",
        font=font
    )

output_path = Path("wedding-contact-sheet.jpg")
sheet.save(output_path, quality=92)

print(f"\nContact sheet created: {output_path.resolve()}")
