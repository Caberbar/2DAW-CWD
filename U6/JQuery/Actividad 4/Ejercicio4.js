$(document).ready(function () {

  // Seleccionar y almacenar el elemento con el ID "resultado"
  const resultado = $("#resultado");

  // Función para cargar imágenes por defecto al abrir la página
  function cargarImagenPorDefecto() {
    // Seleccionar las imágenes por ID
    let imagen1 = document.getElementById("fotoperro");
    let imagen2 = document.getElementById("fotogato");

    // Primera solicitud AJAX para obtener una imagen aleatoria de perro
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
      dataType: "json",
      success: function (data) {
        // Establecer la URL de la imagen obtenida como src de la primera imagen
        imagen1.setAttribute('src',data.message)
      },
      error: function (error) {
        // Mostramos un error si no consigue el dato
        resultado.html(`<p>Error al obtener datos: ${error}</p>`);
      }
    });

    // Segunda solicitud AJAX para obtener una imagen aleatoria de gato
    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search",
      
      method: "GET",
      
      dataType: "json",
      
      success: function (data) {
        // Establecer la URL de la imagen obtenida como src de la segunda imagen
        imagen2.setAttribute('src',data[0].url)
      },
      
      error: function (error) {
        resultado.html(`<p>Error al obtener datos: ${error}</p>`);
      }

    });
  }

  // Llamar a la función para cargar imágenes por defecto al abrir la página
  cargarImagenPorDefecto();

  // Agregar eventos de clic a los botones

  // Cuando se hace clic en el botón de perro, obtener la imagen aleatoria de perro
  let perro = document.getElementById("perro");
  let gato = document.getElementById("gato");


  perro.addEventListener('click', function (){
    let imagen = document.getElementById("fotoperro");

    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      
      method: "GET",
      
      dataType: "json",
      
      success: function (data) {
        // Establecer la URL de la imagen obtenida como src de la imagen de perro
        imagen.setAttribute('src',data.message)
      },
      
      error: function (error) {
        resultado.html(`<p>Error al obtener datos: ${error}</p>`);
      }

    });
  }) 

  // Cuando se hace clic en el botón de gato, obtener la imagen aleatoria de gato
  gato.addEventListener('click', function (){
    let imagen = document.getElementById("fotogato");

    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search",
      
      method: "GET",
      
      dataType: "json",
      
      success: function (data) {
        // Establecer la URL de la imagen obtenida como src de la imagen de gato
        imagen.setAttribute('src',data[0].url)
      },
      
      error: function (error) {
        resultado.html(`<p>Error al obtener datos: ${error}</p>`);
      }

    });
  })  
});
