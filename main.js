let juego = document.getElementById("juego");
let btnreinicio = document.getElementById("btn");
const elem = document.getElementsByClassName("celda");

let listaV=[]
let cir= "O";



for (let i = 0; i < 9; i++) {
  
  elem[i].addEventListener("click", function () {
    if (elem[i].textContent === "") {
      elem[i].innerHTML = "X";
      listaV.push[i]
      juegoComputadora()
    }
  });
}











function juegoComputadora(){
  
  for (let i= 0; i < elem.length; i++) {
    
    if (elem[i].textContent==="") {

      console.log("ESTOY VACIO");
    }
    
  }

  let perro = filtrar();

setTimeout(() => {

  console.log(perro)
  elem[perro].innerHTML = cir;
}, 1000);

 listaV.push(perro);


}


function filtrar(){

  let listaD = []
    //recorrer lista 
  for (let i = 0; i < elem.length; i++) {
   if (elem[i].textContent==="") {
    listaD.push(i)
   }
  
  }

  console.log(listaD.length)
  let game = Math.floor(Math.random()*listaD.length)
  
  
  return listaD[game];
  
  
  
  }
  


function reset() {
  window.location.reload();
}

  // let condicion = true;
  // let contador = 0
  // while (condicion){
  //     console.log("Hola")
  //     cajaBasida="O"
  //     if (cajaBasida==0){
  //         condicion = false
  //     }
  // }



//  function Reiniciar() {
//   cajas.forEach(function (celdas) {
//     celdas.textContent = "";
//     celdas.classList.remove("X", "O");

//     document.addEventListener("keydown", function (event) {
//       if (event.key === "Enter") {
//         document.getElementById("reiniciar").click();
//       }
//   });

//   juego = "X";
// }

//     juego.forEach(function (jugar) {

//        juegos.addEventListener("click", function () {

//      if (juegos.textContent === "") {
//      juegos.textContent = jugador1;
//     juegos.classList.add(jugador1);
//    if (checkWin()) {
//   alert(jugador1 + " wins!");

//   reset();
// } else if (checkDraw()) {
//    alert("It's a draw!");
//     reset();
// } else {
//   jugador1 = jugador1 === "X" ? "O" : "X";
//  }
// }
// });
// });

// *
