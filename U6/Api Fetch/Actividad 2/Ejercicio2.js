document.addEventListener('DOMContentLoaded', function () {

    const listaCompletados = document.getElementById("listaCompletados");

    const boton = document.getElementById("mostrar");

    // Agregar un evento de clic al botón utilizando una función asíncrona
    boton.addEventListener('click', async function () {
        try {
            // Llamar a la función asíncrona para obtener y mostrar ToDos completados
            const completados = await mostrarToDosCompletados();


            // Limpiar la lista antes de agregar nuevos elementos, solo puede ver la lista una vez
            listaCompletados.innerHTML = "";

            // Agregar cada ToDo completado a la lista
            completados.forEach(tarea => {
                const listItem = document.createElement("li");
                listItem.textContent = tarea.title;
                listaCompletados.appendChild(listItem);
            });

        } catch (error) {

            // En caso de error, mostrar un mensaje de error
            resultado.innerHTML = `<p>Error al obtener datos: ${error}</p>`;
        }
    });

    // Función asíncrona para obtener ToDos completados mediante una solicitud fetch
    async function mostrarToDosCompletados() {

        // Realizar una solicitud fetch para obtener la lista completa de ToDos
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        // Convertir la respuesta a formato JSON
        const tareas = await response.json();

        // Filtrar solo los ToDos que están marcados como completados
        const completados = tareas.filter(tarea => tarea.completed);

        // Devolver la lista de ToDos completados
        return completados;
    }
});
