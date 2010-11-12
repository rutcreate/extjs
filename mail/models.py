from django.db import models

class Mail(models.Model):
    subject = models.CharField(max_length=255)
    message = models.TextField()
    sender = models.EmailField()
    created = models.DateTimeField(auto_now_add=True)
