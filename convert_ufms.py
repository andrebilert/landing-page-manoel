from PIL import Image
import os

# Source directory (Artifacts)
src_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\b300d07a-720d-42cf-907f-df20b50fd1c3"

# Target directory (Public Assets)
target_dir = r"C:\Users\Usuario\Desktop\Projetos\landing-page-manoel\public\assets"

# Mapping: Source Filename -> Target Basename
mapping = {
    "uploaded_image_1765027441204.png": "ufms.webp"
}

def convert_images():
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    for src_name, target_name in mapping.items():
        src_path = os.path.join(src_dir, src_name)
        target_path = os.path.join(target_dir, target_name)

        try:
            if os.path.exists(src_path):
                print(f"Converting {src_name} to {target_name}...")
                with Image.open(src_path) as img:
                    img.save(target_path, "WEBP", quality=90)
                print(f"Success: {target_path}")
            else:
                print(f"Error: Source file not found: {src_path}")
        except Exception as e:
            print(f"Failed to convert {src_name}: {e}")

if __name__ == "__main__":
    convert_images()
