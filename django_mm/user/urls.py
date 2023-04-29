from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'regist', views.RegistView, basename='regist')
router.register(r'login', views.LoginView, basename='login')
# 로그아웃
# 내정보
# 회원수정



urlpatterns = [
    path('', include(router.urls)),
]