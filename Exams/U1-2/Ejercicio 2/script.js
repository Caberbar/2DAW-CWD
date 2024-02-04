function calendario() {
    let mes = parseInt(document.getElementById("mes").value); //Extraemos el mes introducido por el usuario
    let anno = parseInt(document.getElementById("anno").value); //Extraemos el año introducido por el usuario
    mes = mes - 1; //Restamos un mes ya que java empieza a contar desde 0

    let p = document.createElement("p"); //Creamos un elemento donde almacenaremos los dias

    if (mes < 0 || mes > 11) { //Miraremos que ha introducido un mes valido
        alert("Entrada no válida. Por favor, ingrese un mes válido (1-12)."); //De no ser así, mostraremos un alert
    }

    let fecha = new Date(anno, mes, 1); //Crearemos una nueva fecha
    let nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; //Almacenaremos los dias en un Array para luego recorerla

    p.innerHTML += nombreMeses[mes] + " de " + anno + "<br><br>"; //Añadimos la primera linea que nos pide el nombre del mes y el año introducido por el usuario

    //Recorremos el calendario
    while (fecha.getMonth() === mes) { //Mientras el mes de fecha sea igual al mes introducido por el usuario
        let dia = fecha.getDate(); //Extraemos el dia
        let nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; //Creamos un array con los dias del 0-6 ya que java empieza a contar desde 0
        let nombreDia = nombresDias[fecha.getDay()]; //Extraeremos el nombre del dia del array y lo almacenamos en una variable


        p.innerHTML += dia + "(" + nombreDia + ")<br><br>"; //Loa añadimos al elemento dandole el formato de mooddle
        fecha.setDate(fecha.getDate() + 1); //Sumamos un dia mas para que se vuelva a repetir el ciclo
    }

    document.body.appendChild(p); //Añadimos el elemento al body del documento
}

document.getElementById("boton").addEventListener("click", calendario); //Llamamos a la función pulsando al botón