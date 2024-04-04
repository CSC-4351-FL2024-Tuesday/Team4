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
from django.contrib import auth
from django import forms
import os
import json

API=''


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
      try:
         response = requests.get(file_path)
      except:
         pass
      with open(file_path, 'rb') as file:
         pdf_reader = PyPDF2.PdfReader(file)
         text = ""
         page = pdf_reader.pages[0]  # Extract text from only the first page
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

   def resume_data(file_content, user_id):
      
      model = genai.GenerativeModel('gemini-pro') 
      genai.configure(api_key=API)
      chat = model.start_chat()  
      
      chat.send_message(file_content)  
      questions=[]
      final = ''
      with open(r'C:\Users\Nishc\OneDrive - Georgia State University\CareerSwipe\cpanel\Questions.txt', "r") as f:
         questions = f.readlines()  

      for question in questions:
         response = chat.send_message(question)
         answer = response.text.replace('python', '').replace('```', '').replace('candidate_info = {', '').replace('json', '')
         final += answer

      final_json = json.loads(final)
      file_path_json = r"C:\Users\Nishc\OneDrive - Georgia State University\CareerSwipe\cpanel\text_data.json"
      with open(file_path_json, 'w') as json_file:
         json.dump(final_json, json_file)

      with open(file_path_json) as f:
         data = json.load(f)
      print(type(data))
      return data

   def file_read(file_path):
      if file_path.endswith('.txt'):
         return txt(file_path)
      elif file_path.endswith('.docx'):
         return wdocx(file_path)
      elif file_path.endswith('.pdf'):
         return pdf(file_path)
      else:
         return 'Upload only PDF, DOCX, TXT. Try Again'

   print('Made it')
   file_content=file_read(file_path)
   data=resume_data(file_content,user_id)
   return data


#######################################################################################################################################

from django.shortcuts import render,redirect
import pyrebase
from django.contrib import auth
from django import forms
import os
#'storageBucket': "careerswipe-c08a4.appspot.com",
config={}
firebase=pyrebase.initialize_app(config)
autho=firebase.auth()
database=firebase.database()
storage=firebase.storage()
try:
   cred = credentials.Certificate(r"C:\Users\Nishc\OneDrive - Georgia State University\CareerSwipe\cpanel\creds.json")
   firebase_admin.initialize_app(cred, {"databaseURL": config['databaseURL']})
except:
   print("Wrong CREDENTIALS!!!!!!!!!!!!!")


def signIn(request):
   return render(request,'signin.html')

def postsignin(request):
      global user
      email=request.POST.get('email')
      password=request.POST.get('Password')
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
   password=request.POST.get('Password')
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
      storage.child(my_resume_name).put(my_resume)
      try:
         storage.child(my_resume_name).download(filename='resume'+my_resume.name,path='/cpanel')
      except:
          return render(request,'welcome.html',{"message":'Retry upload'})
      url='gs://careerswipe-c08a4.appspot.com/'+my_resume_name
      print(url)
      garbage='?alt=media&token=49865b6d-c782-4889-b5be-5c97bb472f32'
      web_path=(r'https://firebasestorage.googleapis.com/v0/b/careerswipe-c08a4.appspot.com/o/'+my_resume_name+garbage)
      #web_path=(r'gs://careerswipe-c08a4.appspot.com/'+my_resume_name)
      local_path=(r'C:\Users\Nishc\OneDrive - Georgia State University\CareerSwipe\cpanel\resume'+my_resume.name)
      print((local_path))
      print(user_id)
      data_file=file_ext(local_path,user_id)
      print(type(data_file))
      ref = db.reference(f'/student/{user_id}')
      try:
         with open(r"C:\Users\Nishc\OneDrive - Georgia State University\CareerSwipe\cpanel\text_data.json", 'r') as json_file:
            resume_date = json.load(json_file)
            print(type(resume_date))
            ref.set(resume_date)
      except FileNotFoundError:
         print("Error: File not found. Please check the file path.")
      
      # data={'Resume':url}
      # database.set(data)
      # database.child('users').child(user_id).child('details').update(data_file)
      return render(request,'uploadsuccess.html',{'file':resume_date})
   else:
      form=UploadFileForm()
      message= resume_date
      return render(request,'welcome.html',{'form':form, 'message':message})

def forgotpassword(request):
   return render(request,'forgotpassword.html')

def postforgotpassword(request):

   email=request.POST.get('email')
   autho.send_password_reset_email(email)

   return render(request,'signin.html')
