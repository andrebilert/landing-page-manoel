from PIL import Image
import os

directories = [
    "public/assets/festas",
    "public/assets/foto-convite",
    "public/assets/colacao"
]

for directory in directories:
    print(f"--- Analyzing {directory} ---")
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        continue
        
    files = sorted([f for f in os.listdir(directory) if f.endswith('.webp')])
    for f in files:
        path = os.path.join(directory, f)
        try:
            with Image.open(path) as img:
                width, height = img.size
                aspect = width / height
                orientation = "Landscape" if width > height else "Portrait"
                print(f"{f}: {width}x{height} ({orientation})")
        except Exception as e:
            print(f"Error reading {f}: {e}")
