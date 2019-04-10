function num(numero){
  secuencia.push(numero)
  cambiarDisplay(getSecuencia())
}

function cambiarDisplay(valor){
  var miDisplay = document.getElementById('display')
  miDisplay.innerText = valor
}

function getSecuencia(){
  return parseInt(secuencia.join(''))
}

function operador(op){
  operacion = op
  previo = parseInt(document.getElementById('display').innerText)
  secuencia = []
}

function igual(){
  nuevo = getSecuencia()

  if(operacion == 'suma'){
    resultado = previo + nuevo
  } else {
    if(operacion == 'menos'){
      resultado = previo - nuevo
    } else {
      if(operacion == 'multi'){
        resultado = previo * nuevo
      } else {
        if(operacion == 'entre')
          resultado = previo / nuevo
      }
    }
  }

  cambiarDisplay(resultado)
  secuencia = []
}

function raiz(){
  if(secuencia.length > 0)
    resultado = getSecuencia()
  resultado = Math.sqrt(resultado)
  cambiarDisplay(resultado)
  secuencia = []
}

function clean(){
  resultado = 0
  previo = 0
  operacion = 'suma'
  secuencia = []
  cambiarDisplay(0)
}

var resultado = 0
var operacion
var previo
var secuencia = []