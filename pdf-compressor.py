import os
import subprocess

# Update this path based on where you installed Ghostscript
GHOSTSCRIPT_PATH = r"C:\Program Files (x86)\gs\gs10.05.0\bin\gswin32.exe"

def compress_pdfs(folder_path, quality="screen"):
    """
    Compress all PDFs in a folder using Ghostscript.

    :param folder_path: Path to the folder containing PDFs.
    :param quality: Ghostscript quality setting (screen, ebook, printer, prepress).
    """
    if not os.path.isdir(folder_path):
        print("Invalid folder path!")
        return

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".pdf"):
            file_path = os.path.join(folder_path, filename)
            new_file_path = file_path.replace(".pdf", "_compressed.pdf")

            try:
                subprocess.run([
                    GHOSTSCRIPT_PATH, "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.4",
                    f"-dPDFSETTINGS=/{quality}", "-dNOPAUSE", "-dBATCH", "-dQUIET",
                    f"-sOutputFile={new_file_path}", file_path
                ], check=True)

                # Attempt to replace the original file with the compressed version
                try:
                    os.replace(new_file_path, file_path)
                    print(f"Compressed: {filename}")
                except PermissionError:
                    print(f"Skipping {filename}: Access is denied: '{new_file_path}' -> '{file_path}'")

            except Exception as e:
                print(f"Skipping {filename}: {e}")

if __name__ == "__main__":
    folder_path = r"D:\MY_PROJECTS\SPE\spe-website\spe-site\dist\pdfs\Echo"
    compress_pdfs(folder_path)
