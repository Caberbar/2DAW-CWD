$(document).ready(function () {
  
  // Agregar un evento de clic al boton con el ID "mostrar"
  $("#mostrar").click(function () {
    // Obtener la cantidad de elementos seleccionados dentro del DIV "Lista"
    var seleccionados = $("#Lista input:checked").length;

    // Crear un mensaje de información
    // var mensaje = "Elementos seleccionados: ";
    // seleccionados.each(function () {
    //   mensaje += $(this).val() + " ";
    // });

    // Mostrar el número de elementos seleccionados en el elemento "cantidad"
    $("#cantidad").text("Has seleccionado: " + seleccionados);
  });
});

