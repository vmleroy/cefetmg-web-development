from django.db.models.query import QuerySet
from django.shortcuts import get_object_or_404, render
from django.db.models import F,ExpressionWrapper,DecimalField
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views import View
from django.forms import ModelForm
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Tesouro
from .utils import is_ajax
# Create your views here.
class ListarTesouros(LoginRequiredMixin, ListView):
    model = Tesouro
    template_name = 'lista_tesouros.html'
    def get_queryset(self) -> QuerySet[any]:
        return super().get_queryset()\
            .annotate(
                valor_total=ExpressionWrapper(
                    F('quantidade') * F('preco'),
                    output_field=DecimalField(
                        max_digits=10,
                        decimal_places=2,
                        blank=True
                    )
                )
            ) if self.request.user.get_username() == 'admin' \
            else super().get_queryset()\
            .filter(created_by=self.request.user)\
            .annotate(
                valor_total=ExpressionWrapper(
                    F('quantidade') * F('preco'),
                    output_field=DecimalField(
                        max_digits=10,
                        decimal_places=2,
                        blank=True
                    )
                )
            )
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total_geral'] = sum(tesouro.valor_total for tesouro in context['object_list'])
        return context
        
class TesouroForm(ModelForm):
    class Meta:
        model = Tesouro
        fields = ['nome', 'quantidade', 'preco', 'img_tesouro']
        labels = {"img_tesouro": "Imagem"}

class SalvarTesouro(View):
    model = Tesouro
    fields = ['nome', 'quantidade', 'preco', 'img_tesouro']
    template_name = 'salvar_tesouro.html'
    success_url = reverse_lazy('lista_tesouros')
    
class InserirTesouro(LoginRequiredMixin, SalvarTesouro, CreateView):
    def post (self, request, *args, **kwargs):
        if is_ajax(request):
            form = TesouroForm(request.POST, request.FILES)
            if form.is_valid():
                form.instance.created_by = self.request.user
                result = form.save()
                response = {
                    'tesouro': {
                        'id': result.id,
                        'nome': result.nome,
                        'quantidade': result.quantidade,
                        'preco': result.preco,
                        'img_tesouro': result.img_tesouro.url
                    },
                    'redirect': self.success_url
                }
            return JsonResponse(response)
        return super().post(request, *args, **kwargs)
    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)

class AtualizarTesouro(LoginRequiredMixin, SalvarTesouro, UpdateView):
    def post(self, request, pk, *args, **kwargs):
        if is_ajax(request):
            form = TesouroForm(request.POST, request.FILES, instance=get_object_or_404(Tesouro, pk=pk))
            if form.is_valid():
                result = form.save()
                response = {
                    'tesouro': {
                        'id': result.id,
                        'nome': result.nome,
                        'quantidade': result.quantidade,
                        'preco': result.preco,
                        'img_tesouro': result.img_tesouro.url
                    },
                    'redirect': self.success_url
                }
            return JsonResponse(response)
        return super().post(request, *args, **kwargs)

class RemoverTesouro(LoginRequiredMixin, DeleteView):
    model = Tesouro
    success_url = reverse_lazy('lista_tesouros')
    def post (self, request, pk, *args, **kwargs):
        if is_ajax(request):
            tesouro = Tesouro.objects.get(pk=pk)
            data = {}
            if tesouro:
                data['message'] = ''
                if tesouro.img_tesouro:
                    tesouro.img_tesouro.delete()
                tesouro.delete()
                data['message'] += 'Tesouro removido com sucesso.'
                data['tesouro'] = {
                    'id': pk,
                    'nome': tesouro.nome,
                    'quantidade': tesouro.quantidade,
                    'preco': tesouro.preco,
                    'img_tesouro': tesouro.img_tesouro.url if tesouro.img_tesouro else ''
                }
            else:
                data['message'] = 'Tesouro não encontrado.'
            return JsonResponse(data)
        tesouro = Tesouro.objects.get(pk=pk)
        if tesouro.img_tesouro:
            tesouro.img_tesouro.delete()
        return super().post(request, *args, **kwargs)