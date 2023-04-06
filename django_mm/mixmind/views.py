from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view, action
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets


class DeepLearningViewSet(viewsets.ModelViewSet):
    
    # 노래 감정 db에서 가지고 오기
    # 노래 감정과 사용자의 감정 값 계산
    # 계산 결과가 노래 id 추출
    # id로 노래 정보 가지고 오기
    def musicRecom(self, request):
        # request(emotionValues -> list)
        data = request.Get.get()

        return JsonResponse(data, safe=False)
