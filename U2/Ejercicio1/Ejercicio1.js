function crearVentana() {
    //Coger el mensaje
    let texto = document.getElementById('mensaje').value;

    // Abrir una nueva ventana con el archivo nuevaVentana.html
    const ventanaHija = window.open('', '', 'height=400,width=400');

    if (ventanaHija) {
        let p = ventanaHija.document.createElement("p");
        p.innerText = texto;
        ventanaHija.document.body.appendChild(p);

        let alto = ventanaHija.document.createElement("p");
        alto.innerText = ventanaHija.innerHeight;
        ventanaHija.document.body.appendChild(alto);

        let ancho = ventanaHija.document.createElement("p");
        ancho.innerText = ventanaHija.innerWidth;
        ventanaHija.document.body.appendChild(ancho);

        ventanaHija.window.onbeforeunload = ventanaCerrada;

    } else {
        // La ventana no se pudo abrir (puede estar bloqueada por bloqueadores de ventanas emergentes)
        alert('No se pudo abrir la ventana emergente. Verifica la configuración de tu navegador.');
    }
}

// Función para mostrar un mensaje cuando se cierra la ventana secundaria
function ventanaCerrada() {
    let p = document.createElement("p");
    p.innerText = "La ventana se ha cerrado";
    document.body.appendChild(p);
}

// Agregar un evento al botón "Abrir Ventana"
document.getElementById('abrir').addEventListener('click', crearVentana);


