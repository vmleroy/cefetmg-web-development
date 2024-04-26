from typing import Union
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views import View
from django.db import models

from .forms import *
from .models import *

class ListaTesourosView(View):
    def tesouros(self):
        return Tesouro.objects.annotate(
            valor_total=models.ExpressionWrapper(
                models.F('preco') * models.F('quantidade'),
                output_field=models.DecimalField(max_digits=10, decimal_places=2, blank=True)
            )
        )
                              
    def get(self, request):
        tesouros = self.tesouros()
        itens = {
          'lista_tesouros': tesouros,
          'total_geral': sum([item.valor_total for item in tesouros]) if len(tesouros) > 0 else 0
        }
        return render(request, 'lista_tesouros.html', itens)
      
class SalvarTesouroView(View):
    def get(self, request):
        form = TesouroForm()
        return render(request, 'salvar_tesouro.html', {'form': form})
    def post(self, request):
        form = TesouroForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('lista_tesouros'))
        return render(request, 'salvar_tesouro.html', {'form': form})

class EditarTesouroView(View):
    def get(self, request, id):
        tesouro = Tesouro.objects.get(id=id)
        form = TesouroForm(instance=tesouro)
        return render(request, 'salvar_tesouro.html', {'form': form})
    def post(self, request, id):
        tesouro = Tesouro.objects.get(id=id)
        form = TesouroForm(request.POST, request.FILES, instance=tesouro)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('lista_tesouros'))
        return render(request, 'salvar_tesouro.html', {'form': form})

class DeletarTesouroView(View):
    def get(self, request, id):
        tesouro = Tesouro.objects.get(id=id)
        tesouro.delete()
        return HttpResponseRedirect(reverse('lista_tesouros'))