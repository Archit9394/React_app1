from django.urls import path
from .views import RestaurantView

urlpatterns = [
    path('list1/', RestaurantView.as_view()), #it will give nice format of the api
    path('list1/<int:pk>',RestaurantView.as_view()),
]
