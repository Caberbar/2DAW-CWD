/* ------------------------------ PERSONA ------------------------------*/
class persona { //Creamos la clase persona que luego servirá para estudiante
    constructor(nombre, apellidos, genero, fechNacimiento, dni) {
        // Comprobaciones de validez de los parámetros de entrada
        if (nombre !== "") { //Que la cadena no este vacia
            this._nombre = nombre;
        } else {
            throw new Error("Nombre no valido");
        }
        if (apellidos !== "") { //Que la cadena no este vacia
            this._apellidos = apellidos;
        } else {
            throw new Error("Apellido no valido");
        }
        if (genero === "M" || genero === "H") { //Que el genero solo pueda ser H o M
            this._genero = genero;
        } else {
            throw new Error("Genero no valido");
        }
        if (fechNacimiento != "") { //Que la cadena no este vacia
            this._fechNacimiento = fechNacimiento;
        } else {
            throw new Error("Fecha de nacimiento no valida");
        }

        if (dni !== "") { //Que la cadena no este vacia
            this._dni = dni;
        } else {
            throw new Error("DNI no valido");
        }
    }

    // Getters para acceder a las propiedades privadas
    get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    get genero() {
        return this._genero;
    }

    get fechNacimiento() {
        return this._fechNacimiento;
    }

    get dni() {
        return this._dni;
    }

    // Setters para cambiar los valores de las propiedades
    set nombre(nuevoNombre) {
        if (nuevoNombre === "") { //Que la cadena no este vacia
            throw "No se ha podido aplicar el nombre."
        } else {
            this._nombre = nuevoNombre;
        }
    }

    set apellidos(nuevoApellidos) {
        if (nuevoApellidos === "") { //Que la cadena no este vacia
            throw "No se ha podido aplicar los apellidos."
        } else {
            this._apellidos = nuevoApellidos;
        }
    }

    set genero(nuevoGenero) {
        if (nuevoGenero != "M" || nuevoGenero != "H") { //Que el genero solo pueda ser H o M
            throw "No se ha podido aplicar el genero."
        } else {
            this._genero = nuevoGenero;
        }
    }

    set fechNacimiento(nuevaFechnacimiento) {
        if (nuevaFechnacimiento == "") { //Que la cadena no este vacia
            throw "No se ha podido aplicar la fecha de nacimiento."
        } else {
            this._fechNacimiento = nuevaFechnacimiento;
        }
    }

    set dni(nuevoDni) {
        if (nuevoDni === "") { //Que la cadena no este vacia
            throw "No se ha podido aplicar el DNI."
        } else {
            this._dni = nuevoDni;
        }
    }

    toString() {
        return "Nombre: " + this.nombre + "<br>Apellidos: " + this.apellidos + "<br>Genero: " + this.genero + "<br>Fecha-nac.: " + this.fechNacimiento + "<br>DNI: "+this._dni + "\n";
    }
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
