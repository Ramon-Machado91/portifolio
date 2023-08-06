function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 700 * i);
  });
}

const titulo = document.querySelector("h1");
typeWriter(titulo);

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
