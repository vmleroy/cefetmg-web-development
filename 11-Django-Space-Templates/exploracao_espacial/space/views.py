from django.shortcuts import render, redirect
from django.views import View

# Create your views here.
class HomeView(View):
    template_path = 'home/home.html'
    def get(self, request):
        return render(request, self.template_path)

class PhiliaeView(View):
    template_path = 'philae/philiae.html'
    def get(self, request):
        return render(request, self.template_path)