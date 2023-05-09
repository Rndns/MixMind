from django.db import models

class UserPlayGroup(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name='UserPlayList')
    name = models.CharField(max_length=256)

class UserPlayList(models.Model):
    id = models.AutoField(primary_key=True)
    group = models.ForeignKey('UserPlayGroup', on_delete=models.CASCADE, related_name='UserPlayList')
    music = models.ForeignKey('mixmind.MusicInfo', on_delete=models.CASCADE, related_name='MusicPlayList')
    created_at = models.DateTimeField(auto_now_add=True)
