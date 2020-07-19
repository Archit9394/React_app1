from django.urls import path
from .views import UserAPIView
from .views1 import UserAPIView1
urlpatterns = [
    path('login/', UserAPIView.as_view()), #it will give nice format of the api
    path('login/<int:pk>',UserAPIView.as_view()),
    path('register/', UserAPIView1.as_view()), #it will give nice format of the api
    path('register/<int:pk>',UserAPIView1.as_view()),
]
