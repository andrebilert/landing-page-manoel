import os
from PIL import Image

def optimize_images():
    assets_dir = 'public/assets'
    if not os.path.exists(assets_dir):
        print(f"Directory {assets_dir} not found.")
        return

    for filename in os.listdir(assets_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(assets_dir, filename)
            try:
                with Image.open(filepath) as img:
                    # Determine max width based on filename
                    max_width = 1920 # Default
                    if 'hero' in filename.lower():
                        max_width = 1920
                    elif 'testimonial' in filename.lower():
                        max_width = 200
                    elif 'logo' in filename.lower() or filename.lower().startswith('u'): # uem, unicesumar, etc.
                        max_width = 400
                    elif 'portfolio' in filename.lower():
                        max_width = 1024
                    
                    # Resize if needed
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename} to {max_width}px width")

                    # Save as WebP
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_filepath = os.path.join(assets_dir, new_filename)
                    
                    img.save(new_filepath, 'WEBP', quality=80)
                    print(f"Converted {filename} to {new_filename}")
            except Exception as e:
                print(f"Failed to process {filename}: {e}")

if __name__ == "__main__":
    optimize_images()
