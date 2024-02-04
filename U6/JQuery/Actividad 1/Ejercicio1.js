$(document).ready(function () {

  // A) Eliminar la lista completa
  $("#eliminarLista").click(function () {
    $("#miLista").empty();
  });

  // B) Restaurar lista
  $("#restaurarLista").click(function () {
    $("#miLista").html(`
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
      <li>Elemento 4</li>
    `);
  });

  // C) Añadir un elemento al final de la lista
  $("#agregarFinal").click(function () {
    $("#miLista").append("<li>Elemento Final</li>");
  });

  // D) Añadir un elemento al principio de la lista
  $("#agregarInicio").click(function () {
    $("#miLista").prepend("<li>Elemento Inicio</li>");
  });

  // E) Eliminar el último elemento
  $("#eliminarUltimo").click(function () {
    $("#miLista li:last-child").remove();
  });

  // F) Eliminar el primer elemento
  $("#eliminarPrimero").click(function () {
    $("#miLista li:first-child").remove();
  });

  // G) Eliminar el primero y segundo elemento
  $("#eliminarPrimeroSegundo").click(function () {
    $("#miLista li:first-child, #miLista li:nth-child(2)").remove();
  });

  // H) Eliminar los dos últimos elementos
  $("#eliminarUltimosDos").click(function () {
    $("#miLista li:last-child, #miLista li:nth-last-child(2)").remove();
  });
});
