let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

const LISTA = document.getElementById('lista-tarefas');
const BOTAO_INCLUIR = document.getElementById('incluir-nova-tarefa');
const INPUT_TAREFA = document.getElementById('nova-tarefa-nome');
const INPUT_CATEGORIA = document.getElementById('nova-tarefa-categoria');

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
tarefas.forEach(insereTarefaNaPagina);

const criarNovaTarefa = () => {
  const tarefa = { 
    nome: INPUT_TAREFA.value, 
    categoria: INPUT_CATEGORIA.value ? INPUT_CATEGORIA.value : 'outros', 
    marcado: false 
  };
  tarefas.push(tarefa);
  insereTarefaNaPagina(tarefa);
  INPUT_TAREFA.value = '';
  INPUT_TAREFA.focus();
}
BOTAO_INCLUIR.addEventListener('click', criarNovaTarefa);

INPUT_TAREFA.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    criarNovaTarefa();
  }
});