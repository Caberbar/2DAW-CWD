class Factura {
    constructor(nombre_empresa, CIF, nombre_cliente) {
        // Comprobaciones de validez de los parámetros de entrada
        if (nombre_empresa !== "") { //Comprobamos que el nombre de la empresa no este vacio
            this._nombre_empresa = nombre_empresa;
        } else {
            throw new Error("Nombre de empresa no válido");
        }
        if (CIF !== "") { //Comprobamos que el cif no este vacio
            this._CIF = CIF;
        } else {
            throw new Error("CIF no válido");
        }
        if (nombre_cliente !== "") { //Comprobamos que el 
            this._nombre_cliente = nombre_cliente;
        } else {
            throw new Error("Nombre de cliente no válido");
        }

        this._iva = 0.21; //Ponemos un iva fijo

        this._lista = new Array(); //Creamos un array vacio

    }

    get nombre_empresa() { //Devolvemos el nombre de la empresa
        return this._nombre_empresa;
    }

    set nombre_empresa(nuevonombre_empresa) { //Establecemos un nombre de la empresa validado
        if (nuevonombre_empresa != "") {
            throw "No se ha podido establecer el nuevo nombre de la empresa"
        } else {
            this._nombre_empresa = nuevonombre_empresa;
        }
    }

    get CIF() { //Devolvemos el cif
        return this._CIF;
    }

    set CIF(nuevoCIF) { //Establecemos un cif validado
        if (nuevoCIF != "") {
            throw "No se ha podido establecer el nuevo CIF"
        } else {
            this._CIF = nuevoCIF;
        }
    }

    get nombre_cliente() { //Devolvemos el nombre del cliente
        return this._nombre_cliente;
    }

    set nombre_cliente(nuevonombre_cliente) { //Establecemos un nombre del cliente validado
        if (nuevonombre_cliente != "") {
            throw "No se ha podido establecer el nuevo nombre del cliente"
        } else {
            this._nombre_cliente = nuevonombre_cliente;
        }
    }

    get iva() { //Devolvemos el iva
        return this._iva;
    }

    get lista() { //Devolvemos la lista de productos
        return this._lista
    }

    añadirLinea(producto) { //Metodo para añadir un prodcuto a la lista
        this._lista.push(producto);
    }

    importeTotal() { //Método para calcular el importe total con un iva del 81%
        let suma = 0;
        for (const producto of this._lista) {
            suma += producto["precio"]; //Cogemos la columna de precio de los prodcutos
        }
        return suma + (suma * this._iva);
    }

    mostrarLista() { //Método para mostrar la lista de productos por consola iterando en el array
        let resultado = "";
        for (let i = 0; i < this._lista.length; i++) {
            console.log("entro");
            let producto = this._lista[i]["nombre_producto"];
            let precio = this._lista[i]["precio"];
            let cantidad = this._lista[i]["cantidad"];

            resultado += "\n\nProducto: " + producto + "\nPrecio: " + precio + "\nCantidad: " + cantidad + "\n\n";
        }
        return resultado;
    }

    toString() { //Devuelve la factura
        let devolver = "Nombre de la empresa: " + this._nombre_empresa + " \nCIF: " + this._CIF + "\nNombre del cliente: " + this._nombre_cliente + "\nProdcutos: " + this.mostrarLista() + "\nImporte total: " + this.importeTotal();
        return devolver;
    }
}



let factura1 = new Factura("Carlos", "7854698", "Fernando"); //Creamos una factura


factura1.añadirLinea({ "nombre_producto": "Manzana", "precio": 8, "cantidad": 3 }); //Añadimos productos a la factura a traves del metodo
factura1.añadirLinea({ "nombre_producto": "Pera", "precio": 2, "cantidad": 1 });
factura1.añadirLinea({ "nombre_producto": "Platano", "precio": 6, "cantidad": 6 });

console.log(factura1.toString());  //Mostramos la factura por pantalla
console.log(factura1.mostrarLista()); //Mostramos solo los productos por pantalla para probar el metodo
console.log("Importe Total: " + factura1.importeTotal()); //Mostramos solo el importe por pantalla para mostrar el método


/**/

let nombreEmpresa = document.getElementById("nEmpresa").value; //Cogemos el nombre de la empresa
let cif = document.getElementById("cif").value; //Cogemos el cif
let nombreCliente = document.getElementById("nCliente").value; //Cofemos el nombre del cliente

let factura2 = new Factura(nombreEmpresa, cif, nombreCliente); //Creamos una factura

let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

let productosContainer = document.getElementById("productos"); //Div que irá creando formularios para añadir productos

let contadorProductos = 1; //Iniciamos el contador 

boton1.addEventListener('click', () => {
    let errores = "";
    let correcto = false;
    if (nombreEmpresa !== "") { //Comprobamos que el nombre de la empresa no este vacio
        if (cif !== "") { //Comprobamos que el cif no este vacio
            if (nombreCliente !== "") { //Comprobamos que el nombre del cliente no este vacio 
                correcto = true;
            } else {
                errores += "\nNombre de cliente incorrecto";
            }
        } else {
            errores += "\nCif incorrecto";
        }
    } else {
        errores += "\nNombre de empresa incorrecto";
    }

    if (correcto == true) {
        boton2.style.display = "block";
        boton2.addEventListener("click", () => {
            let label = document.createElement("label");
            label.innerHTML = "Producto " + contadorProductos + ": ";

            //Creamos los elementos
            let inputNombre = document.createElement("input");
            inputNombre.type = "text";
            inputNombre.id = "NombreProducto";
            inputNombre.placeholder = "Nombre del producto";

            let inputPrecio = document.createElement("input");
            inputPrecio.type = "number";
            inputPrecio.id = "Precio";  
            inputPrecio.placeholder = "Precio";

            let inputCantidad = document.createElement("input");
            inputCantidad.type = "number";
            inputCantidad.id = "Cantidad";  
            inputCantidad.placeholder = "Cantidad";

            // Agrega los elementos al contenedor
            productosContainer.appendChild(label);
            productosContainer.appendChild(inputNombre);
            productosContainer.appendChild(inputPrecio);
            productosContainer.appendChild(inputCantidad);

            // Agrega un salto de línea para separar los productos
            productosContainer.appendChild(document.createElement("br"));

            // Incrementa el contador de productos
            contadorProductos++;


            boton3.addEventListener("click", () => {
                let nombre = document.getElementById("NombreProducto").value; //cogemos los valores
                let precio = parseFloat(document.getElementById("Precio").value);
                let cantidad = parseInt(document.getElementById("Cantidad").value);

                factura2.añadirLinea({ "nombre_producto": nombre, "precio": precio, "cantidad": cantidad }); //Añadimos el producto  a la lista

                alert(factura2.importeTotal()); //No he conseguido que esto funcione.
            });

            
        });
    } else {
        alert(errores); //En caso de estar vacio algún campo mostrarmos los errores
    }
});

