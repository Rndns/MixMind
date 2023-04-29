from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
import jwt
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate

class LoginView(viewsets.ViewSet):
    def create(self, request):
        User = get_user_model()
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)
        if user is not None:
            token = jwt.encode({'email': email}, 'MixMind_secret_key', algorithm='HS256')
            response = Response({'token': token}, status=200)
            response.set_cookie('token', token)
            return response
        else:
            return Response({'error': '로그인에 실패했습니다.'}, status=401)
        
class RegistView(viewsets.ViewSet):
    def create(self, request):
        User = get_user_model()
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

