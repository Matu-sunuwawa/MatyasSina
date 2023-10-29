from django.db import models

# Create your models here.


class ContactMe(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200,null=True)
    location = models.CharField(max_length=200)
    message = models.TextField(max_length=500)

class Resumes(models.Model):
    file = models.FileField(null=True)