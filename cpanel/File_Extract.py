from libraries import *
# current_path=os.path.dirname(os.path.abspath(__file__))
# file_path=glob.glob(os.path.join(current_path, 'resume*'))
# #file_path='C:\Users\npatel237\OneDrive - Georgia State University\CareerSwipe\New folder\Test_Resumes\Patel_Nishchay.pdf'
# file_path=(file_path[1])

def file_ext(file_path):
    file_path=file_path
    def to_markdown(text):
        text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


    model = genai.GenerativeModel('gemini-pro') # Google Model To Use

    genai.configure(api_key=API)

    chat = model.start_chat()

    def pdf(file_path):
                with open(file_path, 'rb') as file:
                    pdf_reader = PyPDF2.PdfReader (file)
                    text = ""
                    page = pdf_reader.pages[0]
                    page_text = page.extract_text()
                    text += page_text    
                return text

    def wdocx(file_path):
        text = textract.process(file_path)
        return text.decode('utf-8')

    def txt(file_path):
        with open(file_path, "r", encoding='latin-1') as f:
            text = f.read()
            return text
        
    def resume_data(file_content):
        chat = model.start_chat()
        chat.send_message(file_content)     # Passing the Resume text to AI model
        questions=[]
        with open("Questions.txt", "r") as f:
            for line in f:
                questions.append(line)
        for i in questions:
            response = chat.send_message(i)
            answer= response.text
            answer=answer.replace('python', '').replace('```','').replace('candidate_info = {','')
            print(answer)

    file_content=''
    def file_read(file_path):
        file_extension = os.path.splitext(file_path)
        if file_extension.lower() == '.txt':
            text=txt(file_path)
            return text
        elif file_extension.lower() == '.docx':
            text=wdocx(file_path)
            return text
        elif file_extension.lower() == '.pdf':
            text=pdf(file_path)
            return text
        else:
            return 'Upload only PDF, DOCX, TXT. Try Again'

    file_content=file_read(file_path)
    resume_data(file_content)
    
    
    
    
    
    
    
