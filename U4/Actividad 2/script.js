// Obtener referencia al elemento HTML con id 'hola'
const hola = document.getElementById('hola');

// Obtener referencia al elemento HTML con id 'adios'
const adios = document.getElementById('adios');

//Activar el evento al pulsar x teclas
document.addEventListener('keypress', (e) => {
    //Si pulsamos la tecla r debe cambiar el color a rojo del contenedor
    if(e.key == 'r' || e.key == 'R'){
        hola.style.backgroundColor  = "red";
    }
    //Si pulsamos la tecla v debe cambiar el color a verde del contenedor
    if(e.key == 'v' || e.key == 'V'){
        hola.style.backgroundColor  = "green";
    }

    //Si pulsamos la tecla a debe cambiar el color a azul del contenedor
    if(e.key == 'a' || e.key == 'A'){
        hola.style.backgroundColor  = "blue";
    }

    //Si pulsamos la tecla + debe cambiar el tamaño del contenedor sumando +10px al ancho y alto
    if(e.key == '+'){

        let ancho = (hola.clientWidth + 10) + "px";
        let alto = (hola.clientHeight + 10) + "px";

        hola.style.width  = ancho;
        hola.style.height  = alto;
    }

    //Si pulsamos la tecla - debe cambiar el tamaño del contenedor restando -10px al ancho y alto
    if(e.key == '-'){
        let ancho = (hola.clientWidth - 10) + "px";
        let alto = (hola.clientHeight - 10) + "px";

        hola.style.width  = ancho;
        hola.style.height  = alto;
    }

})
