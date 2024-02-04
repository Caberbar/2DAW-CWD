document.write("-------------------- ACTIVIDAD 4 --------------------<br><br><br>")
// Usaremos la actividad 2 ya que contiene varios ejemplos y no tener que repetirlos
/* ------------------------------ PRUEBAS ------------------------------*/

document.write("-------------------- TIEMPO BUSQUEDA SECUENCIAL DNI --------------------<br><br><br>") /*Hay dos formas de medir el timepo, usare en cada uno una diferente*/

//Comprobación de tiempo con el método DATE y busqueda secuencial
let inicio1 = performance.now(); // Marca el tiempo actual en milisegundos
let prueba1 = escuela.busquedaSecuencial("99999999Z")
let final1 = performance.now(); // Marca el tiempo actual en milisegundos nuevamente
let tiempoTotal1 = final1 - inicio1; // Calcula la diferencia de tiempo

document.write("DNI grande: <br>" + prueba1 + "<br>Tiempo: " + tiempoTotal1 +" ms");

//Comprobación de tiempo con el método DATE y busqueda secuencial
let inicio2 = performance.now(); // Marca el tiempo actual en milisegundos
let prueba2 = escuela.busquedaSecuencial("00000001A")
let final2 = performance.now(); // Marca el tiempo actual en milisegundos nuevamente
let tiempoTotal2 = final2 - inicio2; // Calcula la diferencia de tiempo

document.write("<br><br><br>DNI pequeño: <br>" + prueba2 + "<br>Tiempo: " + tiempoTotal2 +" ms");


document.write("<br><br><br>-------------------- TIEMPO BUSQUEDA BINARIA DNI --------------------<br><br><br>") /*Hay dos formas de medir el timepo, usare en cada uno una diferente*/

//Comprobación de tiempo con el método PERFORMANCE y busqueda binaria
let inicioB1 = performance.now(); // Marca el tiempo actual con alta precisión en milisegundos
let pruebaB1 = escuela.busquedaBinaria("99999999Z");
let finalB1 = performance.now(); // Marca el tiempo actual con alta precisión en milisegundos nuevamente
let tiempoTotalB1 = finalB1 - inicioB1; // Calcula la diferencia de tiempo

document.write("DNI grande: <br>" + pruebaB1 + "<br>Tiempo: " + tiempoTotalB1 +" ms");

//Comprobación de tiempo con el método PERFORMANCE y busqueda binaria
let inicioB2 = performance.now(); // Marca el tiempo actual con alta precisión en milisegundos
let pruebaB2 = escuela.busquedaBinaria("00000001A");
let finalB2 = performance.now(); // Marca el tiempo actual con alta precisión en milisegundos nuevamente
let tiempoTotalB2 = finalB2 - inicioB2; // Calcula la diferencia de tiempo

document.write("<br><br><br>DNI pequeño: <br>" + pruebaB2 + "<br>Tiempo: " + tiempoTotalB2 +" ms");