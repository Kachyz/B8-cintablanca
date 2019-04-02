// var numero = prompt("dame un numero")

// for( var contador = 0 ; contador <= 100 ; contador++ ) {
//   console.log(contador + " * " + numero + " = " + numero * contador);
// }


// Factorial
// es la multiplicacion de ese numero por todos sus descendientes hasta el 1
var n = 3;
var usuario = 0;

for(var intentos = 0; usuario != n; intentos++){
  usuario = prompt("Adivina mi numero")
  alert("numero de intentos" + intentos)
}