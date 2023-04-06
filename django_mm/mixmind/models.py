from django.db import models

class MusicInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    # 음악 정보 추가

class MusicEmotion(models.Model):
    id = models.AutoField(primary_key=True)
    musicId = models.ForeignKey("MusicInfo", on_delete=models.CASCADE, related_name='SongEmotion')
    # 감정 종류 추가

class UserEmotion(models.Model):
    id = models.AutoField(primary_key=True)
    # 감정 종류 추가