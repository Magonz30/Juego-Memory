const colors = ["rojo", "azul", "amarillo", "verde", "negro", "gris", "naranja", "morado"];
let serie = [];
let posicio;
let entradaUsuario = []; //serie del usuario
let esperandoInput = false; //determina que el usuario no pueda interactuar con los div (botones) al principio

// Mostrar visualmente los colores
async function mostrar_colors(temps){
 esperandoInput = false; //no deja al jugador interactuar con los div
 for (let i = 0; i < serie.length; i++){
  let color = serie[i];
  let casilla = document.getElementById(color);
  casilla.style.opacity = "0.3";  // efecto de parpadeo
  await esperar(temps);
  casilla.style.opacity = "1000";
  await esperar(200);
  console.log(serie[i]);
 }
 entradaUsuario = [];//determina que nuestra serie personal empiece desde cero asi tenemos que hacer todo otra vez
 esperandoInput = true; // despues de hacer la serie nos deja jugar
}

// Dice el tiempo que hay que esperar en la serie
function esperar(milliseconds){
 return new Promise(resolve => {
  setTimeout(resolve, milliseconds);
 });
}

// Añade un color del array aleatorio a la serie
function random () {
 posicio = Math.floor(Math.random() * 8);
 serie.push(colors[posicio]);
 console.log(serie);
}

//Verifica la jugada del jugador
function comprovaColor(color){
 if (!esperandoInput) return; //no nos deja interactuar mientras hacemos la funcion


 entradaUsuario.push(color); // es lo que seleccionamos
 let index = entradaUsuario.length - 1; //-1 pq asi lo lee el array

 //comprueba que añamos puesto lo mismo que la serie si no es asi nos salta una alerta de error y reinicia todx

 if (entradaUsuario[index] !== serie[index]) {
  alert("¡Error! Empieza de nuevo.");
  serie = [];
  entradaUsuario = [];
  esperandoInput = false;
  return;
 }

 //comprueba que añamos puesto lo mismo que la serie
 if (entradaUsuario.length === serie.length) {
  esperandoInput = false;
  setTimeout(() => {
   comprova();  // ir al siguiente nivel
  }, 1000);
 }
}

//Añade un color aleatorio y muestra la serie
function comprova (){
 random();
 mostrar_colors(100);
}



