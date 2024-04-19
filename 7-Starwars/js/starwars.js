// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const url = 'https://swapi.dev/api/films/';
const audio = new Audio('audio/tema-sw.mp3');

const toRoman = (number) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  for (const pair of romanNumerals) {
    while (number >= pair.value) {
      result += pair.numeral;
      number -= pair.value;
    }
  }
  return result;
}

const onFilmClick = (event, films) => {
  const episode = $(event.target).data('episode');
  const film = films.find((film) => film.episode_id === episode);
  $('#intro').html(
    `<h2>${film.title.toUpperCase()}</h2>
    <p>Episode ${toRoman(film.episode_id)}</p>
    <p>${film.opening_crawl}</p>`
  );
};



$(audio)
  .on('canplay', () => audio.play())
  .on('ended', () => audio.play());

$.ajax({
  url: url,
  dataType: 'json',
  method: 'GET',
  success: function (response) {
    const films = response.results;
    films.sort((a, b) => a.episode_id - b.episode_id);

    $('#intro').html(
      `<h2>${films[0].title.toUpperCase()}</h2>
      <p>Episode ${toRoman(films[0].episode_id)}</p>
      <p>${films[0].opening_crawl}</p>`
    );

    $('#filmes ul')
      .append(
        films.map((film) =>
          `<li data-episode="${film.episode_id}">
            Episode ${toRoman(film.episode_id)}: ${film.title}
          </li>`
        )
      )
      .click((event) => onFilmClick(event, films));
  }
});
