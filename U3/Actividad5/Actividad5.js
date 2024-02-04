document.write("-------------------- ACTIVIDAD 5 --------------------");

/* ------------------------------ CLASE MEDIA ------------------------------*/

class media { //Creamos la clase media que tendra un constructor con un solo parametro "Titulo" y añadiremos dos valores mas, un boolean orestado y un array de valoraciones vacia
    constructor(titulo) {
        if (titulo !== "") {
            this._titulo = titulo;
        } else {
            throw new Error("Titulo no valido");
        }

        this._prestado = false; //Por defecto se establecera en False
        this._valoraciones = []; //Creamos un array vacio;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        if (titulo !== "") { //Si el titulo esta vacío no cambiará.
            this._titulo = titulo;
        } else {
            throw new Error("Titulo no valido");
        }
    }

    get prestado() {
        return this._prestado;
    }

    get valoraciones() {
        return this._valoraciones;
    }

    getMediaValoraciones(){ //Este método calcula la media de las valoraciones
        if (this._valoraciones <= 0) {
            throw new Error("No hay suficientes valoraciones para calcular la media.");
        }else{
            let contador = 0;
            let suma = 0;
            for (let i = 0; i < this._valoraciones.length; i++) {
                suma += this._valoraciones[i];
                contador ++;
            }
            return (suma/contador).toFixed(1); //Acortamos el número de decimales ya que salian muchos.
        }
    }

    cambiarEstadoPrestado(){ //Este método cambia el estado de prestado
        if (this._prestado === false) { //Si la variable es false que cambie a true, sino a false
            this._prestado = true;
        }else{
            this._prestado = false;
        }
    }

    addValoracion(valoracion){ //añadiremos valoraciones al array vacia creada anteriormente
        this._valoraciones.push(valoracion); //Lo añadiremos al array haciendo .push con la nueva valoración
    }

    toString() {
        return "Titulo: " + this._titulo + ", ¿Está prestado? " + this._prestado + " , Valoraciones: " + this._valoraciones;
    }
}

/* ------------------------------ CLASE LIBROS ------------------------------*/

class libro extends media { //Creamos la clase libro que se extiende de la clase media.
    constructor(autor, titulo, paginas) {
        super(titulo);

        if (autor !== "") { //Comprobamos que l cadena no este vacia
            this._autor = autor;
        } else {
            throw new Error("Autor no valido");
        }

        if (paginas > 0) { //Que almenos haya una página
            this._paginas = paginas;
        } else {
            throw new Error("Paginas no validas");
        }
    }

    get autor() {
        return this._autor;
    }

    get paginas() {
        return this._paginas;
    }

    toString(){
        let total = super.toString();
        total = "Autor: " + this._autor + ", Nº de páginas: " + this._paginas + ", " + total;
        return total;
    }
}

/* ------------------------------ CLASE PELICULAS ------------------------------*/

class pelicula extends media { //Creamos la clase libro que se extiende de la clase media.
    constructor(director, titulo, duracion) {
        super(titulo);

        if (director !== "") { //Comprobamos que l cadena no este vacia
            this._director = director;
        } else {
            throw new Error("Director no valido");
        }

        if (duracion > 0) { //Que almenos haya 1 minuto de duración
            this._duracion = duracion;
        } else {
            throw new Error("Duración no valida");
        }
    }

    get director() {
        return this._director;
    }

    get duracion() {
        return this._duracion;
    }

    toString(){
        let total = super.toString();
        total = "Autor: " + this._director + ", Nº de páginas: " + this._duracion + " mnts, " + total;
        return total;
    }
}

/* ------------------------------ PRUEBAS ------------------------------*/
document.write("<br><br>-------------------- LIBROS --------------------");

let libro1 = new libro("Gabriel García Márquez","Cien años de soledad",432);
let libro2 = new libro("George Orwell","1984",328);
let libro3 = new libro("J.R.R. Tolkien", "El Señor de los Anillos: La Comunidad del Anillo", 490);

document.write("<br><br>Libro 1:"+libro1.toString());

libro1.addValoracion(5);
libro1.addValoracion(9);

document.write("<br><br>Añadir valoracion: "+libro1.toString());

libro1.cambiarEstadoPrestado();
document.write("<br><br>Cambio de estado: "+libro1.toString());

libro1.addValoracion(3);
document.write("<br><br>La media de las valoraciones es: " + libro1.getMediaValoraciones());


document.write("<br><br>-------------------- PELICULAS --------------------");

let pelicula1 = new pelicula("Francis Ford Coppola", "El padrino", 175);
let pelicula2 = new pelicula("James cameron", "Titanic", 195);
let pelicula3 = new pelicula("James cameron", "Avatar", 162);

document.write("<br><br>Pelicula 1:"+pelicula1.toString());
document.write("<br><br>Pelicula 1:"+pelicula2.toString());

pelicula1.addValoracion(1);
pelicula1.addValoracion(4);
document.write("<br><br>Añadir valoracion: "+pelicula1.toString());

pelicula1.cambiarEstadoPrestado();
document.write("<br><br>Cambio de estado: "+pelicula1.toString());

pelicula1.addValoracion(3);
document.write("<br><br>La media de las valoraciones es: " + pelicula1.getMediaValoraciones());