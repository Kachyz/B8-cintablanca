// // Funciones

function hacerPastel(sabor){
  // Los pasos para ejecutarse
  console.log("Colocar leche");
  console.log("Batir huevos");
  console.log("Agregar sabor " + sabor);
}
// hacerPastel("Chocolate") // Se hace una llamada a la funcion
// hacerPastel("Vainilla")


// function sumatoria(num1, num2){
//   console.log(num1 + num2)
// }
// sumatoria(6, 8)

// // return X
// // console.log("Texto a imprimir"); //Parametro o argumento


function entrarAntro(edad, dinero){
  if(edad < 18){
    return "no puedes pasar, 'tas chavo"
  }
  if(dinero <= 0){
    return "a que vienes?"
  }

  return "Bailando en el antro!!";
}

var respuesta = entrarAntro(9, 100)
console.log("la respuesta fue", respuesta);

// Ejercicios de Funciones

// 1) Una funcion que recibe un numero y te dice si es PAR o IMPAR
  // modulo, %   
  // 5 / 2 = 2.5
  // 5 % 2 = 1
  //  8 / 2 = 4
  //  8 % 2 = 0


// 2) Una funcion que recibe tu nombre y lo imprime la cantidad de veces que tu le indiques

function imprimeMucho(nombre, cantidad){
  for(var contador=0;  contador < cantidad   ; contador++){
    console.log(nombre);
  }
}

imprimeMucho("Kachyz", 70)



// 3) Una funcion que imprima los N primeros numeros de la serie fibonacci
//      0,1,   1,2,3,5,8,13,21,34
// 4) Una funcion que convierta grados C a grados F











