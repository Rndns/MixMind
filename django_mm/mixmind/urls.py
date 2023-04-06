from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'predict', views.musicRecom, basename='musicRecom')

urlpatterns = [
] + router.urls