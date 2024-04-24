from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
  path('', views.ListaTesourosView.as_view(), name='lista_tesouros'),
  path('tesouro/new', views.SalvarTesouroView.as_view(), name='salvar_tesouro'),
  path('tesouro/<int:id>/edit', views.EditarTesouroView.as_view(), name='editar_tesouro'),
  path('tesouro/<int:id>/delete', views.DeletarTesouroView.as_view(), name='remover_tesouro'),
]