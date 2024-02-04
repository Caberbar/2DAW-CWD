document.write("-------------------- ACTIVIDAD 3 --------------------<br><br><br>")
// Usaremos la actividad anterior ya que contiene varios ejemplos y no tener que repetirlos
/* ------------------------------ PRUEBAS ------------------------------*/

document.write("-------------------- BUSQUEDA SECUENCIAL DNI --------------------<br><br><br>") /*Hay dos formas de medir el timepo, usare en cada uno una diferente*/

//Comprobación de tiempo con el método DATE y busqueda secuencial
let inicio = performance.now(); // Marca el tiempo actual en milisegundos
let prueba = escuela.busquedaSecuencial("12345678A");
let final = performance.now(); // Marca el tiempo actual en milisegundos nuevamente
let tiempoTotal = final - inicio; // Calcula la diferencia de tiempo

if (prueba !== -1) {
    document.write("Se encontró una coincidencia con dicho DNI: <br>" + prueba + "<br>Tiempo: " + tiempoTotal +" ms")
} else {
    document.write("No se encontró una coincidencia con dicho DNI. <br>Tiempo:" + tiempoTotal + " ms")
}

document.write("<br><br><br>-------------------- BUSQUEDA BINARIA DNI --------------------<br><br><br>") /*Hay dos formas de medir el timepo, usare en cada uno una diferente*/

//Comprobación de tiempo con el método PERFORMANCE y busqueda binaria
let inicioB = performance.now(); // Marca el tiempo actual con alta precisión en milisegundos
let prueba2 = escuela.busquedaBinaria("12345678A");
let finalB = performance.now(); // Marca el tiempo actual con alta precisión en milisegundos nuevamente
let tiempoTotalB = finalB - inicioB; // Calcula la diferencia de tiempo

if (prueba2 != -1) {
    document.write("Se encontró una coincidencia con dicho DNI: <br>" + prueba2 + "<br>Tiempo: " + tiempoTotalB+" ms")
}else{
    document.write("No se encontró una coincidencia con dicho DNI. <br>Tiempo:" + tiempoTotalB + " ms")
}