document.addEventListener("DOMContentLoaded", () => {

    var boton = document.createElement("button"); //Creamos el elemento botón
    var salto = document.createElement("br"); //Creamos un salto de linea para que se baje el botón

    boton.textContent = "Modifica página"; //Le añadimos el mensaje al botón
    document.body.appendChild(salto); //Añadimos el salto al final del body
    document.body.appendChild(boton); //Añadimos el boton al final del body

    boton.addEventListener("click", () => { //Creamos un evento que al hacer click al botón hagamos todo lo que nos piden
        let contenido_2 = document.getElementById("contenido_2"); //Cogemos el segundo párrafo

        var parrafo = document.createElement("p"); //Creamos un nuevo elemento parrafo

        parrafo.setAttribute("title","Título del nuevo párrafo"); //Le añadimos el atributo tittle

        var parrafo1 = document.createTextNode("Este es la primera parte de mi nuevo párrafo"); //Creamos un texto
        var salto = document.createElement("br"); //Creamos un salto de linea
        var parrafo2 = document.createTextNode("Este es la segundo parte de mi nuevo párrafo"); //Creamos un texto

        parrafo.appendChild(parrafo1); //Añadimos el texto al parrafo
        parrafo.appendChild(salto); //Añadimos el salto de linea
        parrafo.appendChild(parrafo2); //Añadimos el texto al parrafo

        contenido_2.appendChild(parrafo); //Añadimos el parrafo al elemento principal que el "contenido_2"

        var b = document.createElement("b"); //Creamos un nuevo elemento b para hacer el texto en negrita

        var negrita = document.createTextNode("Este el texto en negrita."); //Creamos un texto
        b.appendChild(negrita); //Añadimos el texto al atributo negrita

        contenido_2.appendChild(b); //Añadimos la negrita al elemento principal que el "contenido_2"

        let contenido_3 = document.getElementById("contenido_3"); // Cogemos el elemento contenido_3 para trabajar con el.
        contenido_3.innerHTML = "Este es el nuevo contenido del párrafo 3"; //Sustituimos el texto que tenia por uno nuevo

        var contenido_1 = document.getElementById("contenido_1"); //Cogemos el elemento contenido_1 para poder eliminarlo
        contenido_1.parentElement.removeChild(contenido_1); //Nos dirigemos al padre de contenido_1 y eliminamos el hijo llamado "contenido_1"
    })
})