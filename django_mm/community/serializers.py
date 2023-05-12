from user.serializers import UserSerializer
from rest_framework import serializers
from .models import Comment


# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = '__all__'


# django.db.utils.IntegrityError: (1048, "Column 'music_id_id' cannot be null")

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'music_id', 'user_id', 'comment']

    # def create(self, validated_data):
    #     validated_data['music_id'] = MusicInfo.objects.get(id=1)
    #     return super().create(validated_data)


class CommentUserSerializer(serializers.ModelSerializer):
    user = UserSerializer() # User 모델 필드 추가z
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'music_id', 'user', 'comment', 'created_at']