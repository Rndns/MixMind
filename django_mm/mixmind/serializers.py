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
