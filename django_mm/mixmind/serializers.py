from rest_framework import serializers
from .models import MusicInfo, MusicEmotion

# class MusicRecommendSerializer(serializers.Serializer):
#     emotions = serializers.ListField(child=serializers.FloatField())
    

class MusicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicInfo
        fields = '__all__'


class MusicEmotionSerializer(serializers.ModelSerializer):
    musicId = MusicInfoSerializer(many=True)
    class Meta:
        model = MusicEmotion
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):
    genre = serializers.CharField(max_length=1024, allow_null=True, required=False)
    class Meta:
        model = MusicInfo
        fields = ['genre']