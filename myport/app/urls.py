from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', views.home, name='home'),
    path('resume/', RedirectView.as_view(url='http://127.0.0.1:8000/files/__My_Cv___2.pdf', permanent=False), name='resume'),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)