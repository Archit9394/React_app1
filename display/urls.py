from django.urls import path
#from .views import UserAPIView
from . import views

urlpatterns = [
    path('',views.login, name="display"),
    path('signin/',views.signin,name="signin"),
    path('fetch/',views.getUser, name="getu"),
    path('submit/',views.submitUser, name="submitb"),
]
