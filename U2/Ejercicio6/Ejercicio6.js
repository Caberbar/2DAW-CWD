// Obtener la fecha actual
const fechaActual = new Date();

// Definir la fecha del Día de Reyes (6 de enero)
const diaReyes = new Date(fechaActual.getFullYear(), 0, 6);

// Si la fecha actual ya pasó el Día de Reyes, sumar un año
if (fechaActual > diaReyes) {
  diaReyes.setFullYear(fechaActual.getFullYear() + 1);
}

// Calcular la diferencia en milisegundos entre las dos fechas
const diferencia = diaReyes - fechaActual;

// Convertir la diferencia en milisegundos a días
const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

// Mostrar el resultado en la página
document.getElementById('dias').textContent = `Quedan ${dias} días para el Día de Reyes.`;

