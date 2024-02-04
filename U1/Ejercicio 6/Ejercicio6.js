/**
 * Le pedimos al usuario mediante una ventana emergente que 
 * introduzca una palabra.
 */
var valor = (window.prompt("Introduce luna palabra.", "")); //Le pedimos al usuario que meta una palabra.

/**
 * Función esPalindromo
 * Lo primero que haremos es pasar la palabra a minúscula.
 * Despues crearemos una variable "invertida" vacia para 
 * meter la palabra al reves.
 * Con un for recorreremos la palabra del reves y meteremos 
 * valor por valor cada letra de la palabra en la variable 
 * invertida, consiguiendo darle la vuelta a la palabra.
 * @param valor palabra escrita del usuario
 * @returns devuelve la palabra invertida
 */
function esPalindromo(valor){ //Esta función devuelve la palabra pasada por parametro invertida.

    let palabra = valor.toLowerCase(); //lo pasamos a minuscula.

    let invertida = '';

    for (i = valor.length; i >= 0; i--) { //Recoremmos al reves.
        invertida += palabra.charAt(i); //recorremos la palabra y cogemos caracter por caracter y lo guardamos en una variable.
    }

    return invertida; //Devolvemos la palabra invertida
}
/**
 * Si la palabra introducida es igual a la misma pero dada 
 * la vuelta mostrariamos que es palidromo, en caso contrario no.
 */
    if(valor == esPalindromo(valor)){ //Mira si la palabra original es igual que la devuleta por la función del reves.
        document.write(valor + " es palidromo"); //Mostramos por pantalla
    }else{
        document.write(valor + " no es palidromo"); //Mostramos por pantalla
    }
