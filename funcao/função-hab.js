let icons = document.querySelectorAll(".fa-brands");

function mudar1() {
  let description = document.querySelector("#description");
  description.innerHTML =
    "HTML é uma linguagem de marcação para construção de páginas na Web";
}

function mudar2() {
  let description = document.querySelector("#description");
  description.innerHTML = "CSS é um mecanismo de estilização de páginas Web";
}

function mudar3() {
  let description = document.querySelector("#description");
  description.innerHTML =
    "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web";
}

function mudar4() {
  let description = document.querySelector("#description");
  description.innerHTML =
    "GitHub é um serviço baseado em nuvem que hospeda um sistema de controle de versão.";
}

function mudar5() {
  let description = document.querySelector("#description");
  description.innerHTML =
    "O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente.";
}

icons.forEach((element) => {
  element.addEventListener("mouseout", function () {
    let description = document.getElementById("description");
    description.innerHTML = `Passe o mouse acima para a ler a descrição de minhas habilidades.`;
  });
});

function abrirMenu() {
  let barraMenuAberta = document.getElementById("barra-menu");
  let esconderHamburguer = document.querySelector("#open");
  if (barraMenuAberta.style.width === "0px") {
    barraMenuAberta.style.width = "180px";
    esconderHamburguer.classList.add("esconder");
  } else {
    barraMenuAberta.style.width = "0px";
  }
}

let closeIcon = document.querySelector("#barra-menu");
closeIcon.addEventListener("click", function fechar() {
  let menu = document.querySelector("#barra-menu");
  let mostrarHamburguer = document.querySelector("#open");
  if (menu.style.width === "180px") {
    menu.style.width = "0px";
    mostrarHamburguer.classList.remove("esconder");
  }
});
