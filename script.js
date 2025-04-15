

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector(".intentos");
const ultimoResultado = document.querySelector(".ultimoResultado");
const bajoOAlto = document.querySelector(".bajoOAlto");

const enviarIntento = document.querySelector(".enviarIntento");
const campoIntento = document.querySelector(".campoIntento");

let contadorIntentos = 1;
let botonReiniciar = null;


function comprobarIntento() {
  const intentoUsuario = Number(campoIntento.value);

  if (contadorIntentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }
  intentos.textContent += intentoUsuario + " ";

  if (intentoUsuario === numeroAleatorio) {
    ultimoResultado.textContent = `¡Felicidades! ¡Lo adivinaste en el intento número ${contadorIntentos}!`;
    ultimoResultado.style.backgroundColor = "green";
    bajoOAlto.textContent = "";
    stopGame();
  } else if (contadorIntentos === 10) {
    ultimoResultado.textContent = "¡¡¡Fin del juego!!!";
    stopGame();
  } else {
    ultimoResultado.textContent = `¡Incorrecto! Intento ${contadorIntentos} de 10.`;
    ultimoResultado.style.backgroundColor = "red";

    if (intentoUsuario < numeroAleatorio) {
      bajoOAlto.textContent = "¡El número es muy bajo!";
    } else {
      bajoOAlto.textContent = "¡El número es muy alto!";
    }
  }

  contadorIntentos++;
  campoIntento.value = "";
  campoIntento.focus();
}

function stopGame() {
  campoIntento.disabled = true;
  enviarIntento.disabled = true;

  botonReiniciar = document.createElement("button");
  botonReiniciar.textContent = "Iniciar nuevo juego";
  document.body.appendChild(botonReiniciar);

  botonReiniciar.addEventListener("click", resetGame);
}


function resetGame() {
  contadorIntentos = 1;

  const parrafos = document.querySelectorAll(".parrafosResultado p");
  parrafos.forEach((p) => (p.textContent = ""));

  botonReiniciar.remove();
  botonReiniciar = null;

  campoIntento.disabled = false;
  enviarIntento.disabled = false;
  campoIntento.value = "";
  campoIntento.focus();

  ultimoResultado.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}


enviarIntento.addEventListener("click", comprobarIntento);
