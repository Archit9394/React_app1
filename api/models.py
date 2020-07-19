from django.db import models

# Create your models here.
class UserAPI(models.Model):
    verbose_name="User1"
    name=models.CharField(max_length=50,unique=False) 
    email=models.EmailField(unique=True)
    password=models.CharField(unique=False,max_length=50) #Need to make a Hash Password
    #Make some changes either here or in serializer

    class Meta:   # In order to change the model name in the admin portal
        verbose_name="Userapi"
        
    def __str__(self): #in order to see objects in admin as emails rather than jobs.object format
        return self.email