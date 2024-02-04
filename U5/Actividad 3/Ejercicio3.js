document.addEventListener("DOMContentLoaded", () => {
    let tabla = document.getElementById("tabla");
    let añadir = document.getElementById("add");
    let editar = document.getElementById("edit");
    let borrar = document.getElementById("remove");

    let firstNameForm = document.getElementById("firstName"); //Cogemos los campos input del formulario
    let lastNameForm = document.getElementById("lastName");
    let ageForm = document.getElementById("age");

    let fila = null;

    tabla.addEventListener("click", (e) => {

        //Comprobamos que hizo click en un elemento TD
        if (e.target.tagName === 'TD') {

            fila = e.target.parentNode; //Situados en la celda echamos hacia atras y cogemos la fila entera
            //Esto nos devuelve el tr con todos sus hijos td, por lo tanto tendremos que bajar un nivel hasta llegar a sus hijos y coger el contenido


            //Rellenamos el formulario con los valores de la fila
            firstNameForm.value = fila.children[0].innerText;
            lastNameForm.value = fila.children[1].innerText;
            ageForm.value = fila.children[2].innerText;
        }
    });

    borrar.addEventListener("click", () => { //El evento se activará al puelsar el botón borrar
        if (fila != null) { //Comprobamos si ha seleccionado alguna fila, en caso de que si ...
            fila.parentNode.removeChild(fila); //Eliminamos la fila

            fila = null;//Reseteamos los valores de fila

            //Vaciamos los campos
            firstNameForm.value = ""; 
            lastNameForm.value = "";
            ageForm.value = "";

        } else if (fila = isNaN) {//En caso de estar vacio devolvemos un mensaje de aviso
            fila = null;
            alert("No hay fila seleccionada")
        }
    });

    editar.addEventListener("click", () => { //El evento se activará al puelsar el botón Editar
        if (fila != null) { //Comprobamos si ha seleccionado alguna fila, en caso de que si ...
            if (fila.children[0].innerText === firstNameForm.value
                && fila.children[1].innerText === lastNameForm.value
                && fila.children[2].innerText === ageForm.value) {

                alert("Los campos son iguales")

            } else {
                fila.children[0].innerText = firstNameForm.value;
                fila.children[1].innerText = lastNameForm.value;
                fila.children[2].innerText = ageForm.value;

                fila = null; //Reseteamos los valores de fila
                //Vaciamos los campos
                firstNameForm.value = "";
                lastNameForm.value = "";
                ageForm.value = "";
            }
        } else if (fila = isNaN) { //En caso de estar vacio devolvemos un mensaje de aviso
            fila = null;
            alert("No hay fila seleccionada")
        }
    })


    añadir.addEventListener("click", () => {
        if (fila != null) { //Comprobamos si ha seleccionado alguna fila, en caso de que si ...
            let opcion = confirm("¿Desea vaciar los campospara añadir una nuevo?"); //En caso de estar lleno devolvemos un mensaje de elección
            if (opcion == true) { //Si dice que si quiere vaciar los campos reseteamos los valores de fila y vaciamos los campos.
                fila = null;
                firstNameForm.value = "";
                lastNameForm.value = "";
                ageForm.value = "";
            }
        } else {
            if (firstNameForm.value === "" || lastNameForm.value === "" || ageForm.value === "") { //Comprobamos que los campos esten vacios
                alert("Debe rellenar todos los campos")
            } else {
                if (firstNameForm.value.length < 2 || lastNameForm.value.length < 2 || ageForm.value.length < 2) { //Comprobamos que al menos tengan dos caracteres cada campo
                    alert("Debe tener al menos 2 caracteres")
                } else {
                    let nuevaFila = tabla.insertRow(); //Si esta todo bien insertamos una nueva fila al final

                    nuevaFila.insertCell(0).innerText = firstNameForm.value; //En la celda uno introducimos el nombre
                    nuevaFila.insertCell(1).innerText = lastNameForm.value; //En la celda dos introducimos el apellido
                    nuevaFila.insertCell(2).innerText = ageForm.value; //En la celda tres introducimos la edad

                    fila = null; //Reseteamos los valores de fila
                    //Vaciamos los campos 
                    firstNameForm.value = "";
                    lastNameForm.value = "";
                    ageForm.value = "";
                }
            }
        }
    })
});