from django.db import models
from django.contrib.auth.models import User
from category.models import Category

# Create your models here.

class Post(models.Model):
    an_title = models.CharField (max_length=100)
    an_type = (
        ('1', 'Offres'),
        ('2', 'Demandes'),
    )
    an_price = models.CharField (max_length=100)
    an_content = models.TextField (max_length=1000)
    an_num_street = models.CharField (max_length=40)
    an_street = models.CharField (max_length=40)
    an_city = models.CharField (max_length=40)
    an_postalcode = models.CharField (max_length=10)
    an_country = models.CharField (max_length=40)
    an_thumb = models.ImageField(default='default.png', blank=True)
    category = models.ForeignKey(Category, default=None, on_delete=models.PROTECT)
    author = models.ForeignKey(User, default=None, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)