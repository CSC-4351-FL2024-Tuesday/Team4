"""
URL configuration for cpanel project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from mypy_extensions import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.signIn, name='signIn'),
    path('postsignin/', views.postsignin, name='/postsignin/'),
    path('logout/',views.logout,name='log'),
    path('signup/',views.signup,name='signup'),
    path('forgotpassword/',views.forgotpassword,name='forgotpassword'),
    path('postsignup/', views.postsignup, name='/postsignup/'),
    path('uploadfile/', views.uploadfile, name='/uploadfile/'),
    path('postforgotpassword/', views.postforgotpassword, name='/postforgotpassword/')
    #path('microsoft-login/', views.microsoft_login, name='microsoft_login')
]