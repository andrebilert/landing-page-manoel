from PIL import Image
import os

def generate_favicons():
    source_path = 'public/favicon.png'
    if not os.path.exists(source_path):
        print(f"Error: {source_path} not found.")
        return

    try:
        img = Image.open(source_path)
        
        # Define sizes and names
        configs = [
            (16, 'favicon-16x16.png'),
            (32, 'favicon-32x32.png'),
            (180, 'apple-touch-icon.png'),
            (192, 'android-chrome-192x192.png'),
            (512, 'android-chrome-512x512.png')
        ]
        
        for size, name in configs:
            # Resize
            new_img = img.resize((size, size), Image.Resampling.LANCZOS)
            
            # Save
            output_path = os.path.join('public', name)
            new_img.save(output_path, 'PNG')
            print(f"Generated {name}")
            
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    generate_favicons()
