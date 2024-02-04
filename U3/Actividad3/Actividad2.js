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
        if(this._arrayEstudiantes.length != 0){
            // Ordena el array de estudiantes por el valor del DNI de forma ascendente
            return this._arrayEstudiantes.sort((a, b) => a.dni.localeCompare(b.dni));
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    ordenarXfecha(){ //Método para ordenar por fecha de nacimiento
        if(this._arrayEstudiantes.length != 0){
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
        if(this._arrayEstudiantes.length != 0){
            // Ordena el array de estudiantes por la nota media del ciclo, de menor a mayor
            return this._arrayEstudiantes.sort((a, b) => a.calcularNotaMediaCiclo() - b.calcularNotaMediaCiclo());
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    busquedaSecuencial(dni){
        if(this._arrayEstudiantes.length != 0){ //Que almenos haya un estudiante
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
new estudiante("Juan", "López", "H", "10/03/2003", "98765432B", modulos, [6,5,5,9,3]),
new estudiante("María", "Rodríguez", "M", "15/12/2001", "54321678C", modulos, [6,3,7,3,3]),
new estudiante("Luis", "Pérez", "H", "05/08/2004", "11223344D", modulos, [6,5,7,7,5]),
new estudiante("Sara", "Fernández", "M", "18/11/1999", "99999999Z", modulos, [5, 5, 5, 5, 5]), //DNI más grande
new estudiante("Javier", "Gómez", "H", "25/05/2002", "77776666F", modulos, [7, 7, 6, 6, 6]),
new estudiante("Lucía", "Martínez", "M", "30/04/2000", "99998888G", modulos, [8, 8, 8, 8, 8]),
new estudiante("Pedro", "Sánchez", "H", "17/09/1998", "66665555H", modulos, [4, 4, 4, 4, 4]),
new estudiante("Laura", "López", "M", "12/12/1997", "55554444I", modulos, [7, 6, 5, 6, 7]),
new estudiante("Miguel", "Rodríguez", "H", "28/03/2003", "44443333J", modulos, [6, 6, 7, 7, 6]),
new estudiante("Carmen", "Pérez", "M", "04/06/2001", "33332222K", modulos, [8, 7, 8, 7, 8]),
new estudiante("Alejandro", "García", "H", "22/08/2000", "00000001A", modulos, [5, 5, 5, 5, 5]), //DNI más pequeño
new estudiante("Isabel", "Fernández", "M", "09/10/1999", "11110000M", modulos, [7, 8, 8, 8, 7]),
new estudiante("Manuel", "Sánchez", "H", "14/01/1998", "00009999N", modulos, [6, 6, 7, 6, 6]),
new estudiante("María", "Gómez", "M", "03/07/2002", "12348765A", modulos, [7, 8, 8, 9, 9]),
new estudiante("Pablo", "Fernández", "H", "12/09/2001", "23455678B", modulos, [6, 6, 6, 7, 7]),
new estudiante("Lorena", "Hernández", "M", "29/05/2003", "34567890C", modulos, [5, 5, 5, 6, 6]),
new estudiante("Andrés", "Santos", "H", "15/12/2000", "45678901D", modulos, [8, 8, 8, 8, 8]),
new estudiante("Elena", "Rojas", "M", "08/02/2002", "56789012E", modulos, [9, 7, 9, 7, 9])
]

let escuela = new estudiantes(alumnos);
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/