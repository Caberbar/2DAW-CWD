document.write("-------------------- ACTIVIDAD 1 --------------------")
/* ------------------------------ PRUEBAS ------------------------------*/
document.write("<br><br>-------------------- PERSONA --------------------");
let persona1 = new persona("Carlos", "Bernal Barrionuevo", "H", "13/06/2022","77969117Z");
document.write("<br><br>"+persona1.toString());

let modulos = ["Desarrollo cliente", "Desarrollo servidor", "HLC", "Diseño web", "Despliegues"];
let notas = [6,5,7,8,3];


document.write("<br><br><br>-------------------- ESTUDIANTE --------------------");

let estudiante1 = new estudiante("Carlos", "Bernal Barrionuevo", "H", "13/06/2022","77969117Z",modulos, notas);
document.write("<br><br>"+estudiante1.toString());

document.write("<br><br><br>-------------------- EXTRAER NOTA --------------------");
document.write("<br><br>"+estudiante1.notaNombre("HLC"));

document.write("<br><br><br>-------------------- CAMBIO NOTA --------------------");
estudiante1.actualizarNota("HLC", 5);
document.write("<br><br>"+estudiante1.toString());


document.write("<br><br><br>-------------------- MEDIA NOTAS --------------------");
document.write("<br><br>"+estudiante1.calcularNotaMediaCiclo());
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/