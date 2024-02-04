function tirarDados() {
    const dado1 = document.getElementById('dado1');
    const dado2 = document.getElementById('dado2');
    const resultado = document.getElementById('resultado');

    let tiempoTranscurrido = 0;
    const tiempoTotal = 5; // 5 segundos

    const interval = setInterval(function () {
        // Generar números aleatorios para los dados
        const numero1 = Math.floor(Math.random() * 6) + 1;
        const numero2 = Math.floor(Math.random() * 6) + 1;

        // Actualizar los números en los dados
        dado1.textContent = numero1;
        dado2.textContent = numero2;

        tiempoTranscurrido += 0.1;

        if (tiempoTranscurrido >= tiempoTotal) {
            // Detener la animación después de 5 segundos
            clearInterval(interval);
            resultado.textContent = `Número obtenido: ${numero1 + numero2}`;
        }
    }, 100); // Actualizar cada 100 milisegundos
}

