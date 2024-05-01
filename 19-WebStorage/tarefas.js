let TAREFAS = [];

const LISTA = document.getElementById('lista-tarefas');

const BOTAO_INCLUIR = document.getElementById('incluir-nova-tarefa');
const INPUT_TAREFA = document.getElementById('nova-tarefa-nome');
const INPUT_CATEGORIA = document.getElementById('nova-tarefa-categoria');

const INPUT_USUARIO = document.getElementById('nome-usuario');
const SALVAR = document.getElementById('salvar');
const CARREGAR = document.getElementById('carregar');

const MINIMIZAR = document.getElementById('minimizar');
const MARCA = document.getElementById('marca');

const insereTarefaNaPagina = (tarefa) => {
  const item = document.createElement('li');
  item.innerText = tarefa.nome;
  item.classList.add('item-tarefa');
  item.classList.add(`categoria-${tarefa.categoria}`);
  if (tarefa.marcado) {
    item.classList.add('marcado');
  }
  item.addEventListener('click', () => {
    item.classList.toggle('marcado');
    tarefa.marcado = !tarefa.marcado;
  });
  LISTA.insertBefore(item, LISTA.firstChild);
}

const criarNovaTarefa = () => {
  const tarefa = { 
    nome: INPUT_TAREFA.value, 
    categoria: INPUT_CATEGORIA.value ? INPUT_CATEGORIA.value : 'outros', 
    marcado: false 
  };
  TAREFAS.push(tarefa);
  insereTarefaNaPagina(tarefa);
  INPUT_TAREFA.value = '';
  INPUT_TAREFA.focus();
}

const salvarLocalStorage = ({ key, value }) => {
  localStorage.setItem(key, JSON.stringify(value));
}
const carregarLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const salvarSessionStorage = ({ key, value }) => {
  sessionStorage.setItem(key, JSON.stringify(value));
}
const carregarSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
}

TAREFAS.forEach(insereTarefaNaPagina);


BOTAO_INCLUIR.addEventListener('click', criarNovaTarefa);
INPUT_TAREFA.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    criarNovaTarefa();
  }
});


SALVAR.addEventListener('click', 
  () => {
    salvarLocalStorage({ key: "user", value: INPUT_USUARIO.value })
    salvarLocalStorage({ key: "tarefas", value: TAREFAS })
  }
);
CARREGAR.addEventListener('click',
  () => {
    const user = carregarLocalStorage('user');
    TAREFAS = carregarLocalStorage('tarefas');
    INPUT_USUARIO.value = user;
    LISTA.innerHTML = '';
    TAREFAS.forEach(insereTarefaNaPagina);
  }
);


MINIMIZAR.addEventListener('click', () => {
  const lista = document.getElementById('marca');
  lista.classList.toggle('minimizado');
  salvarSessionStorage({ key: "minimizado", value: lista.classList.contains('minimizado') });
});
MARCA.classList.toggle('minimizado', carregarSessionStorage('minimizado'));