// Número de enlaces de la página
const enlacesTotales = document.getElementsByTagName('a').length;
document.getElementById('resultadoEnlaces').innerHTML = `Número total de enlaces en la página: ${enlacesTotales}`;

// Número de enlaces que enlazan a http://prueba
let enlacesAPrueba = 0;
const enlaces = document.getElementsByTagName('a');

// Recorre todos los elementos 'a' en la página
for (let i = 0; i < enlaces.length; i++) {
  // Comprueba si el atributo 'href' es igual a 'http://prueba'
  if (enlaces[i].getAttribute('href') === 'http://prueba') {
    enlacesAPrueba++; // Incrementa el contador de enlaces a http://prueba
  }
}

// Muestra el resultado en el elemento 'resultadoEnlaces'
document.getElementById('resultadoEnlaces').innerHTML += `<br>Número de enlaces que enlazan a http://prueba: ${enlacesAPrueba}`;

// Número de enlaces del tercer párrafo
const tercerParrafo = document.getElementsByTagName('p')[2];
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a').length;

// Muestra el resultado en el elemento 'resultadoEnlaces'
document.getElementById('resultadoEnlaces').innerHTML += `<br>Número de enlaces del tercer párrafo: ${enlacesTercerParrafo}`;
