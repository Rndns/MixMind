from django.contrib.auth.models import User
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth import authenticate
import jwt

class LoginView(viewsets.ViewSet):
    def list(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            token = jwt.encode({'username': username}, 'MixMind_secret_key', algorithm='HS256')
            response = Response({'token': token}, status=200)
            response.set_cookie('token', token)
            return response
        else:
            return Response({'error': '로그인에 실패했습니다.'}, status=401)
        
class RegistView(viewsets.ViewSet):
    def list(request):
        username = request.data.get('username')
        password = request.data.get('password')
        nickname = request.data.get('nickname')
        age = request.data.get('age')

        if not username or not password or not nickname or not age:
            return Response({'message': '모든 필수 정보를 입력해주세요.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'message': '이미 사용 중인 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User(username=username, nickname=nickname, age=age)
        user.set_password(password)
        user.save()

        return Response({'message': '회원가입이 완료되었습니다.'}, status=status.HTTP_201_CREATED)

