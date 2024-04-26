from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('sobre-philiae/', views.PhiliaeView.as_view(), name='philiae'),
]