from PIL import Image
import os

source_paths = [
    'C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_0_1764985791037.jpg',
    'C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_1_1764985791037.jpg',
    'C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_2_1764985791037.jpg',
    'C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_3_1764985791037.jpg',
    'C:/Users/Usuario/.gemini/antigravity/brain/2f4df6c0-5cfb-46e5-82de-63c094aec76d/uploaded_image_4_1764985791037.jpg'
]

output_dir = 'public/assets/missa'
os.makedirs(output_dir, exist_ok=True)

start_index = 6
for i, path in enumerate(source_paths):
    img = Image.open(path)
    output_path = os.path.join(output_dir, f'missa-{start_index + i}.webp')
    img.save(output_path, 'WEBP', quality=85)
    print(f'Saved {output_path}')
