from rest_framework import serializers
from .models import UserPlayGroup, UserPlayList
from mixmind.serializers import MusicInfoSerializer

class UserPlayGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserPlayGroup
        fields = '__all__'


class UserPlayListSerializer(serializers.ModelSerializer):

    music = MusicInfoSerializer()

    class Meta:
        model = UserPlayList
        fields = ['id', 'music_path', 'created_at', 'music', 'groud_id']