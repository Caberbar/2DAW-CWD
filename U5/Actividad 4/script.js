document.addEventListener('keydown', function (event) {
    const adios = document.getElementById('adios');
    const hola = document.getElementById('hola');

    //Definimos la cantidad de píxeles para mover
    const step = 5;  // Mover 5 píxeles

    //Obtenemos los estilos del elemento 'adios'
    const adiosStyle = window.getComputedStyle(adios);

    //Obtenemos las posiciones top y left actuales del elemento 'adios'
    let top = parseInt(adiosStyle.getPropertyValue('top'));
    let left = parseInt(adiosStyle.getPropertyValue('left'));


    // Determina si 'adios' puede moverse en cada dirección
    const moverArriba = top > 0;
    const moverAbajo = top < hola.offsetHeight - adios.offsetHeight;
    const moverIzquierda = left > 0;
    const moverDerecha = left < hola.offsetWidth - adios.offsetWidth;

    //Evaluamos la tecla presionada y realiza la acción correspondiente
    switch (event.key) {
        case 'ArrowUp':
            // Mueve hacia arriba si es posible
            if (moverArriba) {
                adios.style.top = `${top - step}px`;
            }
            break;
        case 'ArrowDown':
            // Mueve hacia abajo si es posible
            if (moverAbajo) {
                adios.style.top = `${top + step}px`;
            }
            break;
        case 'ArrowLeft':
            // Mueve hacia la izquierda si es posible
            if (moverIzquierda) { adios.style.left = `${left - step}px`; }
            break;
        case 'ArrowRight':
            // Mueve hacia la derecha si es posible
            if (moverDerecha) { adios.style.left = `${left + step}px`; }
            break;
    }
});
