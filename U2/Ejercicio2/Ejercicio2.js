function calcularFechas() {
    // Obtener las fechas ingresadas por el usuario
    let fecha1 = document.getElementById('fecha1').value;
    let fecha2 = document.getElementById('fecha2').value;

    // Verificar si se han ingresado ambas fechas
    if (!fecha1 || !fecha2) {
        alert("Debe ingresar ambas fechas.");
        return;
    }

    // Crear objetos de fecha a partir de las cadenas de fecha ingresadas
    fecha1Obj = new Date(fecha1);
    fecha2Obj = new Date(fecha2);

    // Verificar si las fechas ingresadas son válidas
    if (isNaN(fecha1Obj.getTime()) || isNaN(fecha2Obj.getTime())) {
        alert("Por favor, ingrese fechas válidas.");
        return;
    }

    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferenciaMili = fecha1Obj - fecha2Obj;

    // Calcular la diferencia en días
    const diferencia = Math.floor(diferenciaMili / (1000 * 60 * 60 * 24));

    // Crear un elemento <p> para mostrar la diferencia en días
    let solucion = document.createElement("p");
    solucion.innerText = diferencia;
    document.body.appendChild(solucion);
}

// Agregar un evento al botón "Calcular Diferencia"
document.getElementById('calcular').addEventListener('click', calcularFechas);
