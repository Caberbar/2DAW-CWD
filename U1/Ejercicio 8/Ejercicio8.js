/**
 * Función validarTalla
 * Esta función se enncargará de validar que la talla psada por parametro sea la correcta.
 * @param valor talla
 * @returns Devolvera true en caso de ser una talla correcta, en caso contrario, false.
 */
function validarTalla(valor) { //Función que devolvera true si el valor pasado por parametro coincide con las letras
    return (valor == 'XXL' || valor == 'XL' || valor == 'L' || valor == 'M' || valor == 'XS' || valor == 'S')
}

let texto = '';//Variable donde guardaremos la talla.

/**
 * Pediremos al usuario que nintroduzca una talla, en caso de no 
 * ser una talla correcta se la volveremos a pedir.
 */
do {
    texto = window.prompt('Escriba una talla Europea (XXL,XL,L,M,XS,S): '); //Le pedimos al usuario que escriba una palabra 
} while (!validarTalla(texto.toUpperCase())); //Si el usuario no introduce una palabra validada la volvemos a pedir

/**
 * Con este Switch y convirtiendo la talla a mayusucla, filtraremos la talla y 
 * mostraremos la información correspondiente por panatalla a esa talla.
 */
switch (texto.toUpperCase()) { //Convertimos la palabra a mayuscula, filtramos por switch.
    case 'XXL':
    case 'XL':
    case 'L':
        document.write(texto + ' es una talla grande.'); //Mostramos por pantalla
        break;
    case 'M':
        document.write(texto + ' es una talla mediana.'); //Mostramos por pantalla
        break;
    case 'XS':
    case 'S':
        document.write(texto + ' es una talla pequeña.'); //Mostramos por pantalla
        break;
}