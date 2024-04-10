const TEMPO_MINIMO = 1000;    // 1s em milissegundos
const TEMPO_VARIAVEL = 1500;  // 3s
const bolhaEl = carregaUmaImagem('images/bolha.png');

function carregaUmaImagem(path) {
  const img = new Image();
  img.src = path;
  return img;
}

function getLarguraJanela() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


async function criaUmaBolha() {
  const novaBolhaEl = bolhaEl.cloneNode();
  const posicaoX = Math.random() * getLarguraJanela() + 'px';
  // Math.random() retorna um número aleatório de 0 até 1
  // ... daí multiplicamos esse número pela largura da janela

  novaBolhaEl.style.position = 'fixed';
  novaBolhaEl.style.transition = 'all 5s linear';
  novaBolhaEl.style.bottom = '-50px';
  novaBolhaEl.style.left = posicaoX;
  novaBolhaEl.style.opacity = 1;
  novaBolhaEl.style.transform = `scale(${Math.random() / 2 + 0.5})`;

  document.body.appendChild(novaBolhaEl);
  const animation = novaBolhaEl.animate([
    { bottom: '-50px' },
    { bottom: window.innerHeight + 'px' }
  ], {
    duration: 5000,
    iterations: 1
  });

  // pelo menos, vai esperar por TEMPO_MINIMO. Mas pode, adicionalmente,
  // esperar por mais [0%....100%] x TEMPO_VARIAVEL
  const proximaBolhaDaqui = TEMPO_MINIMO + Math.random() * TEMPO_VARIAVEL;
  window.setTimeout(criaUmaBolha, proximaBolhaDaqui);


  // remove o elemento da imagem da bolha assim que sua transição terminar
  await animation.finished
  document.body.removeChild(novaBolhaEl);
}


criaUmaBolha();
