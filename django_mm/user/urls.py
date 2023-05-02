from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'regist', views.RegistView, basename='regist')
router.register(r'login', views.LoginView, basename='login')
router.register(r'info', views.InfoView, basename='info')
router.register(r'edit', views.InfoView, basename='edit')
router.register(r'delete', views.InfoView, basename='edit')



urlpatterns = [
    path('', include(router.urls)),
]