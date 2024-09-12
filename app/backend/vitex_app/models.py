from django.db import models

# Create your models here.


class Videos(models.Model):
    video = models.FileField(upload_to="uploaded_videos", null=True)
    created_at = models.DateTimeField(auto_now_add=True)
