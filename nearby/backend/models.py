from django.db import models
from django.contrib.gis.db import models as geo_models


class Posts(models.Model):
    person_location = geo_models.PointField()
    description = models.TextField()
    photo = models.URLField()
    post_user = models.ForeignKey('auth.user', on_delete=models.CASCADE)


class UserProfile(models.Model):
    user = models.OneToOneField('auth.user', on_delete=models.CASCADE)
    liked_experiences = models.ForeignKey(Posts, on_delete=models.CASCADE)

# Create your models here.
