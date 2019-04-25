from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from .views import *

urlpatterns = [
    path('', PostAPIView.as_view(), name="post-create"),
    path('type', PostTypeAPIView.as_view(), name="post-create"),
    path('<pk>', PostRudView.as_view(), name="post-rud"),
]
