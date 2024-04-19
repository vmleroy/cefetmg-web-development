[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zbGRgPC2)
# _Unicorns are real_

Uma página web **fabulosa** contando a origem, os mitos e a verdade sobre os
unicórnios.

![](docs/holy-crap-i-look-fabulous.jpg)

## Atividade

Um _web designer_ criou a parte artística de uma página  web usando seu
programa de edição de imagens predileto (_e.g._, Photoshop) e lhe entregou
dois arquivos (<abbr title="Comprehensive Layout">comp</abbr>:
`unicorns-comp.png`, <abbr title="Specifications">specs</abbr>:
`unicorns-specs.png`) para que você crie a página propriamente dita,
usando HTML e CSS.

Você deve estilizar a página (`index.html`) de forma a fazê-la exatamente
igual ao que o _web designer_ vislumbrou. Estilize a margem dos parágrafos da música usando seletores que não são de classes/IDs

Veja o _layout_ no arquivo `unicorns-comp.png` e as _specs_ no arquivo `unicorns-specs.png`.

O código HTML está praticamente pronto e será necessário alterá-lo apenas para fazer as quebras de linha da letra da música.




## Desafios

1. Faça sua página ser **_pixel-perfect_** com os _specs_, ou seja, a página tem que seguir exatamente o que foi proposto
1. Decore a letra da música até o final da aula e vamos todos cantar \o/ ;)

## FAQ

- Que **fonte é essa "Kaushan Script"**? Acho que não funcionou.
  - Ela é uma fonte que normalmente não está instalada nos computadores. Nesse caso, você pode usar a fonte que está **hospedada no Google Fonts** (procure por Kaushan Script lá)
- **Espacinho branco** ao redor da página. Como tirar?
  - Por padrão, o elemento `<body>` possui uma margem de `8px` nas quatro
    direções. Esse espaço é devido a isso.
- **Espação em branco no topo** da página. O que está provocando ele?
  - Investigue, usando **as ferramentas do desenvolvedor**, aquele espaço
    clicando com botão direito no espaço em branco e, então, escolhendo
    a opção "Inspecionar"
    - Quando a árvore de elementos HTML abrir, vá selecionando os elementos
      próximos até ver quem está provocando esse espaço em branco
      - Dica: é a margem padrão de alguém
- Minha `<div id="hoje">` parece estar mais larga que o normal. Por quê?
  - Isso é por causa do _Box Model_! 
