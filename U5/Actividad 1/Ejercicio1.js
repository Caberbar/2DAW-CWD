const textarea = document.getElementById("Textarea"); //Obtenemos el elemento texarea para trabajar con el
const contador = document.getElementById("contador"); //Obtenemos el elemento contador para tambien trabajar con el

//Input funciona en cuanto cambia el contenido del textarea, input solo funciona para los elementos input, select y textarea. 
//Es por eso que lo estoy utilizando aqui.

textarea.addEventListener("input", function () { //Iniciamos la función en cuanto el usuario pincha dentro del texarea para esribir

    const caracteres = textarea.value.length; //Extraemos los caracteres que tiene el textarea

    const caracteresRestantes = 100 - caracteres; //Calculamos los caracteres restantes restando

    // Actualiza el mensaje de conteo de caracteres
    contador.textContent = "Caracteres restantes: " + caracteresRestantes; //Actualizamos el mensaje 

    if (caracteres > 100) { //En cuanto los caracteres llegan a 100 el TextArea se deshabilita para que no pueda continuar
        textarea.disabled = true;
    }else{
        textarea.disabled = false;
    }
});

// Que se active el evento al pulsar un tecla
textarea.addEventListener("keydown", function (e) {
    const caracteres = textarea.value.length; //Obtenemos el elemento contador para tambien trabajar con el

//Decimos que solo quiero que analice las teclas Backspace y Delete
    if (caracteres >= 100 && !(e.key === "Backspace" || e.key === "Delete")) { //Comprobamos que no pase de caracteres
        textarea.value = textarea.value.slice(0, 100); //con Slice lo que hacemos es que el usuario no pueda escribir mas de 100 por que truncamos el valor
                                                       //de caracteres a 100, siel usuario intenta introducir algun caracter se coratará.
    }
});