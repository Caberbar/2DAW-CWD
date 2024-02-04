function crearCamposNumeros() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById('numero').value);
    
    // Validar si el número ingresado es válido
    if (validarNumero(numero)) {
        // Ocultar el div con el input
        let div = document.getElementById('inicio');
        div.style.display = "none";

        let contador;

        // Crear campos de entrada para los números
        for (let i = 1; i <= numero; i++) {
            // Crear un elemento <p> para mostrar el número
            let texto = document.createElement("p");
            texto.innerText = i;
            document.body.appendChild(texto);

            // Crear un campo de entrada para el número
            let campo = document.createElement("input");
            campo.type = 'number';
            campo.id = 'campo' + i;
            campo.min = 1;
            campo.required; // Esto no tiene efecto, debería ser campo.required = true;
            document.body.appendChild(campo);

            contador++;
        }

        // Agregar una línea horizontal
        let salto = document.createElement("hr");
        document.body.appendChild(salto);

        // Mostrar los botones para calcular la media
        let boton1 = document.getElementById('boton1');
        boton1.style.display = "block";

        let boton2 = document.getElementById('boton2');
        boton2.style.display = "block";

    } else {
        alert("Debes introducir un número válido");
    }
}

function calcularMedia() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById('numero').value);
    let campo = 0;
    let campoValor = 0;
    let valido = false;

    // Recorrer los campos de entrada y calcular la suma
    for (let i = 1; i <= numero; i++) {
        campoValor = parseInt(document.getElementById('campo' + i).value);

        if (isNaN(campoValor)) {
            valido = true;
        }

        campo += campoValor;
    }

    if (valido == false) {
        // Ocultar los botones después de calcular la media
        document.getElementById('boton1').style.display = 'none';
        document.getElementById('boton2').style.display = 'none';

        // Calcular la media
        let media = campo / numero;

        // Mostrar la media en un párrafo
        let texto = document.createElement("p");
        texto.innerText = 'La media es: ' + media;
        document.body.appendChild(texto);
    } else {
        alert("Revise los datos introducidos");
    }
}

function calcularMediaRedonda() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById('numero').value);
    let campo = 0;
    let campoValor = 0;
    let valido = false;

    // Recorrer los campos de entrada y calcular la suma
    for (let i = 1; i <= numero; i++) {
        campoValor = parseInt(document.getElementById('campo' + i).value);

        if (isNaN(campoValor)) {
            valido = true;
        }

        campo += campoValor;
    }

    if (valido == false) {
        // Ocultar los botones después de calcular la media redondeada
        document.getElementById('boton1').style.display = 'none';
        document.getElementById('boton2').style.display = 'none';

        // Calcular la media
        let media = campo / numero;

        // Redondear la media y mostrarla en un párrafo
        let texto = document.createElement("p");
        texto.innerText = 'La media es: ' + Math.round(media);
        document.body.appendChild(texto);
    } else {
        alert("Revise los datos introducidos");
    }
}

function validarNumero(numero) {
    // Validar si el número es un número válido según el patrón
    return /^[2-9]\d*$|^[1-9][0-9]+$/.test(numero);
}

// Agregar eventos a los botones
document.getElementById('abrir').addEventListener('click', crearCamposNumeros);
document.getElementById('boton1').addEventListener('click', calcularMedia);
document.getElementById('boton2').addEventListener('click', calcularMediaRedonda);
