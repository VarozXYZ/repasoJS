// Ejercicio 12. Crea una función (diaSemana) que reciba una fecha y devuelva el día de la semana correspondiente
// Valores de prueba: "2025-11-20"
// Salida: Jueves

const prueba = "2025-11-20";

function diaSemana(fecha) {
    const date = new Date(fecha)
    const day = date.getDay()

    switch (day) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;
        default: console.log("Fecha incorrecta");
    }
}

diaSemana(prueba)