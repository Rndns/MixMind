from rest_framework import serializers
from .models import Comment


# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'music_id', 'user_id', 'comment']

    def create(self, validated_data):
        validated_data['music_id'] = MusicInfo.objects.get(id=1)
        return super().create(validated_data)