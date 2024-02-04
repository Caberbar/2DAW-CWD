// Obtener referencia al elemento HTML con id 'hola'
const hola = document.getElementById('hola');

// Obtener referencia al elemento HTML con id 'adios'
const adios = document.getElementById('adios');


//Al hacer click comprobamos que el id del elemento corresponde con lo que queremos
hola.addEventListener('click', (e) => {
    // Verificar si el objetivo del evento es el elemento con id 'hola'
    if(e.target.id == 'hola'){
        // Mostramos el id del elemento clicado en la consola
        console.log(e.target.id);
        alert("HOLA");
    }
});

//Al hacer click comprobamos que el id del elemento corresponde con lo que queremos
adios.addEventListener('click', (e) => {
    // Verificar si el objetivo del evento es el elemento con id 'hola'
    if(e.target.id == 'adios'){
        // Mostramos el id del elemento clicado en la consola
        console.log(e.target.id);
        alert("ADIOS");
    }
});