from typing import Any
from django.db import models

# Create your models here.
class Genre (models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self) -> Any:
        return self.name
    
class Musician (models.Model):
    name = models.CharField(max_length=255)
    birth_date = models.DateField()
    gender = models.CharField(max_length=1, choices=[
        ('F', 'Female'),
        ('M', 'Male')
    ], default='M')

    def __str__(self) -> str:
        return self.name

class Album (models.Model):
    name = models.CharField(max_length=255)
    release_date = models.DateField()
    musicians = models.ManyToManyField(Musician)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

class Song (models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    album = models.ForeignKey(Album, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name
    
class Band (models.Model):
    name = models.CharField(max_length=255)
    musicians = models.ManyToManyField(Musician)

    def __str__(self) -> str:
        return self.name