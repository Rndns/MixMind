from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'musicRecom', views.MusicRecommendViewSet, basename='musicRecom')
router.register(r'musicList', views.MusicListViewSet, basename='musicList')
router.register(r'genreList', views.GenreListViewSet, basename='genreList')



urlpatterns = [
    path('', include(router.urls)),
]
# urlpatterns = router.urls