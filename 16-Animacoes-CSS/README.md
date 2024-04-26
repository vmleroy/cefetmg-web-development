[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Ei1u5j2P)
# EduKids Animals

![](docs/edukids-final.png)

Seus pais vão viajar e você deve cuidar do seu mini irmãozinho de 3 anos.

Com um comportamento de anjinho (#sqn), o pequeno Joãozinho vai precisar ser
entretido por um bom tempo. Você, como um ótimo irmã(ão) e programador(a)
exímio, decide que é hora de criar um jogo Web para, além de entreter seu
mini-irmão, ensiná-lo como falar o nome de alguns animais.

## Atividade

O jogo funciona assim:

- Assim que apertar **play**, o jogo começa
- A cada ~2s, um animal é sorteado e começa a ficar agitado, com fome
- Você deve clicar no animal agitado para alimentá-lo antes que ele coma
  alguém
  - Fazendo isso, ganha-se 1 ponto
- Se um animal não é clicado, perde-se 2 pontos
- Se um animal que estava sossegado é perturbado fora de hora, perde-se 1
  ponto

Toda essa funcionalidade **já está implementada**. O que está **faltando**:

1. O jogo ainda não dá um _feedback_ visual interessante para o jogador
   - Apenas o nome do animal aparece escrito e seu irmão ainda não sabe ler
1. O arquivo javascript `jogo.js` controla o jogo. Ele tem um temporizador que
   fica **adicionando e removendo classes dos elementos** dos animais
   - `com-fome`, quando o animal está com fome
   - `satisfeito`, quando o animal acabou de comer
   - `com-raiva`, quando um animal sossegado é perturbado
   - `atacando`, quando um animal com fome não é alimentado a tempo

### Exercício 1

Criar uma **transição para quando o mouse estiver em cima dos botões**
   _play/stop_ (para que o elemento se revele lentamente)

### Exercício 2

Você deve implementar uma **metáfora visual** para cada um dos 4 estados dos
animais. Algumas **sugestões** (mas **não se atenha a elas**):

- a) `com-fome`, animal piscando (opacidade variando)
- b) `satisfeito`, uma borda verde no animal e o animal fica girando de alegria
- c) `com-raiva`, animal vai crescendo, ou fica pulsando
- d) `atacando`, animal dá um salto e cresce, com uma borda vermelha

**Desafios**:

- Faça uma das situações ter mais de uma animação (veja no FAQ)
- Coloque um efeito tridimensional (de profundidade) em alguma animação
  (veja no FAQ)

## FAQ

1. Qual a diferença entre `transition` e `animation`?
   - Veja no
     [slide sobre `transition` _vs_ `animation`][transition-ou-animation].
1. O que é uma transformação?
   - É uma operação de translação (deslocamento), escala (dimensionamento) ou
     rotação (giro) que pode ser aplicada aos elementos da página. Veja
     sobre [transformações nos slides][transformacoes].
1. Como posso criar uma animação?
   Uma animação é composta por uma sequência de quadros (`@keyframes`) e
   uma propriedade `animation` em um elemento. Veja mais nos
   [slides sobre como criar animações][criando-uma-animacao].
1. Posso fazer mais de uma animação em sequência?
   - Sim! Basta colocar duas animações, separadas por vírgula, como valor
     da propriedade `animation`. Além disso, a segunda animação deve ter um
     `animation-delay` igual à duração da primeira. Veja no
     [slide sobre mais de uma animação][mais-de-uma-animacao].

[criando-uma-animacao]: https://fegemo.github.io/cefet-front-end/classes/css6/#criando-uma-animacao
[transition-ou-animation]: https://fegemo.github.io/cefet-front-end/classes/css6/#transition-ou-animation
[transformacoes]: https://fegemo.github.io/cefet-front-end/classes/css6/#transformacoes
[mais-de-uma-animacao]: https://fegemo.github.io/cefet-front-end/classes/css6/#mais-de-uma-animacao
