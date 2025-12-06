from PIL import Image
import os

# Batch 3 Images
batch3_images = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988565667.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988565667.jpg"
]

# Batch 4 Images
batch4_images = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988601128.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988601128.jpg"
]

# Batch 5 Images
batch5_images = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988642376.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988642376.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988642376.jpg"
]

all_images = batch3_images + batch4_images + batch5_images
output_dir = "public/assets/festas"
os.makedirs(output_dir, exist_ok=True)

# Start index from 11 since we already have 10 images
start_index = 11

for i, source_path in enumerate(all_images):
    try:
        img = Image.open(source_path)
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        output_path = os.path.join(output_dir, f"festas-{start_index + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")
