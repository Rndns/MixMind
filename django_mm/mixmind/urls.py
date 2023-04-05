from django.urls import path
from . import views

app_name = "mixmind"

urlpatterns = [
    path('', views.index, name="home"),
]