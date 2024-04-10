# cefet-front-end-coral-55

Um cardápio das gostosuras marítimas servidas na Lanchonete do Coral 55.




### Solução passo-a-passo
#### Estilização do recipiente geral da página (`#recipiente`) - [como ficou][passo1]
Para isso, coloque:
  - a propriedade de largura igual a `800px` (para fixá-la)
  - a mínimo de altura igual a 100% (propriedade `min-height`)
  - centralize o `#recipiente` da mesma forma que centralizaria uma imagem ([ver slides][centralizando-imgs])
  - Coloque o background-image degradê
  - Defina a borda esquerda e direita como `1px solid #d3d3d3`
#### Estilização do cabeçalho (`header`) - [como ficou][passo2]
  - Estilize o `h1` e o `h2` do `header` (ou seja, use o seletor `header h1` e `header h2`, respectivamente):  
    - Alterar a fonte (`font-family`), defina o tamanho da fonte e cor conforme especificação
    - Defina o `font-weight` para não deixar negrito
  - Deixe o `h1` do `header` centralizado (`margin: 0 auto`)
  - No `header`:
    -  Aumente a margem esquerda tamanho o suficiente para que a barra lateral fique a esquerda. Coloque também a margem a direita o grande o suficientesuficente para que o `h2` do `header` fique alinhado com o `h1`
    - Coloque um `padding` de 10 pixels no topo para que elimine a "linha branca" que fica acima
  - Estilize a classe `roxo` conforme especificado
#### Estilização da seção lateral (`#lateral` e um pouco da `#cardapio`) - [como ficou][passo3]
   - Deixe o `#recipiente` com a propriedade `position: relative;` para que os elementos `absolute` dentro de `#recipiente` tenham sua posição alterada levando em consideração o container `#recipiente`
   - Deixe os elementos: `#lateral`, `#bolhas` e `#peixe` com a posição `absolute` e com posições conforme a especificação
   - Deixe o elemento `#siri` com a posição `relative` e posicionamento conforme a especificação
   - Deixe o escrito do cardápio, o h2 da barra lateral (ou seja, usando o seletor `#lateral h2`) com
   cor, tamanho, fonte, font-weight conforme especificação. Além disso, deixe a posição
   como absoluta e o posicione corretamente. Coloque `z-index` para deixá-lo de forma correta
   conforme especificação.
   - Deixe o cardapio (`#cardapio`) com uma margem esquerda grande o suficiente para que não o misture com a barra lateral.
#### Estilização do cardápio (`#cardapio`) - [como ficou][passo4]
  - Ajuste o padding no cardápio para ficar parecido com  a especificação
  - use o `rgba` para definir branco, mas que não fique 100% opaco ([ver slide][rgba])
  - Defina a borda no topo, esquerda e abaixo como `1px solid #aac0ae`
  - Coloque os `h3` do cardápio (ou seja, seletor `#cardapio h3`) com a cor, fonte e tamanho de fonte conforme especificado. Além disso, ajuste a margem do topo para existir um deslocamento conforme a especificação.
  - Estilize os itens do cardápio (seletor `#cardapio article`) com fonte, tamanho e
   cor conforme especificado. Além disse altere a propriedade que ajusta o tamanho da linha (`line-height`) para, assim, aumentarmos o tamanho da linha.
  - Estilize para que o preço flutue a direita
#### Estilização do rodapé (`footer`) - [como ficou][passo5]
  - Como devemos alinhar imagens a direita e elas são `inline`, alinhe-as usando `text-align`.
  - Ajuste o padding top, right, bottom e left. Você pode fazer essas três propriedades
  automaticamente com um: `padding: 46px 15px 25px 0;`
  - ajuste a margem a esquerda para `154px;`
#### Estilização do _ticket_ (`#ticket`) - [como ficou][passo6]
  - No ticket (i.e. `#ticket`)
    - Deixe com a posição fixa na tela, independente do scroll (`position:fixed`)
    - Colouqe o posicionamento a esquerda o suficiente para que ele fique 50% escondido
    - Deixe centralize o ticket verticalmente na tela (i.e. `top:50%` e `margin-top: -42px;`)
    - Altere a propriedade `transtition` para que, ao selecioná-lo, ele apareça mais suavemente
    (e.g. `transition: all 100ms ease;`)
  - Ao passar o mouse no ticket:
    - Altere a posição a esquerda para `0px`


[passo1]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo1.png
[passo2]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo2.png
[passo3]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo3.png
[passo4]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo4.png
[passo5]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo5.png
[passo6]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo6.png
[centralizando-imgs]:https://fegemo.github.io/cefet-front-end/classes/html2/#centralizando-imagens
[rgba]:  https://fegemo.github.io/cefet-front-end/classes/css1/#33


### <abbr title="Frequently Asked Questions">FAQ</abbr>

- Para rotacionar um elemento no sentido horário:
  ```css
  #elemento {
    transform: rotate(45deg); /* dado em graus, sentido horário */
  }
  ```
  - Encontre qual o ângulo de rotação do título `<h2>Cardápio</h2>`
    - Obs: é possível colocar um ângulo negativo
  - Além de girá-lo, será necessário também posicioná-lo para que ele fique
    próximo, mas abaixo do siri.
- Para fazer uma **transição suave da posição** `left` de um elemento, usamos
  a propriedade `transition`:
  ```css
  #elemento {
    /* ... */
    left: -100px;
    transition: left 100ms ease-out; /* propriedade, duração, interpolação */
  }
  #element:hover {
    left: 0;
  }
  ```
- Como centralizo na horizontal um elemento `block` que não está `absolute`?
  - Veja nos [slides sobre centralização horizontal][centralizacao-horizontal]
- Meu degradê não está funcionando... por quê?
  - Possivelmente, você está atribuindo um `linear-gradient(...)` para a
    propriedade `background-color`, mas um degradê é, para o CSS, um
    `background-image`
  - Veja no slide da aula das abelhas sobre [gradientes][gradientes]
- Para incluir um _script_ na página, coloque uma _tag_ `<script src="caminho-para-arquivo.js"></script>` no final do `<body>`, logo antes do `</body>`.



[cores-transparentes]: https://fegemo.github.io/cefet-front-end/classes/html3/#cores-transparentes
[gradientes]: https://fegemo.github.io/cefet-front-end/classes/css1/#gradientes
[centralizacao-horizontal]: https://fegemo.github.io/cefet-front-end/classes/css5/#centralizacao-horizontal
[line-height]: https://fegemo.github.io/cefet-front-end/classes/css5/#line-height
