from rest_framework import serializers
from .models import UserPlayGroup, UserPlayList

class UserPlayGroupSerializer(serializers.ModelSerializer):

    class Mata:
        model = UserPlayGroup
        fields = '__all__'


class UserPlayListSerializer(serializers.ModelSerializer):

    class Mata:
        model = UserPlayList
        fields = '__all__'