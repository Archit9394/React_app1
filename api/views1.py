from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserAPI
from .serializers import UserApiSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.password_validation import validate_password
from .validators import UppercaseValidator
# Create your views here.
class UserAPIView1(APIView):
    def get(self,request): #Basic Get Syntax
        print(request.data) 
        queryset=UserAPI.objects.filter(email=request.data.get('email')) #This is to get the email from request
        serializer=UserApiSerializer(UserAPI.objects.all(),many=True)
        #Rquest will get all the data of that primary key as the API will be called
        print (queryset)
        if queryset:
            if queryset.values('password').first()['password']==request.data.get('password'): 
                #First will give the data in dictionary format
                return Response("You are successfully logged in ")
            else:
                return Response ("Password Incorrect")
        else:
            #return Response(serializer.data)
            #return Response(UserAPI.objects.all())
            return Response("User is not registered")

    def post(self,request):
        validate=UppercaseValidator
        queryset=request.data
        serializer=UserApiSerializer(data=queryset)
        if serializer.is_valid(raise_exception=True):
            save_data=serializer.save()
        return Response({"Success":"User '{}' created successfully".format(save_data.name)})
