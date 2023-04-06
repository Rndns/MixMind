from django.db import models

class MusicInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    # 추가 사항
class MusicEmotion(models.Model):
    id = models.AutoField(primary_key=True)
    musicId = models