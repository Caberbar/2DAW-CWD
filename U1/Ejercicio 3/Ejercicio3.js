/*
 * Función suma
 * Esta función se encargara de sumar el numero que le 
 * pases por parametro del 1 al 10.
 * @param numero - numero que se pasará por parametro.
*/
function suma(numero){
    let suma = 0; //Iniciamos la variable suma.
    for(i = 0; i <= 10; i++){ //Recorremos la variable i con la que iremos sumando
        suma = numero + suma; //Realizamos la suma.
        document.write(numero + " + " + i + " = "+suma + "<br/>") //Lo mostramos por pantalla
    }
}

/**
 * Para hacer un ejemplo usare el número cinco llamando a la función.
 */
suma(5); //Hacemos una prueba


document.write("<br/><br/>");

/*
 * Función multiplicar
 * Esta función se encargara de multiplicar el numero que le 
 * pases por parametro del 1 al 10.
 * @param numero - numero que se pasará por parametro.
*/
function multiplicar(numero){
    let resultado = numero; //Iniciamos la variable resultado.
    for(i = 0; i <= 10; i++){ //Recorremos la variable i con la que iremos multiplicando
        document.write(numero + " x " + i + " = "+resultado * i + "<br/>") //Lo mostramos por pantalla
    }
}

/**
 * Para hacer un ejemplo usare el número siete llamando a la función.
 */
multiplicar(7); //Hacemos una prueba


document.write("<br/><br/>");

/*
 * Función división
 * Esta función se encargara de dividir el numero que le 
 * pases por con sus 10 primeros multiplos incluido el mismo.
 * @param numero - numero que se pasará por parametro.
*/
function division(numero){
    let resultado; //Iniciamos la variable resultado.
    for(i = 1; i <= 10; i++){ //Recorremos la variable i con la que iremos dividiendo
        resultado = numero * i; //Multiplicamo i por numero y lo guardamos
        document.write(resultado + " / " + numero + " = " + resultado / numero + "<br/>") //Lo mostramos por pantalla
    }
}

/**
 * Para hacer un ejemplo usare el número nueve llamando a la función.
 */
division(9); //Hacemos una prueba