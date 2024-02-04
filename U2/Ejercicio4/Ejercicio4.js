// Agregar un evento click al botón 'analizar'
document.getElementById('analizar').addEventListener('click', function() {
    // Obtener el texto introducido por el usuario
    const texto = document.getElementById('texto').value;

    // Número de líneas
    const lineas = texto.split('\n').length;
    document.getElementById('lineas').textContent = lineas;

    // Número de frases (se asume que están separadas por puntos)
    const frases = texto.split('.').length - 1;
    document.getElementById('frases').textContent = frases;

    // Los primeros 10 caracteres
    const primeros10 = texto.substring(0, 10);
    document.getElementById('primeros10').textContent = primeros10;

    // Texto en mayúsculas
    const mayusculas = texto.toUpperCase();
    document.getElementById('mayusculas').textContent = mayusculas;

    // Número de veces que aparece "alumno" o "alumna" (sin importar a mayúsculas/minúsculas)
    const apariciones = (texto.match(/alumno|alumna/gi) || []).length;
    document.getElementById('apariciones').textContent = apariciones;

    // Texto con "alumno" o "alumna" reemplazado por "Carlos" (sin importar a mayúsculas/minúsculas)
    const textoReemplazado = texto.replace(/alumno|alumna/gi, 'Carlos');
    document.getElementById('reemplazado').textContent = textoReemplazado;
});

