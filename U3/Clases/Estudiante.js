/* ------------------------------ ESTUDIANTE ------------------------------*/
class estudiante extends persona { //Creamos la clase estudiante que se extiende la clase persona
    constructor(nombre, apellidos, genero, fechNacimiento,dni, modulos, notas) {
        // Llamada al constructor de la clase persona usando super
        super(nombre, apellidos, genero, fechNacimiento, dni);
        this._arrayModulos = modulos; //Array con la lista de modulos que cursa el estudiante
        this._arrayNotas = notas; //Aray de notas de cada modulo
    }

    get arrayModulos() {
        return this._arrayModulos;
    }

    set arrayModulos(nuevaArrayModulos) { //Añadir un array de módulos a estudiante
        if (arrayModulos.length === 0) { //Que almenos haya un módulo en la nueva array
            throw "No se ha podido completar la suma de modulo/s"
        } else {
            this._arrayModulos = nuevaArrayModulos;
        }
    }


    get arrayNotas() {
        return this._arrayNotas;
    }

    set arrayNotas(nuevaArraynotas) { //Añadir un array de notas a estudiante
        if (nuevaArraynotas.length === 0) { //Que almenos haya un módulo en la nueva array
            throw "No se ha podido aplicar la nueva lista de modulos."
        } else {
            this._arrayNotas = nuevaArraymodulos;
        }
    }

    notaNombre (nombre) { //Metodo para buscar nota por el nombre de un módulo.
        if (nombre != "") { //Que la cadena no este vacia
            let pos = this._arrayModulos.indexOf(nombre); //Con indexOf cogeremos el indice donde se encunetra ese módulo, en caso deno encontrar devulve -1
            if (pos == -1) {
                throw "No hay modulo con dicho nombre.";
            } else {
                let nota = this._arrayNotas[pos]; //Ahora cogemos con el indice extraido anteriormente la nota del array Notas
                return nota; //Devolvemos la nota
            }
        } else {
            throw new Error("El nombre del módulo no es valido");
        }
    }

    actualizarNota(nombre, nota) { //Actualizamos la nota del modulo,
        if (nombre != "") {
            let pos = this._arrayModulos.indexOf(nombre); //Con indexOf cogeremos el indice donde se encunetra ese módulo, en caso deno encontrar devulve -1
            if (pos == -1) {
                throw "No hay modulo con dicho nombre.";
            } else {
                this._arrayNotas[pos] = nota; //Ahora cogemos con el indice extraido anteriormente la nota y la cambiamos por la nueva nota
                return this._arrayNotas[pos]; //Devolvemos la nueva nota
            }
        } else {
            throw new Error("El nombre del módulo no es valido");
        }
    }

    calcularNotaMediaCiclo() { //Calcular la media de las notas
        if (this._arrayModulos.length === 0 || this._arrayNotas.length === 0) { //Que almenos haya un valor en las arrays de modulos y notas
            throw "No hay módulos o notas";
        }else if(this._arrayModulos.length !== this._arrayNotas.length){ //Que haya los mismo valores en el array de modulo y notas
            throw new Error("No hay el mismo numero de módulos que de notas");
        } else {
            let media = 0;
            let contador = 0;
                for (let j = 0; j < this._arrayNotas.length; j++) { //Iremos recorriendo el array de notas y lo sumaremos
                    media += this._arrayNotas[j];
                    contador ++;
                }
                return media / contador; //Dividimos la suma por el numero de notas.
            }
        }

    toString() {
        let devolver = super.toString();
        devolver = devolver + "<br>Modulos matriculados: " + this._arrayModulos + "<br>Notas finales: " + this._arrayNotas + "\n";
        return (devolver);
    }        
}           
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
