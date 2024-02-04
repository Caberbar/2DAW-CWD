function impares() {
    //Extraemos las filas que el usuario a introducido
    let filas = parseInt(document.getElementById("filas").value);

    //Extraemos las columnas que el usuario a introducido
    let columnas = parseInt(document.getElementById("columnas").value);

    //Creamos un elemento donde introduciremos los resultados
    let p = document.createElement("p");

    //Creamos un array
    const matriz = [];

    //Ahora recorreremos el array añadidiendo numeros
    for (let i = 0; i < filas; i++) { //Recorremos las filas
        matriz[i] = []; //añadimos las columnas
        for (let j = 0; j < columnas; j++) { //Recorremos las columnas
            matriz[i][j] = (i+1) + (j+1); //Añadimos los números a los indices de la matriz
        }
    }

    //Recorremos el array
    for (let i = 0; i <= matriz.length; i++) { //Recorremos las filas
        for (let j = 0; j <= matriz[0].length; j++) { //Recorremos las columnas
            if (i % 2 === 1 && j % 2 === 1) {
                p.innerHTML += "(" + i + "," + j + ")" //Introducimos los números dandole formato al elemento
            }
        }
    }

    document.body.appendChild(p); //Añadimos el elemento al body del doumento
}


document.getElementById("boton").addEventListener("click", impares); //Llamamos a la función pulsando al botón