from PIL import Image
import os

# Batch 7 Images (uploaded in Step 772)
batch7_images = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988852810.jpg"
]

output_dir = "public/assets/foto-convite"
os.makedirs(output_dir, exist_ok=True)

# Start index from 6 since we already have 5 images (foto-convite-1..5)
start_index = 6

for i, source_path in enumerate(batch7_images):
    try:
        img = Image.open(source_path)
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        output_path = os.path.join(output_dir, f"foto-convite-{start_index + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")
