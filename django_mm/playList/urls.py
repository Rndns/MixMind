from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'group', views.PlayGroupViewSet, basename='playGroupLoad')
router.register(r'list', views.PlayListViewSet, basename='playListLoad')

urlpatterns = [
    path('', include(router.urls)),
]
