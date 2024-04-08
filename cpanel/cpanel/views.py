#3/27/2024
import pathlib
import textwrap
import google.generativeai as genai
import PyPDF2
import docx
from IPython.display import display
from IPython.display import Markdown
import google.generativeai as genai
import json
import os
import textract
from django.shortcuts import render,redirect
import pyrebase
from django.contrib import auth
from django import forms
from django.http import HttpResponseRedirect
import firebase_admin
from firebase_admin import credentials,db
from firebase_admin import storage
import glob
import requests
from django.shortcuts import render,redirect
import pyrebase
from django import forms
import os
import json
import urllib.request
import tempfile
import docx
import sys
from dotenv import load_dotenv
sys.path.append(r"C:\Users\npatel237\OneDrive - Georgia State University\CareerSwipe\cpanel")
from config import config
from config import cred as creds

load_dotenv()
API=os.getenv("API")

class UploadFileForm(forms.Form):
    file = forms.FileField()

def file_ext(file_path,user_id):

   def to_markdown(text):
      text = text.replace('•', '  *')
      return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
   
   def read_pdf_from_url(url):
    # Download PDF from URL
    response = requests.get(url)
   
   def pdf(file_path):
      print("came to pdf method!!!")
      try:
         response = urllib.request.urlopen(file_path)
         pdf_content = response.read()
      except Exception as e:
         # Handle exception if URL couldn't be opened
         print("Error:", e)
         return None

      with tempfile.NamedTemporaryFile(delete=False) as temp_file:
         temp_file.write(pdf_content)
         temp_file.seek(0)

         # Read the PDF content from the temporary file using PyPDF2
         pdf_reader = PyPDF2.PdfReader(temp_file)
         text = ""
         page = pdf_reader.pages[0]  # Extract text from only the first page
         page_text = page.extract_text()
         text += page_text
      response.close()
      return text

   def wdocx(file_url):
      # Download the file from the URL
      response = requests.get(file_url)
      
      # Save the file to a temporary location
      import tempfile
      with tempfile.NamedTemporaryFile(delete=False) as temp_file:
         temp_file.write(response.content)
         temp_file_path = temp_file.name
      
      # Extract the text from the file
         print("1")
         try:
            #text = textract.process(temp_file_path)
            doc = docx.Document(temp_file_path)
            text = '\n'.join([paragraph.text for paragraph in doc.paragraphs])
         except:
            print("EXE")
            text = ""
            text = textract.process(temp_file_path, encoding='utf-8')
         print("2")
      # Clean up the temporary file
      import os
      os.remove(temp_file_path)
      
      # Return the extracted text
      return text
   
   def txt(url):
      try:
         # Open the URL and read the content
         response = urllib.request.urlopen(url)
         content = response.read()
         
         # Decode the content as a string
         text = content.decode('utf-8')
         
         # Close the response
         response.close()
         
         return text
      except urllib.error.URLError as e:
         print(f"Error: {e}")
         return None
   
# ######Before Modified#######################
#    def pdf2(file_path):
#       try:
#          #response = requests.get(file_path)
#          response = urllib.request.urlopen(file_path)
#       except:
#          pass
#       with open(file_path, 'rb') as file:
#          pdf_reader = PyPDF2.PdfReader(file)
#          text = ""
#          page = pdf_reader.pages[0]  # Extract text from only the first page
#          page_text = page.extract_text()
#          text += page_text
#       return text

#    def wdocx2(file_path):
#       text = textract.process(file_path)
#       return text.decode('utf-8')
   

#    def txt2(file_path):
#       with open(file_path, "r", encoding='latin-1') as f:
#          text = f.read()
#       return text
# ######Before Modified#######################

   def resume_data(file_content, user_id):
      
      model = genai.GenerativeModel('gemini-pro') 
      genai.configure(api_key=API)
      chat = model.start_chat()  
      
      chat.send_message(file_content)  
      final = ''


      # quest=("https://firebasestorage.googleapis.com/v0/b/careerswipe-c08a4.appspot.com/o/Master%2FQuestions.txt?alt=media&token=1fb5936b-402b-43a1-b21d-b59fa308d13a")
      # with open(quest) as f:
      #    questions = f.read()  
      # q_url=storage.child('Master').child('Questions.txt').get_url(None)
      # print("Questions url: ", q_url)
      # questions=txt(q_url)
      questions=['Give the answer of the following in a single json format: "Personal Info" : Name, Email, Phone Number, and Location."Education"  : University, GPA, Major and Minor. "Skills" : Such as 8 programming skills, 5 technological skills, 5 behavioural skills. "Work Experience": Position, Company, Location, Dates, Small summary of that role. "Extracurricular Activities": Avtivity, Role. All the links present in this text. "Suggestions": Suggest what are the 5 best roles for this candidate in future. "Score" : Based on the candidates major GPA, give score out of 100. "Improvement Suggestions" : List 3 things that this candidate do to improve the resume.']
      # storage_app = firebase_admin.get_app()
      # storage_client = storage.client(app=storage_app)
      # bucket = storage_client.bucket()

      for question in questions:
         response = chat.send_message(question)
         answer = response.text.replace('python', '').replace('```', '').replace('candidate_info = {', '').replace('json', '')
         final += answer
      global final_json
      final_json = json.loads(final)
      # global file_path_json
      # final_json_str = json.dumps(final_json)
      # print(final_json_str)
      # storage.child('jsonfiles').child(f'{user_id}.json').put(final_json_str)

      #bucket = storage.bucket()
      # blob = bucket.blob(f'jsonfiles/{user_id}.json')
      # blob.upload_from_string(final_json_str, content_type='application/json')
      # print('json uploaded')
      # global file_path_json
      # file_path_json = r"C:\Users\mkolla1\Downloads\carreerr\cpanel\text_data.json"
      # with open(file_path_json, 'w') as json_file:
      #    json.dump(final_json, json_file)

      # with open(file_path_json) as f:
      #    data = json.load(f)
      # print(type(data))
      # print("DATA IS", data)
      # print("types are",type(data),type(final_json) )
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


def signIn(request):
   return render(request,'signin.html')

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
         #storage.child(my_resume_name).download(filename='resume'+my_resume.name,path='/cpanel')
         download_url = storage.child(my_resume_name).get_url(None)
         print(download_url)
      except:
          return render(request,'welcome.html',{"message":'Retry upload'})
      url='gs://careerswipe-c08a4.appspot.com/'+my_resume_name
      print(url)
      web_path=(r'https://firebasestorage.googleapis.com/v0/b/careerswipe-c08a4.appspot.com/o/'+my_resume_name)
      #web_path=(r'gs://careerswipe-c08a4.appspot.com/'+my_resume_name)

      
      #local_path=(r'C:\Users\mkolla1\Downloads\carreerr\cpanel\resume'+my_resume.name)
      #print((local_path))
      print(user_id)
      data_file=file_ext(download_url,user_id)
      print(type(data_file))
      ref = db.reference(f'/student/{user_id}')
      ref.set(final_json)
      # try:
      #    #with open(r"C:\Users\mkolla1\Downloads\carreerr\cpanel\text_data.json", 'r') as json_file:
      #    with open(fr'{file_path_json}', 'r') as json_file:
      #       resume_date = json.load(json_file)
      #       print(type(resume_date))
      #       ref.set(final_json)
      # except FileNotFoundError:
      #    print("Error: File not found. Please check the file path.")
      
      # data={'Resume':url}
      # database.set(data)
      # database.child('users').child(user_id).child('details').update(data_file)
      return render(request,'uploadsuccess.html',{'file':final_json})
   else:
      form=UploadFileForm()
      #message= resume_date
      message='form not valid'
      return render(request,'welcome.html',{'form':form, 'message':message})

def forgotpassword(request):
   return render(request,'forgotpassword.html')

def postforgotpassword(request):

   email=request.POST.get('email')
   autho.send_password_reset_email(email)

   return render(request,'signin.html')