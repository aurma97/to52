from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('add/', TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
    path('blog/', TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
    path('blog/<id>', TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
    path("",
        TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
]
