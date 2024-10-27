import fitz  # PyMuPDF
import os

# Define the directory containing your PDFs
pdf_directory = "./Echo/"  # Replace with your actual path
output_directory = "./Echo/covers/"  # Replace with your actual path

# Ensure the output directory exists
os.makedirs(output_directory, exist_ok=True)

# Function to extract the first page as an image


def extract_first_page_as_image(pdf_path, output_path):
    with fitz.open(pdf_path) as pdf:
        first_page = pdf[0]  # Get the first page
        # Render page to an image (set resolution if needed)
        pix = first_page.get_pixmap(dpi=150)
        pix.save(output_path)


# Process each PDF in the directory
for filename in os.listdir(pdf_directory):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(pdf_directory, filename)
        # Define output path for the image
        output_image_path = os.path.join(
            output_directory, f"{os.path.splitext(filename)[0]}.png")
        extract_first_page_as_image(pdf_path, output_image_path)
        print(f"Saved cover image for {filename} to {output_image_path}")
