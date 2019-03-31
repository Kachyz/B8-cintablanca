var edad = prompt('Dame tu edad')

if(edad < 0){
  alert("tu no existes")
}else{
  if (edad >= 6 ) {
    alert("Estas chavo, vas a la primaria")
  } else {
    if(edad >= 12 && edad < 15){
      alert("Sigues chavo, estas en secu")
    } else {
      if(edad >= 15 && edad < 18){
        alert("Ya vas en prepa")
      } else{
        if(edad >= 18 && edad < 60){
          alert("Ponte a jalar!!")
        } else {
          alert("Descansa")
        }
      }
    }
  }
}
console.log("Ya te moriste");

// IF   - SI, entonces
// ELSE - Si no