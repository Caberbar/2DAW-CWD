$(document).ready(function () {

  // Seleccionar todas las celdas (td) en la página
  let celda = $("td");

  // Agregar un evento de hover a todas las celdas
  $(celda).hover(
    function () {
      // Cuando el mouse entra en una celda, cambiar el color de fondo
      $(this).css("background-color", "#a2d2ff");
    },

    // function () {
    //   $(this).css("background-color", "");
    // }

    // Agregar un evento de clic al boton con el id "restaurar"
    $("#restaurar").click(function () {
      // Al hacer clic en el botón, restablecer el color de fondo de todas las celdas
      $(celda).css("background-color", "");
    })

  );
});
