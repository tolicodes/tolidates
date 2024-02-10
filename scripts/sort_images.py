import os
from PIL import Image
import yaml

# Directory containing images
image_dir = './photos'
images = []

# Loop through image files
for file_name in os.listdir(image_dir):
    if file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
        file_path = os.path.join(image_dir, file_name)
        with Image.open(file_path) as img:
            width, height = img.size
            images.append({
                'path': file_path.replace('./', ''),  # Adjust path as needed
                'width': width,
                'height': height
            })

# Sort images by width, then height
images.sort(key=lambda x: (x['width'], x['height']))

# Generate YAML
with open('images.yml', 'w') as f:
    yaml.dump({'images': images}, f, default_flow_style=False)
