let juego = document.getElementById("juego");
let btnreinicio = document.getElementById("btn");
const elem = document.getElementsByClassName("celda");
let turnoX = document.getElementById("menX");
let sim2 = document.getElementById("simbolos");

let listaV = [];

Gato();
//ESTE ES MI FLUJO DE MI PROGRAMA MAIN

function Gato() {
  turnoX.innerHTML="Turno : Usuario"
  sim2.innerHTML="simbolo : X"
  for (let i = 0; i < 9; i++) {
    elem[i].addEventListener("click", function () {
      if (elem[i].textContent === "") {
    
        elem[i].innerHTML = "X";
        console.log(elem[i]);
        listaV.push(i);

        juegoComputadora();
      }

      if (
        elem[0].textContent == "X" &&
        elem[4].textContent == "X" &&
        elem[8].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
       
      }
      if (
        elem[2].textContent == "X" &&
        elem[4].textContent == "X" &&
        elem[6].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[0].textContent == "X" &&
        elem[3].textContent == "X" &&
        elem[6].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[1].textContent == "X" &&
        elem[4].textContent == "X" &&
        elem[7].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[2].textContent == "X" &&
        elem[5].textContent == "X" &&
        elem[8].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[0].textContent == "X" &&
        elem[1].textContent == "X" &&
        elem[2].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[3].textContent == "X" &&
        elem[4].textContent == "X" &&
        elem[5].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[6].textContent == "X" &&
        elem[7].textContent == "X" &&
        elem[8].textContent == "X"
      ) {
        ganador.innerHTML = "Ganador: Usuario";
      }
      if (
        elem[0].textContent == "O" &&
        elem[4].textContent == "O" &&
        elem[8].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[2].textContent == "O" &&
        elem[4].textContent == "O" &&
        elem[6].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[0].textContent == "O" &&
        elem[3].textContent == "O" &&
        elem[6].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[1].textContent == "O" &&
        elem[4].textContent == "O" &&
        elem[7].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[2].textContent == "O" &&
        elem[5].textContent == "O" &&
        elem[8].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[0].textContent == "O" &&
        elem[1].textContent == "O" &&
        elem[2].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[3].textContent == "O" &&
        elem[4].textContent == "O" &&
        elem[5].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
      if (
        elem[6].textContent == "O" &&
        elem[7].textContent == "O" &&
        elem[8].textContent == "O"
      ) {
        ganador.innerHTML = "Ganador: la maquina";
      }
    });

    console.log(elem);
  }
}

function juegoComputadora() {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].textContent === "") {
      console.log("ESTOY VACIO");
    }
  }

  let perro = filtrar();
  turnoX.innerHTML="Turno : Computadora"
  sim2.innerHTML="simbolo : O"
  setTimeout(() => {
    console.log(perro);
 
    elem[perro].innerHTML = "O";
    turnoX.innerHTML="Turno : Usuario"
    sim2.innerHTML="simbolo : X"
  }, 1500);



  listaV.push(perro);
}

function filtrar() {
  let listaD = [];
  //recorrer lista
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].textContent === "") {
      listaD.push(i);
    }
  }

  console.log(listaD.length);
  let game = Math.floor(Math.random() * listaD.length);

  return listaD[game];
}

btnreinicio.addEventListener("click", reset);

function reset() {
  window.location.reload();
}


    