from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponseBadRequest
import jwt
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.conf import settings
from .serializers import UserSerializer

User = get_user_model()

class LoginView(viewsets.ViewSet):
    def create(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            token = jwt.encode({'email': email}, settings.SECRET_KEY, algorithm='HS256')
            response = Response({'token': token}, status=200)
            response.set_cookie('token', token)
            return response
        else:
            return Response({'error': '로그인에 실패했습니다.'}, status=401)
        
class RegistView(viewsets.ViewSet):
    def create(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        nickname = request.data.get('nickname')
        age = request.data.get('age')

        if not email or not password or not nickname or not age:
            return Response({'message': '모든 필수 정보를 입력해주세요.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'message': '이미 사용 중인 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User(email=email, nickname=nickname, age=age)
        user.set_password(password)
        user.save()

        return Response({'message': '회원가입이 완료되었습니다.'}, status=status.HTTP_201_CREATED)

class InfoView(viewsets.ViewSet):
    def list(self, request):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            return HttpResponseBadRequest('Authorization header not found')

        try:
            _, token = authorization_header.split(' ')
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            print(decoded_token)
            email = decoded_token['email']
            user = User.objects.get(email=email)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        
        except:
            return HttpResponseBadRequest('Invalid token')


    def update(self, request, pk=None):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            return HttpResponseBadRequest('Authorization header not found')
        
        try:
            _, token = authorization_header.split(' ')
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            email = decoded_token['email']
            password = request.data.get('password')
            user = authenticate(email=email, password=password)
            nickname = request.data.get('nickname')
            age = request.data.get('age')
            if user is not None:
                user = User.objects.get(id=pk)
                user.email = email
                user.nickname = nickname
                user.age = age
                user.save()
                serializer = UserSerializer(user)
                return Response(serializer.data)
            else:
                return Response({'error': '비밀번호가 틀렸습니다.'}, status=401)
        
        except:
            return HttpResponseBadRequest('Invalid token')

    def destroy(self, request, pk=None):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            return HttpResponseBadRequest('Authorization header not found')
        
        try:
            _, token = authorization_header.split(' ')
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            email = decoded_token['email']
            password = request.data.get('password')
            user = authenticate(email=email, password=password)

            if user is not None:
                user = User.objects.get(id=pk)
                user.delete()
                return Response({'message': '회원탈퇴가 완료되었습니다.'})
            else:
                return Response({'error': '비밀번호가 틀렸습니다.'}, status=401)
        
        except:
            return HttpResponseBadRequest('Invalid token')