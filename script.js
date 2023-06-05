const container = document.querySelector(".container");
const btnRegistro = document.getElementById("sign-up-btn");
const btnIniciarSesion = document.getElementById("sign-in-btn");

btnRegistro.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

btnIniciarSesion.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
