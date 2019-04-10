saldo = 1000

// Esta linea modifica el H1
document.getElementById('saldo').innerHTML = saldo

function quitar200(){
  saldo = saldo - 200
  document.getElementById('saldo').innerHTML = saldo
}