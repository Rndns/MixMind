from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import HttpResponseBadRequest
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .models import UserPlayGroup, UserPlayList
from rest_framework import status
from .serializers import UserPlayGroupSerializer, UserPlayListSerializer

User = get_user_model()

class PlayGroupViewSet(viewsets.ViewSet):
    def list(self, request):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            return HttpResponseBadRequest('Authorization header not found')

        _, token = authorization_header.split(' ')
        decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        email = decoded_token['email']
        user = User.objects.get(email=email)
        userPlayGroup = UserPlayGroup.objects.filter(user_id=user.id)
        if not userPlayGroup:
            return Response({'message': '저장된 playGroup이 없습니다.'})
        serializer = UserPlayGroupSerializer(userPlayGroup, many=True)
        return Response(serializer.data)


    def creat(self, request):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            return HttpResponseBadRequest('Authorization header not found')

        try:
            GroupName = request.data.get('GroupName')
            _, token = authorization_header.split(' ')
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            email = decoded_token['email']
            user = User.objects.get(email=email)
            UserPlayGroup.objects.create(user_id=user.id, name=GroupName)
            userPlayGroup = UserPlayGroup.objects.filter(user_id=user.id)
            serializer = UserPlayListSerializer(userPlayGroup)
            return Response(serializer.data)
        
        except:
            return HttpResponseBadRequest('Invalid token')

class PlayListViewSet(viewsets.ViewSet):
    def list(self, request):
        GroupId = request.data.get('GroupId')
        PlayList = UserPlayList.objects.filter(group_Id=GroupId)
        serializer = UserPlayListSerializer(PlayList, many=True)
        return Response(serializer.data)

    
