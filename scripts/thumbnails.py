from PIL import Image
import os

def create_thumbnail(input_dir, output_dir, size=(500, 500)):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_path = os.path.join(input_dir, filename)
            img = Image.open(image_path)
            
            # Create a thumbnail and maintain aspect ratio
            img.thumbnail(size)
            
            # Generate thumbnail filename and save path
            thumb_filename = f"thumb_{filename}"
            save_path = os.path.join(output_dir, thumb_filename)
            
            # Save thumbnail
            img.save(save_path)
            print(f"Thumbnail created for {filename}: {save_path}")

# Specify the directory containing your original images and where to save the thumbnails
original_images_dir = './photos'
thumbnails_dir = './photos/thumbnails'

# Call the function with your specified directories
create_thumbnail(original_images_dir, thumbnails_dir)
