// Obtener referencia al elemento HTML con id 'enlace1'
const ocultar1 = document.getElementById('enlace_1');
// Obtener referencia al elemento HTML con id 'enlace2'
const ocultar2 = document.getElementById('enlace_2');
// Obtener referencia al elemento HTML con id 'enlace3'
const ocultar3 = document.getElementById('enlace_3');

//Este evento oculta y desoculta el parrafo
ocultar1.addEventListener('click', function () {
    //Si en el HTML el boton tiene de contenido 'Ocultar contenido', ocultara el contenido
    if (ocultar1.textContent.trim() == 'Ocultar contenido') {
        ocultar(document.getElementById('contenido_1'), ocultar1)
    } else {
        //Si no tiene 'Ocultar contenido' lo desocultara
        Mostrar(document.getElementById('contenido_1'), ocultar1)
    }
});

//Este evento oculta y desoculta el parrafo
ocultar2.addEventListener('click', function () {
    //Si en el HTML el boton tiene de contenido 'Ocultar contenido', ocultara el contenido
    if (ocultar2.textContent.trim() == 'Ocultar contenido') {
        ocultar(document.getElementById('contenido_2'), ocultar2);
    } else {
        //Si no tiene 'Ocultar contenido' lo desocultara
        Mostrar(document.getElementById('contenido_2'), ocultar2);
    }
});

//Este evento oculta y desoculta el parrafo
ocultar3.addEventListener('click', function () {
    //Si en el HTML el boton tiene de contenido 'Ocultar contenido', ocultara el contenido
    if (ocultar3.textContent.trim() == 'Ocultar contenido') {
        ocultar(document.getElementById('contenido_3'), ocultar3);
    } else {
        //Si no tiene 'Ocultar contenido' lo desocultara
        Mostrar(document.getElementById('contenido_3'), ocultar3);
    }
});


//Esta función oculta el contenido y cambia el contenido del boton para poder mostrarlo
function ocultar(contenido, boton) {
    contenido.style.display = 'none';
    boton.innerHTML = 'Mostrar contenido';
}

//Esta función muestra el contenido y cambia el contenido del boton para poder ocultar
function Mostrar(contenido, boton) {
    contenido.style.display = 'block';
    boton.innerHTML = 'Ocultar contenido';
}