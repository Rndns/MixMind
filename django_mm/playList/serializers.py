from rest_framework import serializers
from .models import UserPlayGroup, UserPlayList

class UserPlayGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserPlayGroup
        fields = '__all__'


class UserPlayListSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserPlayList
        fields = '__all__'