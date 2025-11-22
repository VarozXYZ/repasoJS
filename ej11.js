// Ejercicio 11. Escribe una función (calcularEdad) que reciba una fecha de nacimiento y devuelva la edad actual
// Valores de prueba: "2000-05-15"
// Salida: 25

const prueba = "2000-05-15";

function calcularEdad(fecha) {
    const date = new Date();
    let currYear = date.getFullYear();
    const currMonth = date.getMonth() + 1;
    const currDay = date.getDate();

    fecha = fecha.split("-");
    const year = fecha[0];
    const month = fecha[1];
    const day = fecha[2];

    if (currMonth < month || (currMonth == month && currDay < day)) {
        currYear--;
    }
    const edad = currYear - year;
    console.log(edad);
}

calcularEdad(prueba)