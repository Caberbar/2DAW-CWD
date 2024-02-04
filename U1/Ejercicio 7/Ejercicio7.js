/**
 * Función validarNumero
 * Validaremos que el numero pasado 
 * por parametro es realmente un número.
 * @param valor numero que queremos comprobar.
 * @returns En caso de ser número devolveremos true, sino, false.
 */
function validarNumero(valor) {
    return Number.isInteger(valor) && valor >= 0; //Le pedimos al usuario que meta un número y lo convertimos a entero ademas miramos si es mayor o igual que 0.
};

/**
 * Función validar Operación
 * Comprobaremos que el usuario a 
 * introducido un número dentro del rango.
 * @param valor número que comprobaremos.
 * @returns En caso de ser un número valido devolveremos true, sino, false.
 */
function validarOperacion(valor) { //Devolvemos true si el número es mayor que 0 y mayor o igual que 5
    return valor > 0 && valor< 5;
}

let n1; //Número 1
let n2; //Número 2
let operacion; //Operación escogida

/**
 * Pediremos al usuario un número entero, en caso de no serlo lo volveremos a pedir.
 */
do {
    n1 = parseInt(window.prompt('Escriba el primer número entero: ')); //Le pedimos al usuario que meta un número y lo convertimos a entero.
} while (!validarNumero(n1)); //Que cumpla la función

/**
 * Pediremos al usuario un número entero, en caso de no serlo lo volveremos a pedir.
 */
do {
    n2 = parseInt(window.prompt('Escriba el segundo número entero: ')); //Le pedimos al usuario que meta un número y lo convertimos a entero.
} while (!validarNumero(n2)); //Que cumpla la función

/**
 * Pediremos al usuario un número entero dentro del rango, en caso de no serlo lo volveremos a pedir.
 */
do {
    operacion = parseInt(window.prompt('Eliga que operación quiere hacer con ' + n1 + ' y ' + n2 + ' escribiendo el número.\n 1. Suma - 2. Resta - 3.Multiplicación - 4. División')); //Le pedimos al usuario que meta un número y lo convertimos a entero para legir operación.
} while (!validarOperacion(operacion)); //Que cumpla la función


/**
 * Mediante un switch realizaremos la operación escogida con los dos número escritos por el ususario.
 * Finalmente lo mostraremos por pantalla.
 */
switch (operacion) {
    case 1:
        document.write('La suma de ' + n1 + ' + ' + n2 + ' es ' + (n1 + n2)); //Mostramos por pantalla
        break;
    case 2:
        document.write('La resta de ' + n1 + ' - ' + n2 + ' es ' + (n1 - n2)); //Mostramos por pantalla
        break;
    case 3:
        document.write('La multiplicación de ' + n1 + ' x ' + n2 + ' es ' + (n1 * n2)); //Mostramos por pantalla
        break;
    case 4:
        document.write('La división de ' + n1 + ' / ' + n2 + ' es ' + (n1 / n2)); //Mostramos por pantalla
        break;
}
