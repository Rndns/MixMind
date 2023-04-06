from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'predict', views.DeepLearningViewSet, basename='musicRecom')

urlpatterns = [
] + router.urls