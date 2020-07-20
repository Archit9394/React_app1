from django.db import models
#from djangoratings.fields import RatingField
# Create your models here.
class Restaurants(models.Model):
    verbose_name="Restaurant"
    image=models.ImageField(upload_to='images/',null=True)
    name=models.CharField(max_length=50,unique=False) 
    cuisine=models.CharField(max_length=50,unique=False)
    rating=models.IntegerField()
    #email=models.EmailField(unique=True)
    #password=models.CharField(unique=False,max_length=50) #Need to make a Hash Password
    #Make some changes either here or in serializer

    class Meta:   # In order to change the model name in the admin portal
        verbose_name="Restaurants"
        
    def __str__(self): #in order to see objects in admin as emails rather than jobs.object format
        return self.name