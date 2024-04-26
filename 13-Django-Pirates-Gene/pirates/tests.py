from django.test import TestCase
from django.urls import reverse
from django.test.client import Client
from django.contrib.auth.models import User

from pirates.models import Tesouro

# Create your tests here.
class TestInsertTesouro(TestCase):
    def setUp(self):
        self.tesouro = Tesouro.objects.create(
            nome='Moeda de ouro',
            quantidade=10,
            preco=100.00
        )
    def test_insert_tesouro(self):
        # check if object was created
        tesouro = Tesouro.objects.get(pk = self.tesouro.pk)
        self.assertEqual(self.tesouro , tesouro, 'O objeto não foi criado')
    def tearDown(self) -> None:
        return super().tearDown()

class TestUpdateTesouro(TestCase):
    def setUp(self):
        self.tesouro = Tesouro.objects.create(
            nome='Moeda de ouro',
            quantidade=10,
            preco=100.00
        )
    def test_update_tesouro(self):
        self.tesouro.nome = 'Moeda de prata'
        self.tesouro.save()
        self.assertEqual(self.tesouro.nome, 'Moeda de prata', 'Deveria ter alterado o nome do tesouro')
    def tearDown(self) -> None:
        return super().tearDown()

class TestDeleteTesouro(TestCase):
    def setUp(self):
        self.tesouro = Tesouro.objects.create(
            nome='Moeda de ouro',
            quantidade=10,
            preco=100.00
        )
    def test_delete_tesouro(self):
        dados = 1
        try:
            if self.tesouro.img_tesouro:
                self.tesouro.img_tesouro.delete()
            self.tesouro.delete()
            dados -= 1
        except:
            pass
        self.assertEqual(dados, 0, 'O cadastro deveria ter sido removido')
    def tearDown(self) -> None:
        return super().tearDown()

class TestListTesouro(TestCase):
    def setUp(self):
        self.tesouros = []
        self.tesouros.append(Tesouro.objects.create(
            nome='Moeda de ouro',
            quantidade=10,
            preco=100.00
        ))
        self.tesouros.append(Tesouro.objects.create(
            nome='Moeda de prata',
            quantidade=20,
            preco=50.00
        ))
    def test_list_tesouro(self):      
        c = Client()
        user = User.objects.create_user(username='test', password='test')
        c.login(username='test', password='test')
        
        str_url = reverse('lista_tesouros')
        resposta = c.get(str_url)
        print(resposta)
        
        dados = resposta.context['object_list']
        self.assertEqual(len(dados), len(self.tesouros), f'Deveria ter {len(self.tesouros)} tesouros cadastrados')
        for idx, tesouro in enumerate(dados):
            self.assertEqual(tesouro.nome, self.tesouros[idx].nome, f'O nome inesperado - Encotrado: {tesouro.nome} || Esperado: {self.tesouros[idx].nome}')
            self.assertEqual(tesouro.quantidade, self.tesouros[idx].quantidade, f'Quantidade inesperada - Encontrada: {tesouro.quantidade} || Esperado: {self.tesouros[idx].quantidade}')
            self.assertEqual(tesouro.preco, self.tesouros[idx].preco, f'Preço inesperado - Encontrado: {tesouro.preco} || Esperado: {self.tesouros[idx].preco}')
    def tearDown(self) -> None:
        return super().tearDown()

class TestGetTesouro(TestCase):
    def setUp(self):
        self.tesouro = Tesouro.objects.create(
            nome='Moeda de ouro',
            quantidade=10,
            preco=100.00
        )
    def test_get_tesouro(self):
        tesouro = Tesouro.objects.get(pk = self.tesouro.pk)
        self.assertEqual(tesouro.nome, self.tesouro.nome, f'O nome inesperado - Encotrado: {tesouro.nome} || Esperado: {self.tesouro.nome}')
        self.assertEqual(tesouro.quantidade, self.tesouro.quantidade, f'Quantidade inesperada - Encontrada: {tesouro.quantidade} || Esperado: {self.tesouro.quantidade}')
        self.assertEqual(tesouro.preco, self.tesouro.preco, f'Preço inesperado - Encontrado: {tesouro.preco} || Esperado: {self.tesouro.preco}')
    def tearDown(self) -> None:
        return super().tearDown()
        