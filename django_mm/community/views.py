from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Comment
import numpy as np
from .serializers import CommentSerializer
from mixmind.models import MusicInfo


# Create your views here.

# class CollectCommentViewSet(viewsets.ViewSet):
#     def create(self, request):
#         # collectComment = Comment.objects.values('comment').distinct()
#         collectComment = request.data.get('comment')
#         serializer = CommentSerializer(collectComment, many=True)
#         return Response(serializer.data)

# django.db.utils.IntegrityError: (1048, "Column 'music_id_id' cannot be null")


# class CollectCommentViewSet(viewsets.ViewSet):
#     def create(self, request):
#         collectComment = request.data.get('comment')
#         # comment = Comment.objects.create(comment=collectComment)
#         comment = Comment(music_id=MusicInfo.objects.get(id=1), user_id=request.user, comment=request.data.get('comment'))
#         comment.save()
#         serializer = CommentSerializer(comment)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

# ValueError: Cannot assign "<django.contrib.auth.models.AnonymousUser object at 0x7fab8a8cb940>": "Comment.user_id" must be a "User" instance.

# class CollectCommentViewSet(viewsets.ViewSet):
#     def create(self, request):
#         music_id = request.data.get('music_id')
#         comment = request.data.get('comment')
#         user_id = request.user
#         comment = Comment.objects.create(music_id_id=music_id, comment=comment, user_id=user_id)
#         serializer = CommentSerializer(comment)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

# ValueError: Cannot assign "<django.contrib.auth.models.AnonymousUser object at 0x7fdd096a8970>": "Comment.user_id" must be a "User" instance.



from django.contrib.auth.decorators import login_required

# class CollectCommentViewSet(viewsets.ViewSet):
#     @login_required
#     def create(self, request):
#         collectComment = request.data.get('comment')
#         comment = Comment(music_id=MusicInfo.objects.get(id=1), user_id=request.user.id, comment=request.data.get('comment'))
#         comment.save()
#         serializer = CommentSerializer(comment)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

    
from django.core.exceptions import ObjectDoesNotExist

class CollectCommentViewSet(viewsets.ViewSet):
    def create(self, request):
        try:
            music = MusicInfo.objects.get(id=1)
            user = request.user
            comment = request.data.get('comment')
            new_comment = Comment.objects.create(music_id=music, user_id=user, comment=comment)
            serializer = CommentSerializer(new_comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except ObjectDoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
#  ValueError: Cannot assign "<django.contrib.auth.models.AnonymousUser object at 0x7fad311051f0>": "Comment.user_id" must be a "User" instance.
# "Cannot assign "<django.contrib.auth.models.AnonymousUser object" 라고 되어있습니다. 이 말은 해당 사용자가 인증되지 않았다는 것을 나타냅니다. 