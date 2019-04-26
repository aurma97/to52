from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/post/', include('post.urls')),
    path('api/category/', include('category.urls')),
    path("",
        TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
    path('api/obtain_token', obtain_jwt_token),
    path('api/refresh_token', refresh_jwt_token),
    path('api/user/', views.current_user)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)