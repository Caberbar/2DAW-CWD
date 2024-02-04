/* ------------------------------ ESTUDIANTES ------------------------------*/
class estudiantes {
    constructor(alumnos){
        if( alumnos.length <= 0){
            throw new Error("Ha ocurrido un error");
        }else{
            this._arrayEstudiantes = alumnos;
        }
    }

    get arrayEstudiantes() {
        return this._arrayEstudiantes;
    }

    set arrayEstudiantes(arrayEstudiantes) {
        if (arrayEstudiantes.length <= 0) {
            throw "No se ha podido completar la suma de modulo/s"
        } else {
            this._arrayEstudiantes.concat(arrayEstudiantes);
        }
    }

    ordernarXdni(){
        if(this._arrayEstudiantes != 0){
            return this._arrayEstudiantes.sort((a, b) => a.dni.localeCompare(b.dni));
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    ordenarXfecha(){
        if(this._arrayEstudiantes != 0){
            return this._arrayEstudiantes.sort((a, b) => a.fechNacimiento.localeCompare(b.fechNacimiento));
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    ordenarXnota(){
        if(this._arrayEstudiantes != 0){
            return this._arrayEstudiantes.sort((a, b) => a.calcularNotaMediaCiclo() - b.calcularNotaMediaCiclo());
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    busquedaSecuencial(dni){
        if(this._arrayEstudiantes != 0){
            for (let i = 0; i < this._arrayEstudiantes.length; i++) {
                if (this._arrayEstudiantes[i].dni === dni) {
                    return this._arrayEstudiantes[i];
                }
            }
            return -1;
        }else{
            throw new Error("Ocurrio un error");
        }
    }

    busquedaBinaria(dni){
        let encontrado = false;
        let indice = 0;

        while (!encontrado && indice < this._arrayEstudiantes.length) {
            if (this._arrayEstudiantes[indice].dni === dni) {
                encontrado = true;
                return this._arrayEstudiantes[indice];
            }else{
                indice ++;
            }
        }
        return -1;
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