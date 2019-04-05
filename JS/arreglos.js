//Declarar un arreglo
var alumnos = ["Bere Ayala", "Alberto Gonzalez", 8 ]
console.log(alumnos)


console.log( alumnos[0]   )
// alumnos[x] -> Alumnos en la posicion X
alumnos[3] = "Scarlett Gomez"
alumnos[4] = "Juan Gomez"
alumnos[5] = "Scarlett Perez"
console.log( alumnos[3]   )
console.log( alumnos )

// alumnos[10] = "un fantasma"
// console.log(alumnos[10]);

// alumnos[2] = "un fantasma"
// console.log(alumnos);


// for(var contador=0; contador<alumnos.length; contador++){
//   if(alumnos[contador] == "Alberto Gonzalez"){
//     alert("Hola " + alumnos[contador])
//   } else {
//     console.log("No quiero saludar a", alumnos[contador])
//   }
// }

var personas = [{
  nombre: "Kachyz",
  edad: 30,
  vivo: true
},{
  nombre: "Carlos",
  edad: 9,
  telefono: [123, 345, 765]
}]

var alberto = {
  colorcamisa: "blanca",
  lentes: true,
}

if(personas[1].edad >= 18){
  alert("SI ES MAYOR")
} else{
  alert("ES MENOR")
}

console.log(personas[1].telefono[1]);