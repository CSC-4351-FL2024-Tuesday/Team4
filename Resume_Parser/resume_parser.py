import firebase_admin
from firebase_admin import credentials,db

cred = credentials.Certificate("creds.json")
firebase_admin.initialize_app(cred, {"databaseURL": "https://careerswipe-f6d67-default-rtdb.firebaseio.com/"})

ref= db.reference("/")
ref.get()

