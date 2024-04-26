const itensDoMenu = document.querySelectorAll('#menu-principal li');
itensDoMenu.forEach(el => el.addEventListener('click', ativaItemMenu));

function ativaItemMenu(e) {
  itensDoMenu.forEach(el => el.classList.remove('menu-ativo'));
  e.currentTarget.classList.add('menu-ativo');
}

const ativaMenuHamburguer = () => {
  const bodyEl = document.querySelector('body');
  const menuEl = document.querySelector('#menu-principal');
  bodyEl.classList.toggle('menu-aberto');
  menuEl.classList.toggle('menu-aberto');
}
const hamburguer = document.querySelector('#hamburguer-button');
hamburguer.addEventListener('click', ativaMenuHamburguer);


