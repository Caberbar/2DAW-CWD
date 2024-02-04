document.write("-------------------- ACTIVIDAD 2 --------------------")

/* ------------------------------ ESTUDIANTES ------------------------------*/
class estudiantes { //Creamos una clase estudiantes
    constructor(alumnos){ //Lo único que tendremos en el contructor sera un array llena de estudiante
        if( alumnos.length <= 0){ //Que almenos haya un estudiante
            throw new Error("Ha ocurrido un error");
        }else{
            this._arrayEstudiantes = alumnos;
        }
    }

    get arrayEstudiantes() {
        return this._arrayEstudiantes;
    }

    set arrayEstudiantes(arrayEstudiantes) { //Añadimos mas estudiantes
        if (arrayEstudiantes.length <= 0) { //Que almenos haya un estudiante en el array
            throw "No se ha podido completar la suma de modulo/s"
        } else {
            this._arrayEstudiantes.concat(arrayEstudiantes);
        }
    }

    ordernarXdni(){ //Método para ordenar por DNI
        if(this._arrayEstudiantes != 0){
            // Ordena el array de estudiantes por el valor del DNI de forma ascendente
            return this._arrayEstudiantes.sort((a, b) => a.dni.localeCompare(b.dni));
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    ordenarXfecha(){ //Método para ordenar por fecha de nacimiento
        if(this._arrayEstudiantes != 0){
            // Ordena el array de estudiantes por el valor del fecha de nacimiento de forma ascendente
            return this._arrayEstudiantes.sort((a, b) => {
                //Convierte las fechas de nacimiento al formato "aaaa-mm-dd" para compararlas
                const fechaA = a.fechNacimiento.split('/').reverse().join('-');
                const fechaB = b.fechNacimiento.split('/').reverse().join('-');
                return fechaA.localeCompare(fechaB);
            });
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    ordenarXnota(){ //Método para ordenar por nota media
        if(this._arrayEstudiantes != 0){
            // Ordena el array de estudiantes por la nota media del ciclo, de menor a mayor
            return this._arrayEstudiantes.sort((a, b) => a.calcularNotaMediaCiclo() - b.calcularNotaMediaCiclo());
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    busquedaSecuencial(dni){
        if(this._arrayEstudiantes != 0){ //Que almenos haya un estudiante
            for (let i = 0; i < this._arrayEstudiantes.length; i++) {
                if (this._arrayEstudiantes[i].dni === dni) { //Miramos si coincide el dni pasado por aprametro con alguna dentro del array
                    return this._arrayEstudiantes[i]; //Devolvemos el objeto estudiante
                }
            }
            return -1; //Si no se encunetra devolvemos -1
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    busquedaBinaria(dni){
        let encontrado = false; //Varibale pasa savebr si se encontro
        let indice = 0; //indice que iremos sumando

        while (!encontrado && indice < this._arrayEstudiantes.length) {
            // Compara el DNI del estudiante actual con el DNI buscado
            if (this._arrayEstudiantes[indice].dni === dni) {
                encontrado = true; // Se encontró el estudiante
                return this._arrayEstudiantes[indice]; //Devolvemos el objeto estudiante
            }else{
                indice ++; // Si no se encontró, pasa al siguiente estudiante
            }
        }
        return -1; //Si no se encunetra devolvemos -1
    }

    toString() {
        let resultado = "Estudiantes: \n";
        for (let i = 0; i < this._arrayEstudiantes.length; i++) {
            resultado += this._arrayEstudiantes[i].toString() + this._arrayEstudiantes[i].calcularNotaMediaCiclo() + "\n";
        }
        return resultado;
    }
}

/* ------------------------------ PRUEBAS ------------------------------*/

let modulos = ["Desarrollo cliente", "Desarrollo servidor", "HLC", "Diseño web", "Despliegues"];

let alumnos = [new estudiante("Carlos", "Bernal Barrionuevo", "H", "13/06/2002", "77969117Z", modulos, [6,5,2,3,3]),
new estudiante("Ana", "González", "M", "20/09/2000", "12345678A", modulos, [6,5,5,8,7]),
new estudiante("Sara", "Fernández", "M", "18/11/1999", "99999999Z", modulos, [5, 5, 5, 5, 5]), //DNI más grande
new estudiante("Alejandro", "García", "H", "22/08/2000", "00000001A", modulos, [5, 5, 5, 5, 5]), //DNI más pequeño
]

let escuela = new estudiantes(alumnos);

document.write("<br><br>"+escuela.toString());

document.write("<br><br>-------------------- ORDENAR POR DNI --------------------");

escuela.ordernarXdni();
document.write("<br><br>"+escuela.toString());

document.write("<br><br>-------------------- ORDENAR POR FECHA DE NACIMIENTO --------------------"); /* DE MAYOR A MENOR O DE MENOR A MAYOR*/

escuela.ordenarXfecha();
document.write("<br><br>"+escuela.toString());

document.write("<br><br>-------------------- ORDENAR POR NOTA MEDIA --------------------"); /* DE MAYOR A MENOR O DE MENOR A MAYOR*/

escuela.ordenarXnota();
document.write("<br><br>"+escuela.toString());

document.write("<br><br>-------------------- BUSQUEDA SECUENCIAL DNI --------------------");

if (escuela.busquedaSecuencial("77969117Z") != -1) {
    document.write("<br>Se encontró una coincidencia con dicho DNI: <br>" + escuela.busquedaSecuencial("77969117Z"));
}else{
    document.write("<br>No se encontró una coincidencia con dicho DNI");
}

document.write("<br><br>-------------------- BUSQUEDA BINARIA DNI --------------------");

if (escuela.busquedaBinaria("77969117Z") != -1) {
    document.write("<br>Se encontró una coincidencia con dicho DNI: <br>" + escuela.busquedaBinaria("77969117Z"));
}else{
    document.write("<br>No se encontró una coincidencia con dicho DNI");
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/