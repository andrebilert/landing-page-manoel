from PIL import Image
import os

# Festas Images
festas_images = [
    # Batch 3
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988565667.jpg",
    # Batch 4
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988601128.jpg",
    # Batch 5
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988642376.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988642376.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988642376.jpg"
]

# Foto Convite Images (Batch 6)
foto_convite_images = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988722359.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988722359.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988722359.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988722359.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988722359.jpg"
]

# Process Festas
festas_dir = "public/assets/festas"
os.makedirs(festas_dir, exist_ok=True)
festas_start_index = 11

for i, source_path in enumerate(festas_images):
    try:
        img = Image.open(source_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        output_path = os.path.join(festas_dir, f"festas-{festas_start_index + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")

# Process Foto Convite
foto_convite_dir = "public/assets/foto-convite"
os.makedirs(foto_convite_dir, exist_ok=True)
foto_convite_start_index = 1

for i, source_path in enumerate(foto_convite_images):
    try:
        img = Image.open(source_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        output_path = os.path.join(foto_convite_dir, f"foto-convite-{foto_convite_start_index + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")
