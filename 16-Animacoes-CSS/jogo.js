/*
 * Você não vai precisar alterar este arquivo
 */
const animaisTodos = [
  'peixe',
  'leao',
  'gato',
  'cachorro',
  'girafa',
  'rato',
  'hipopotamo',
  'coelho',
  'urso'
];

let temporizador,
  pontuacao = {
    pontos: 0
  };
const TEMPO_PARA_DAR_COMIDA = 4000;
let animais = [];

const successSound = new Audio('sounds/success.wav'),
  errorSound = new Audio('sounds/error.wav');

function sorteiaAnimais(quantos) {
  let animaisTodosCopia = animaisTodos.slice(0),
    indiceSorteado,
    animalSorteado,
    sorteio = [];

  while (quantos-- > 0) {
    indiceSorteado = Math.floor(Math.random() * animaisTodosCopia.length);
    animalSorteado = animaisTodosCopia.splice(indiceSorteado, 1);
    sorteio.push(animalSorteado[0]);
  }

  return sorteio;
}

function preencheAnimaisNaTela() {
  let tela = document.querySelector('#conteudo'),
    markupAnimais = '';

  for (let animal of animais) {
    markupAnimais += `<img id="${animal}" src="imgs/${animal}.jpg" class="animal">`;
  }

  tela.innerHTML = markupAnimais;
  let elementosAnimais = document.querySelectorAll('.animal');
  for (let animalEl of elementosAnimais) {
    animalEl.addEventListener('click', cliqueAnimal);
  }
}

function escolheAnimal() {
  let indiceSorteado = Math.floor(Math.random() * animais.length),
    animalSorteado = animais[indiceSorteado],
    sorteadoEl = document.querySelector(`#${animalSorteado}`),
    comandoEl = document.querySelector('#comando');

  for (let i = 0; i < animais.length; i++) {
    let animalEl = document.querySelector(`#${animais[i]}`);
    if (animalEl.classList.contains('com-fome')) {
      animalEl.classList.remove('com-fome');
      animalEl.classList.add('atacando');
      atualizaPontuacao(pontuacao.pontos - 2);
      setTimeout(function(el) {
        return function() {
          el.classList.remove('atacando');
        };
      }(animalEl), 1000);
    }
  }

  comandoEl.innerHTML = animalSorteado;
  comandoEl.classList.add('visivel');

  sorteadoEl.classList.add('com-fome');
  setTimeout(function() {
    comandoEl.classList.remove('visivel');
  }, TEMPO_PARA_DAR_COMIDA);

  // registra a chamada para o próximo animal
  temporizador = setTimeout(escolheAnimal,
    TEMPO_PARA_DAR_COMIDA + Math.random() * TEMPO_PARA_DAR_COMIDA/2);
}

function cliqueAnimal(e) {
  let animalEl = e.currentTarget,
    comandoEl = document.querySelector('#comando');

  if (animalEl.classList.contains('com-fome')) {
    // animal com fome foi clicado - ganha 1 ponto
    atualizaPontuacao(pontuacao.pontos + 1);
    animalEl.classList.remove('com-fome');
    animalEl.classList.add('satisfeito');
    comandoEl.classList.remove('visivel');
    setTimeout(function() {
      animalEl.classList.remove('satisfeito');
    }, 2000);
    clearTimeout(temporizador);
    temporizador = setTimeout(escolheAnimal,
      TEMPO_PARA_DAR_COMIDA/2 + Math.random() * TEMPO_PARA_DAR_COMIDA/4);
  } else if (!animalEl.classList.contains('satisfeito')) {
    // animal quieto foi clicado - perde 1 ponto
    animalEl.classList.add('com-raiva');
    atualizaPontuacao(pontuacao.pontos - 1);
    setTimeout(function() {
      animalEl.classList.remove('com-raiva');
    }, 3000);
    clearTimeout(temporizador);
    temporizador = setTimeout(escolheAnimal,
      TEMPO_PARA_DAR_COMIDA + Math.random() * TEMPO_PARA_DAR_COMIDA/2);
  }
}

function iniciaJogo() {
  escolheAnimal(animais);
}

function comecar() {
  atualizaPontuacao(0);
  animais = sorteiaAnimais(6);
  preencheAnimaisNaTela();
  iniciaJogo();
}

function parar() {
  clearTimeout(temporizador);
  let elementoAnimais = document.querySelectorAll('.animal'),
      comandoEl = document.querySelector('#comando');

  for (let animalEl of elementoAnimais) {
    animalEl.classList.remove(
      'com-fome',
      'satisfeito',
      'com-raiva',
      'atacando');
    animalEl.removeEventListener('click', cliqueAnimal);
  }

  comandoEl.classList.remove('visivel');
}

function atualizaPontuacao(nova) {
  let elementoPontuacao = document.querySelector('#pontuacao');

  if (nova > pontuacao.pontos) {
    successSound.play();
  } else if (nova < pontuacao.pontos) {
    errorSound.play();
  }
  pontuacao.pontos = nova;
  elementoPontuacao.innerHTML = pontuacao.pontos;
  elementoPontuacao.classList.toggle('positiva', pontuacao.pontos > 0);
  elementoPontuacao.classList.toggle('negativa', pontuacao.pontos < 0);
}

window.addEventListener('load', function() {
  let botaoComecarEl = document.querySelector('#comecar'),
      botaoPararEl = document.querySelector('#parar');

  botaoComecarEl.addEventListener('click', comecar);
  botaoPararEl.addEventListener('click', parar);
});
