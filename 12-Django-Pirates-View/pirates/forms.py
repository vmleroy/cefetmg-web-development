from django import forms
from pirates.models import *

class TesouroForm(forms.ModelForm):
    class Meta:
      model = Tesouro
      fields = ['nome', 'quantidade', 'preco', 'img_tesouro']
      labels = { 'nome': 'Nome', 'quantidade': 'Quantidade', 'preco': 'Preço', 'img_tesouro': 'Imagem'}