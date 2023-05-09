from django.db import models

class MusicInfo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=1024, null=True)
    artist = models.CharField(max_length=1024, null=True)
    album = models.CharField(max_length=1024, null=True)
    releasedDate = models.DateField(null=True)
    genre = models.CharField(max_length=1024, null=True)
    lyricist = models.CharField(max_length=1024, null=True)
    composer = models.CharField(max_length=1024, null=True)
    arranger = models.CharField(max_length=1024, null=True)
    likes = models.IntegerField(null=True)
    lyrics = models.TextField(null=True)
    albumImg = models.CharField(max_length=1024, null=True)
    youtubeId = models.CharField(max_length=1024, null=True)

class MusicEmotion(models.Model):
    id = models.AutoField(primary_key=True)
    musicId = models.ForeignKey("MusicInfo", on_delete=models.CASCADE, related_name='SongEmotion')
    love = models.FloatField()
    joy = models.FloatField()
    passion = models.FloatField()
    happiness = models.FloatField()
    sadness = models.FloatField()
    anger = models.FloatField()
    loneliness = models.FloatField()
    longing = models.FloatField()
    fear =models.FloatField()
    surprise = models.FloatField()

class UserEmotion(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('user.User', related_name='UserEmotion')
    love = models.FloatField()
    joy = models.FloatField()
    passion = models.FloatField()
    happiness = models.FloatField()
    sadness = models.FloatField()
    anger = models.FloatField()
    loneliness = models.FloatField()
    longing = models.FloatField()
    fear =models.FloatField()
    surprise = models.FloatField()

class UserPlayList(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('user.User', related_name='UserPlayList')
    music = models.ForeignKey('MusicInfo', on_delete=models.CASCADE, related_name='MusicPlayList')
