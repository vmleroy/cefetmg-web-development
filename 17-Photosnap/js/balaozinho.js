const marcacao = $(".marcacao");
const balaozinho = $("#balaozinho");
const inputControls = $(".controles input[id^='marcacao-']");
const inputFile = $(".controles input[id='foto']");
const buttonControls = $(".controles button");

const imageReader = new FileReader();
imageReader.addEventListener("load", (event) => {
  $(".foto").attr("src", event.target.result);
});

const inputValues = {}

$(marcacao[0]).addClass("selected");
idx = 0;
for (const m of marcacao) {
  const input = {}
  for (const inputControl of inputControls) {
    const val = $(m).css($(inputControl).attr("id").split("-")[1]).replace("px", "")
    input[$(inputControl).attr("id")] = val;
    if (idx == 0)
      $(inputControl).val(val);
  }
  idx++;
  inputValues[$(m).attr("data-titulo")] = input;
}

marcacao
  .on("click",	
    function (event) {
      $(this).addClass("selected")
        .siblings()
        .removeClass("selected");
        for (const inputControl of inputControls) {
          $(inputControl).val(inputValues[$(this).attr("data-titulo")][$(inputControl).attr("id")]);
        }
    }
  )
  .hover(
    function () {
      const title = $(this).attr("data-titulo");
      const content = $(this).attr("data-conteudo");
      balaozinho.append(`
        <h2>${title}</h2>
        <p>${content}</p>
      `).addClass("balaozinho-active");
    }, 
    function () {
      balaozinho.empty().removeClass("balaozinho-active");
    }
  )
  .on("mousemove", 
    function (event) {
      balaozinho.css({
        top: event.pageY + 15,
        left: event.pageX + 15
      });
    }
  );

inputControls
  .on("input",
    function (event) {
      const selected = $(".marcacao.selected");
      const value = $(this).val();
      inputValues[selected.attr("data-titulo")][$(this).attr("id")] = value;
      selected.css($(this).attr("id").split("-")[1], value + "px");
    }
  );

buttonControls
  .on("click" ,
    function (event) {
      const selected = $(".marcacao.selected");
      for (const inputControl of inputControls) {
        const value = $(inputControl).val();
        inputValues[selected.attr("data-titulo")][$(inputControl).attr("id")] = value;
        selected.css($(inputControl).attr("id").split("-")[1], value + "px");
      }
    }
  );

inputFile
  .on("change",
    function (event) {
      const file = event.target.files[0];

      if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
      }
      
      imageReader.readAsDataURL(file);
    }
  );