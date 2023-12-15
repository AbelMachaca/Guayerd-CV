const maquina1 = document.getElementById('maquina-escribir1')


const maquinaEscribir1 = (text = '',tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir = setInterval(function(){
      etiqueta.innerHTML += arrayCaracteres[cont]
      cont++
      if (cont === arrayCaracteres.length) {
        clearInterval(escribir)
      }
    }, tiempo)
  }


  maquinaEscribir1("Hola! Soy Abel Machaca, developer Fullstack con conocimientos de desarrollo en Salesforce  ",70, maquina1)



 