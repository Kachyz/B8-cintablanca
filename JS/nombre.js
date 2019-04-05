function saludarPersona(){
  // var persona = "Bere"
  var persona = document.getElementById("nombre").value
  if(persona.length > 0){
    alert("Hola " + persona)
  }
}

function tablas(){
  var numero = document.getElementById("numero").value
  for(var i=0; i<=20; i++)
    console.log(`${i} * ${numero} = ${i * numero}`);
}

function esPar(){
  var numero = document.getElementById("numero").value
  if(numero % 2 == 0)
    alert("PAR")
  else
    alert("IMPAR")
}







function tablas2(){
  var numero=document.getElementById('numero').value;
  var elContenedor=document.getElementById('container');

  var div=document.createElement('div');
  var titulo=document.createElement('h3');
      titulo.textContent=`Tabla del ${numero}`;
  div.appendChild(titulo)

  for(i=0;i<10;i++){
    var parrafo=document.createElement('p');
    parrafo.textContent=`${numero} x ${i} = ${i*numero}`;

    div.appendChild(parrafo);
  }
  elContenedor.appendChild(div)
}