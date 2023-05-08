from django.db import models

# Create your models here.


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    music_id = models.ForeignKey("mixmind.MusicInfo", on_delete=models.CASCADE)
    user_id = models.ForeignKey("user.USER" , on_delete=models.CASCADE)
    comment = models.CharField(max_length=512)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.comment