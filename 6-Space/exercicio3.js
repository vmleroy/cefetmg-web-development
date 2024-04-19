// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const onExpandirRetrairClick = (event) => {
  const botao = event.currentTarget;
  const paragrafo = botao.parentNode;
  paragrafo.classList.toggle('expandido');
  botao.innerHTML = paragrafo.classList.contains('expandido') ? '-' : '+';
};

document.querySelectorAll('.botao-expandir-retrair').forEach((botao) => {
  botao.addEventListener('click', (event) => {
    onExpandirRetrairClick(event)
  });
});
