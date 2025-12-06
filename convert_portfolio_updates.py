from PIL import Image
import os

# Source directory
src_dir = r"C:\Users\Usuario\.gemini\antigravity\brain\b300d07a-720d-42cf-907f-df20b50fd1c3"
# Target directory
target_dir = r"C:\Users\Usuario\Desktop\Projetos\landing-page-manoel\public\assets"

files = [
    # Group 1
    ("uploaded_image_0_1765036758605.jpg", "portfolio-5.webp"),
    ("uploaded_image_1_1765036758605.jpg", "portfolio-6.webp"),
    ("uploaded_image_2_1765036758605.jpg", "portfolio-7.webp"),
    ("uploaded_image_3_1765036758605.jpg", "portfolio-8.webp"),
    ("uploaded_image_4_1765036758605.jpg", "portfolio-9.webp"),
    # Group 2
    ("uploaded_image_0_1765036786862.jpg", "portfolio-10.webp"),
    ("uploaded_image_1_1765036786862.jpg", "portfolio-11.webp"),
    ("uploaded_image_2_1765036786862.jpg", "portfolio-12.webp"),
    ("uploaded_image_3_1765036786862.jpg", "portfolio-13.webp"),
    ("uploaded_image_4_1765036786862.jpg", "portfolio-14.webp"),
    # Group 3
    ("uploaded_image_1765036797338.jpg", "portfolio-15.webp")
]

def convert():
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    for src_name, target_name in files:
        src_path = os.path.join(src_dir, src_name)
        target_path = os.path.join(target_dir, target_name)
        
        try:
            if os.path.exists(src_path):
                print(f"Converting {src_name} -> {target_name}")
                with Image.open(src_path) as img:
                    img.save(target_path, "WEBP", quality=90)
            else:
                print(f"Skipping {src_name} (not found)")
        except Exception as e:
            print(f"Error converting {src_name}: {e}")

if __name__ == "__main__":
    convert()
