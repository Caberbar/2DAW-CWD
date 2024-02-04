/**
 * Le pedimos al usuario mediante una ventana emergente que 
 * introduzca un número y lo pasaremos a entero.
 */
var valor = parseInt(window.prompt("Dime un número", "")); //Le pedimos al usuario que meta un número y lo convertimos a entero.


/**
 * Comprobaremos que el número introducio de verdad sea un número, 
 * en caso de no serlo mandar un mensaje de error
 * 
 * Si es número entrará en la función "esPar" que comprobara 
 * si es un número primo o no y lo mostrará por pantalla.
 * 
 * Despues pasará a la función "factorial" que calculara el 
 * factorial de dicho número.
 */
if(Number.isInteger(valor)){ //Si el valor es un número entramos al programa.
    function esPrimo(valor){ //Esta función mirará si un número es primo.
        if(valor%2==0){ //Si el número modulo 2 es 0 es primo
            document.write(valor + " es par. <br/>") //Mostramos por pantalla
        }else{
            document.write(valor + " no es par.<br/>") //Mostramos por pantalla
        }
        
    }

    function factorial(valor){ //Esta función mirará el factorial de un número.
        let contador = 1; //Iniciamos un variable contador
        for(i = 1; i <= valor; i++){ 
            contador = contador * i //multiplicamos todos los números enteros positivos que hay entre este número y el 1
        }
        document.write("El factorial de "+ valor + " es "+contador) //Mostramos por pantalla
    }

    esPrimo(valor); //Lamamos a la función
    if(valor < 0){ //Miramos si el número es positivo ya que no se puede el factorial de un número negativo
        document.write("No se puede calcular el factorial de un número negativo.") //Mostramos por pantalla
    }else{
        factorial(valor);
    }
    

}else{
    alert("No has introducido un número valido") //Mostramos por pantalla
}