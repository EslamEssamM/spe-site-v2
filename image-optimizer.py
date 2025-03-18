from PIL import Image
import os

def optimize_images(folder_path, quality=75, max_width=1000, max_height=1000):
    """
    Optimize all images in a folder and overwrite them with optimized versions.
    
    :param folder_path: Path to the folder containing images.
    :param quality: Compression quality (1-100, lower means more compression).
    :param max_width: Resize width limit (set to None to disable resizing).
    :param max_height: Resize height limit (set to None to disable resizing).
    """
    if not os.path.isdir(folder_path):
        print("Invalid folder path!")
        return

    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        try:
            with Image.open(file_path) as img:
                # Convert to RGB (some formats require it)
                img = img.convert("RGB")

                # Resize if the image is too large
                if max_width and max_height:
                    img.thumbnail((max_width, max_height))

                # Save optimized version, overwriting the original
                new_file_path = file_path.rsplit('.', 1)[0] + ".webp"  # Convert to WebP for better compression
                img.save(new_file_path, format="WEBP", optimize=True, quality=quality)

                # Remove the old file if format was converted
                if file_path != new_file_path:
                    os.remove(file_path)

                print(f"Optimized: {filename} → {os.path.basename(new_file_path)}")

        except Exception as e:
            print(f"Skipping {filename}: {e}")

if __name__ == "__main__":
    folder_path = input("Enter the folder path: ").strip()
    optimize_images(folder_path)
