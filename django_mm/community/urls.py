from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import CollectCommentViewSet

router = DefaultRouter()
router.register(r'collectComment', views.CollectCommentViewSet, basename='collectComment')
router.register(r'updatecmt', views.CollectCommentViewSet, basename='updatecmt')
router.register(r'deletecmt', views.CollectCommentViewSet, basename='deletecmt')

# router.register(r'updatecmt', CommentViewSet)
# router.register(r'deletecmt', CommentViewSet)

# comment_view = CommentViewSet.as_view()

urlpatterns = [
    path('', include(router.urls)),
    # path('comments/<int:commentId>/', comment_view, name='comment-detail')
]
# urlpatterns = router.urls