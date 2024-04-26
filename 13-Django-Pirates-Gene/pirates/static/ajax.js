const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const deleteTesouro = (el) => {
  const tesouroPk = el.getAttribute("data-tesouro-pk");
  const tableRow = el.closest("tr");
  const totalGeral = document.querySelector("#total-geral");
  const deleteUrl = `http://${window.location.host}/remover/${tesouroPk}/`;

  $.ajax({
    url: deleteUrl,
    type: "POST",
    dataType: "json",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRFToken": getCookie("csrftoken"),
    },
    success: (data) => {
      tableRow.remove();
      totalGeral.innerHTML = data.total_geral > 0 ? data.total_geral - (data.preco * data.quantidade) : 0;
      console.log(data);
    },
    error: (error) => {
      console.log(error);
    }
  });
}

$(".deleteTesouroAjax").on("click", (e) => {
  deleteTesouro(e.currentTarget);
});


const criarOuAtualizarTesouro = (el) => {
  const form = $("form")[0];
  const formData = new FormData(form);
  $.ajax({
    url: form.action,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRFToken": getCookie("csrftoken"),
    },
    success: (data) => {
      const {tesouro, redirect} = data
      if (redirect) window.location.href = redirect;
      console.log(tesouro);
    },
    error: (error) => {
      console.log(error);
    }
  });
}
$("#atualizarTesouroAjax").on("click", (e) => {
  e.preventDefault();
  criarOuAtualizarTesouro(e.currentTarget);
})

$("#criarTesouroAjax").on("click", (e) => {
  e.preventDefault();
  criarOuAtualizarTesouro(e.currentTarget);
})

