from PIL import Image
import os

# Foto Convite Batch 7 (uploaded in Step 772)
foto_convite_batch7 = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988852810.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988852810.jpg"
]

# Foto Convite Batch 8 (uploaded in Step 776)
foto_convite_batch8 = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988868522.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988868522.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764988868522.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764988868522.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764988868522.jpg"
]

# Colacao Batch 9 (uploaded in Step 778)
colacao_batch9 = [
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764988916360.jpg",
    r"C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764988916360.jpg"
]

# Process Foto Convite
foto_convite_dir = "public/assets/foto-convite"
os.makedirs(foto_convite_dir, exist_ok=True)

# Batch 7 starts at 6 (1-5 were processed previously)
start_index_7 = 6
for i, source_path in enumerate(foto_convite_batch7):
    try:
        img = Image.open(source_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        output_path = os.path.join(foto_convite_dir, f"foto-convite-{start_index_7 + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")

# Batch 8 starts at 11
start_index_8 = 11
for i, source_path in enumerate(foto_convite_batch8):
    try:
        img = Image.open(source_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        output_path = os.path.join(foto_convite_dir, f"foto-convite-{start_index_8 + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")

# Process Colacao
colacao_dir = "public/assets/colacao"
os.makedirs(colacao_dir, exist_ok=True)
colacao_start_index = 1

for i, source_path in enumerate(colacao_batch9):
    try:
        img = Image.open(source_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        output_path = os.path.join(colacao_dir, f"colacao-{colacao_start_index + i}.webp")
        img.save(output_path, "WEBP", quality=85)
        print(f"Converted {source_path} to {output_path}")
    except Exception as e:
        print(f"Error converting {source_path}: {e}")
