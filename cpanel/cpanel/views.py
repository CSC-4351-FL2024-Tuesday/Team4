import sys
sys.path.append(r"C:\Users\npatel237\OneDrive - Georgia State University\CareerSwipe\cpanel")
from config import config
from config import cred as creds
from libraries import *

load_dotenv()
API=os.getenv("API")

class UploadFileForm(forms.Form):
    file = forms.FileField()

def file_ext(file_path,user_id):

   def to_markdown(text):
      text = text.replace('•', '  *')
      return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
   
   def read_pdf_from_url(url):
    response = requests.get(url)
   
   def pdf(file_path):
      print("came to pdf method!!!")
      try:
         response = urllib.request.urlopen(file_path)
         pdf_content = response.read()
      except Exception as e:
         print("Error:", e)
         return None

      with tempfile.NamedTemporaryFile(delete=False) as temp_file:

         temp_file.write(pdf_content)
         temp_file.seek(0)
         temp_file_path = temp_file.name

         pdf_reader = PyPDF2.PdfReader(temp_file)
         text = ""
         page = pdf_reader.pages[0]  
         page_text = page.extract_text()
         text += page_text
         os.remove(temp_file_path)
      response.close()
      return text

   def wdocx(file_url):
      response = requests.get(file_url)
      with tempfile.NamedTemporaryFile(delete=False) as temp_file:
         temp_file.write(response.content)
         temp_file_path = temp_file.name
      
         print("1")
         try:
            doc = docx.Document(temp_file_path)
            text = '\n'.join([paragraph.text for paragraph in doc.paragraphs])
         except:
            print("EXE")
            text = ""
            text = textract.process(temp_file_path, encoding='utf-8')
         print("2")
         
      os.remove(temp_file_path)
      return text
   
   def txt(url):
      try:

         response = urllib.request.urlopen(url)
         content = response.read()
         text = content.decode('utf-8')
         response.close()
         
         return text
      except urllib.error.URLError as e:
         print(f"Error: {e}")
         return None
   

   def resume_data(file_content, user_id):
      
      model = genai.GenerativeModel('gemini-pro') 
      genai.configure(api_key=API)
      chat = model.start_chat()  
      
      chat.send_message(file_content)  
      final = ''

      questions=['Give the answer of the following in a single json format: "Personal Info" : Name, Email, Phone Number, and Location."Education"  : University, GPA, Major and Minor. "Skills" : Such as 8 programming skills, 5 technological skills, 5 behavioural skills. "Work Experience": Position, Company, Location, Dates, Small summary of that role. "Extracurricular Activities": Avtivity, Role. All the links present in this text. "Suggestions": Suggest what are the 5 best roles for this candidate in future. "Score" : Based on the candidates major GPA, give score out of 100. "Improvement Suggestions" : List 3 things that this candidate do to improve the resume.']

      for question in questions:
         response = chat.send_message(question)
         answer = response.text.replace('python', '').replace('```', '').replace('candidate_info = {', '').replace('json', '')
         final += answer
      global final_json
      final_json = json.loads(final)
      return final_json

   def file_read(file_path):
      if file_path.endswith('.txt') or '.txt' in file_path:
         return txt(file_path)
      elif file_path.endswith('.docx') or '.docx' in file_path:
         print('its a word document')
         return wdocx(file_path)
      elif file_path.endswith('.pdf') or '.pdf' in file_path:
         return pdf(file_path)
      else:
         return 'Upload only PDF, DOCX, TXT. Try Again'

   print('Made it')
   file_content=file_read(file_path)
   print("PDF file reading done")
   data=resume_data(file_content,user_id)
   print("getting text done")
   return data


#######################################################################################################################################



firebase=pyrebase.initialize_app(config)
autho=firebase.auth()
database=firebase.database()
storage=firebase.storage()


try:
   cred = credentials.Certificate(creds)
   firebase_admin.initialize_app(cred, {"databaseURL": config['databaseURL']})
except:
   print("Wrong CREDENTIALS!!!!!!!!!!!!!")


def firstspage(request):
   return render(request,'firstspage.html')

def signin(request):
   return render(request,'signin.html')

def Rsignin(request):
   return render(request,'Rsignin.html')

def Rsignup(request):
   return render(request,'Rsignup.html')

def postRsignin(request):
      global user
      email=request.POST.get('email')
      password=request.POST.get('password')
      try:
         user=autho.sign_in_with_email_and_password(email,password)
         #print(user['idToken']) 
         sessionId=user['idToken']
         request.session=str(sessionId)
      except:
         message="Invalid"
         return render(request,'Rsignin.html',{"message":message})
      return render(request,"Rwelcome.html",{'e':email})

def postsignin(request):
      global user
      email=request.POST.get('email')
      password=request.POST.get('password')
      try:
         user=autho.sign_in_with_email_and_password(email,password)
         #print(user['idToken']) 
         sessionId=user['idToken']
         request.session=str(sessionId)
      except:
         message="Invalid"
         return render(request,'signin.html',{"message":message})
      return render(request,"welcome.html",{'e':email})


def logout(request):
   auth.logout(request)
   return render(request,('signin.html'))

    
def signup(request):
   return render(request,'signup.html')

def loading(request):
   return render(request,('loading.html'))


def postsignup(request):
   name=request.POST.get('name')
   email=request.POST.get('email')
   password=request.POST.get('password')
   confirmpassword=request.POST.get('confirmpassword')
   if confirmpassword!=password:
      message="Password didnt match"
      return render(request,'signup.html',{"message":message})
   try:
      if email.endswith('.edu'):
         user=autho.create_user_with_email_and_password(email,password)
         autho.send_email_verification(user['idToken'])
      else:
         message="Use only Student Email Address"
         return render(request,'signup.html',{"message":message})
   except:
      message="Unable to Login Try again"
      return render(request,'signup.html',{"message":message})
   user_id=user['localId']
   data={'name':name,'status':'1'}
   database.child('student').child(user_id).child('details').set(data)
   message='Check the link, sent to the email entered above, so we can confirm your email address'
   return render(request,'signin.html',{"message":message})


def postRsignup(request):
   name=request.POST.get('company_name')
   email=request.POST.get('hr_email')
   password=request.POST.get('password')
   confirmpassword=request.POST.get('confirmpassword')
   if confirmpassword!=password:
      message="Password didnt match"
      return render(request,'signup.html',{"message":message})
   try:
      if email.endswith('.edu'):
         user=autho.create_user_with_email_and_password(email,password)
         autho.send_email_verification(user['idToken'])
      else:
         message="Use only Student Email Address"
         return render(request,'signup.html',{"message":message})
   except:
      message="Unable to Login Try again"
      return render(request,'signup.html',{"message":message})
   user_id=user['localId']
   data={'name':name,'status':'1'}
   database.child('student').child(user_id).child('details').set(data)
   message='Check the link, sent to the email entered above, so we can confirm your email address'
   return render(request,'signin.html',{"message":message})

def loading(request):
   return render(request,'loading.html')

def uploadfile(request):
   user=autho.current_user
   form=UploadFileForm(request.POST,request.FILES)
   if form.is_valid():
      user_id=user['localId']
      my_resume=request.FILES['file']
      my_resume_name=my_resume.name
      my_resume_name=user_id+my_resume_name
      print("resume type is : ",type(my_resume))
      storage.child(my_resume_name).put(my_resume)
      try:
         download_url = storage.child(my_resume_name).get_url(None)
         print(download_url)
      except:
          return render(request,'welcome.html',{"message":'Retry upload'})
      #url='gs://careerswipe-c08a4.appspot.com/'+my_resume_name
      #web_path=(r'https://firebasestorage.googleapis.com/v0/b/careerswipe-c08a4.appspot.com/o/'+my_resume_name)
      data_file=file_ext(download_url,user_id)
      ref = db.reference(f'/student/{user_id}')
      ref.set(final_json)
      return render(request,'uploadsuccess.html',{'file':data_file})
   else:
      form=UploadFileForm()
      message='form not valid'
      return render(request,'welcome.html',{'form':form, 'message':message})

def forgotpassword(request):
   return render(request,'forgotpassword.html')

def postforgotpassword(request):

   email=request.POST.get('email')
   autho.send_password_reset_email(email)

   return render(request,'signin.html')