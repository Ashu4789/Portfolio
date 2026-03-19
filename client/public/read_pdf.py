import sys
try:
    import pypdf
    PdfReader = pypdf.PdfReader
except ImportError:
    import PyPDF2
    PdfReader = PyPDF2.PdfReader

def read_pdf(file_path):
    print("Reading PDF...")
    try:
        with open(file_path, 'rb') as file:
            reader = PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            with open('cv_text.txt', 'w', encoding='utf-8') as f:
                f.write(text)
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if len(sys.argv) > 1:
    read_pdf(sys.argv[1])
