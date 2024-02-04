// Escucha el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();

    // Inicializa la variable de errores
    let errores = '';

    // Validaciones
    if (nombre === '') {
        errores += 'El nombre no puede estar vacío.\n'; //Que el nombre no este vacio
    }

    if (isNaN(edad) || edad < 18) {
        errores += 'La edad debe ser un número igual o mayor a 18.\n'; //Que la edad sea mayor de 18 años
    }

    if (genero === '') {
        errores += 'Selecciona un género.\n'; //Que el genero no este vacio
    }

    let validarTelefono = /^(\+\d{2}|\d{3})?(\d{9})$/; //Patrón del telefono

    if (!validarTelefono.test(telefono)) {
        errores += 'El teléfono no tiene el formato correcto.\n'; //Que el telefono corresponda con el patron
    }

    let validarEmail = /^[a-zA-Z0-9._-]+@+servidor\.es$/; //Patron del email
    
    if (!validarEmail.test(email)) {
        errores += 'El correo no tiene el formato correcto.\n'; //Que el email siga el patron
    }

    if (errores !== '') { //Si la variavle errores no esta vacia mostraremos los errores.
        alert(errores);
    } else {
        alert('Formulario enviado con éxito.');  //Si la variable esta vacia de errores pasamos el formulario
    }
});
