from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Restaurants
from .serializers import RestaurantSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.password_validation import validate_password
#from .validators import UppercaseValidator
# Create your views here.

class RestaurantView(APIView):
    def get(self,request): #Basic Get Syntax
        print(request.data) 
        #queryset=Restaurants.objects.filter(email=request.data.get('email')) #This is to get the email from request
        serializer=RestaurantSerializer(Restaurants.objects.all(),many=True)
        #serializer=UserApiSerializer(UserAPI.objects.filter(email=request.data.get('email')),many=True)
        print(serializer.data)
        #result=request.data.get('email')
        #print(result)
        #email is the primary key
        #Request will get all the data of that primary key as the API will be called
        return Response(serializer.data)