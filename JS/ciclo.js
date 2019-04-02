var elBody = document.getElementsByTagName('body')[0];

for(var i=0; i< 500; i++){
  var elBoton = document.createElement('button')
  elBoton.textContent="Texto que no se me ocurre"
  elBody.appendChild(elBoton)
}