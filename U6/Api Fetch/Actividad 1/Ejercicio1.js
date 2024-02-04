document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar y almacenar el elemento con el ID "resultado"
    const resultado = document.getElementById("resultado");
  
    // Función para cargar imágenes por defecto al abrir la página
    function cargarImagenPorDefecto() {
      // Seleccionar las imágenes por ID
      let imagen1 = document.getElementById("fotoperro");
      let imagen2 = document.getElementById("fotogato");
  
      // Primera solicitud FETCH para obtener una imagen aleatoria de perro
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          // Establecer la URL de la imagen obtenida como src de la primera imagen
          imagen1.setAttribute('src', data.message);
        })
        .catch(error => {
          // Mostrar un error si no se puede obtener el dato
          resultado.innerHTML = `<p>Error al obtener datos: ${error}</p>`;
        });
  
      // Segunda solicitud FETCH para obtener una imagen aleatoria de gato
      fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
          // Establecer la URL de la imagen obtenida como src de la segunda imagen
          imagen2.setAttribute('src', data[0].url);
        })
        .catch(error => {
          resultado.innerHTML = `<p>Error al obtener datos: ${error}</p>`;
        });
    }
  
    // Llamar a la función para cargar imágenes por defecto al abrir la página
    cargarImagenPorDefecto();
  
    // Agregar eventos de clic a los botones
  
    // Cuando se hace clic en el botón de perro, obtener la imagen aleatoria de perro
    let perro = document.getElementById("perro");
    let gato = document.getElementById("gato");
  
    perro.addEventListener('click', function () {
      let imagen = document.getElementById("fotoperro");
  
      // Solicitud FETCH para obtener una imagen aleatoria de perro
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          // Establecer la URL de la imagen obtenida como src de la imagen de perro
          imagen.setAttribute('src', data.message);
        })
        .catch(error => {
          resultado.innerHTML = `<p>Error al obtener datos: ${error}</p>`;
        });
    });
  
    // Cuando se hace clic en el botón de gato, obtener la imagen aleatoria de gato
    gato.addEventListener('click', function () {
      let imagen = document.getElementById("fotogato");
  
      // Solicitud FETCH para obtener una imagen aleatoria de gato
      fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
          // Establecer la URL de la imagen obtenida como src de la imagen de gato
          imagen.setAttribute('src', data[0].url);
        })
        .catch(error => {
          resultado.innerHTML = `<p>Error al obtener datos: ${error}</p>`;
        });
    });
  });
  