from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/post/', include('post.urls')),
    path('api/category/', include('category.urls')),
    path("",
        TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
]