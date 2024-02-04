document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe por defecto

    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const verificacion = parseInt(document.getElementById('Verificacion').value);
    const condicionesCheckbox = document.getElementById('condiciones');

    let errores = '';

    // Validaciones
    if (nombre === '') { //Validamos que el nombre no este vacio
        errores += 'El nombre no puede estar vacío.\n';
    }

    if (isNaN(edad) || edad < 18) { //Validamos que la edad no este vacia sea mayor de 18 años
        errores += 'La edad debe ser un número igual o mayor a 18.\n';
    }

    if (genero === '') { //Validamos que el genero no este vacio
        errores += 'Selecciona un género.\n';
    }

    let validarTelefono = /^(\+\d{2}|\d{3})?(\d{9})$/; //Validamos el telefono
    if (!validarTelefono.test(telefono)) {
        errores += 'El teléfono no tiene el formato correcto.\n';
    }

    let validarEmail = /^[a-zA-Z0-9._-]+@+servidor\.es$/; //Validamos el email
    if (!validarEmail.test(email)) {
        errores += 'El correo no tiene el formato correcto.\n';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_]{6,15}$/.test(password)) { //Validamos la contraseña con un patrón
        errores += 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y estar entre 6 y 15 caracteres.\n';
    }

    if (password !== password2) { //Comprobamos que la contraseña sea igual que la de repetición
        errores += 'Las contraseñas no coinciden.\n';
    }

    if (verificacion !== 8) { //Comprobamos que introdujo bien la solución
        errores += 'La respuesta de la verificación matemática es incorrecta.\n';
    }

    if (!condicionesCheckbox.checked) { //Comprobamos que pulso las condiciones
        errores += 'Debes aceptar las condiciones.\n';
    }

    // Mostrar mensajes de error en un área específica en lugar de alertas
    const erroresDiv = document.getElementById('errores');
    if (errores !== '') {
        erroresDiv.textContent = errores;
    } else {
        erroresDiv.textContent = ''; // Limpiar mensajes de error anteriores
        alert('Formulario enviado con éxito.');
    }
});

document.getElementById('borrar').addEventListener('click', function () {
    // Desactiva temporálmente la validación 'required'
    const inputs = document.querySelectorAll('#formulario [required]');
    inputs.forEach(input => input.removeAttribute('required'));

    // Borrar el formulario
    document.getElementById('formulario').reset();

    // Restablece la validación 'required'
    inputs.forEach(input => input.setAttribute('required', 'true'));
});

document.getElementById('condiciones').addEventListener('change', function () {
    const condicionesCheckbox = document.getElementById('condiciones');
    const botonSubmit = document.getElementById('boton');

    // Habilitar o deshabilitar el botón según el estado de la casilla de verificación
    botonSubmit.disabled = !condicionesCheckbox.checked;
});
