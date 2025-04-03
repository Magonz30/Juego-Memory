const colors = ["rojo", "azul", "amarillo", "verde", "negro", "blanco", "naranja", "morado"];
let serie = []
let posicio;

async function mostrar_colors(temps){
 for (let i=0;i<serie.length;i++){
  //TODO instruccions per mostrar el color. Per exemple

  //Crida al mètode esperar
  await esperar(temps);
  console.log(serie[i]);
 }
}
function esperar(milliseconds){
 return new Promise(resolve => {
  setTimeout(resolve, milliseconds);
 });
}


function random () {
 posicio = Math.floor(Math.random() * 8);
 console.log(posicio);
 serie.push(colors[posicio]);
 console.log(serie);
}

function comprova (color){
 random()

 if (color === "azul"){
  document.getElementById('azul').innerHTML = '<h2>' + 'Azul' + '</h2>';
 }
 if (color === "rojo"){
  document.getElementById('rojo').innerHTML = '<h2>' + 'Rojo' + '</h2>';
 }
}



