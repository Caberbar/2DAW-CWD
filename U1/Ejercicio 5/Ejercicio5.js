/**
 * Le pedimos al usuario mediante una ventana emergente que 
 * introduzca una calificación y lo pasaremos a entero.
 */
var valor = parseInt(window.prompt("Introduce la calificación.", "")); //Le pedimos al usuario que meta un número y lo convertimos a entero.

/**
 * Mientras el usuario no meta una clificación entre el 
 * rango de 0-10 se la volveremos a pedir.
 */
while (!Number.isInteger(valor) || valor < 0 || valor > 10) { //Volveremos a pedir un número si no es número valido o no se encuentra en el rango.
    valor = parseInt(window.prompt("No has introducido un número valido. \nIntroduce un numero entre 0 y 10.", ""));
}

/**
 * Función calcular nota
 * Se encargara atraves de un if de escribir por pantalla 
 * el mensaje acorde con la calificación.
 * 
 * @param valor calificación pedida
 */
function calcularNota(valor) { //Esta función delvolvera un mensaje por pantalla dependiendo del número que reciba.
    let numero = valor;
    if (numero >= 0 && numero <= 5) { //Si el número es mayor o igual que 0 y menor o iguial que 5
        document.write(numero + " es suspenso") //Mostramos por pantalla
    } else if (numero == 6) { //Si el número es igual que 6
        document.write(numero + " es bien") //Mostramos por pantalla
    } else if (numero >= 7 && numero <= 8) { //Si el número es mayor o igual que 7 y menor o iguial que 8
        document.write(numero + " es notable")
    } else if (numero >= 9 && numero <= 10) { //Si el número es mayor o igual que 9 y menor o iguial que 10
        document.write(numero + " es sobresaliente") //Mostramos por pantalla
    }
}

calcularNota(valor) //Lamamos a la función

