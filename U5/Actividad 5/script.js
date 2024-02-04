var slideIndex = 0; //Iniciamos un contrador de diapositivas

mostrarDiapositivas();

function mostrarDiapositivas() {

    var diapositiva = document.getElementsByClassName('diapositivas'); //Cogemos todas las diapositivas y las almacenamos

    for (let i = 0; i < diapositiva.length; i++) { //Vamos pasando con un bucle uno por acada foto

        diapositiva[i].style.display = 'none'; //Vamos cambiando el estilo de la foto ocultandola

    }

    slideIndex++; //Incrementamos el contador por cada diapositiva

    if(slideIndex > diapositiva.length) { //Si el contador supera el numero de diapositivas se reinicia el contador para volver a empezar otra vez el bucle
        slideIndex = 1
    }

    diapositiva[slideIndex-1].style.display = 'block'; //Con tel contador cogemos el numero de la diapositiva que queremos mostrar

    setTimeout(mostrarDiapositivas,2000); //Lanzamos la función cada 2 segundos

}