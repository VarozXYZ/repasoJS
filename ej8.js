// Ejercicio 8. Crea una función (dividirArray) que divida los elementos de un array entre un divisor y capture divisiones por cero
// Valores de prueba: [10, 20, 30], divisor = 0
// Salida: Error: División por cero

const prueba = [10, 20, 30];
const divisor = 0;

function dividirArray(numeros) {
    if (divisor === 0) {
        console.log("Error: División por cero"); 
        return;
    }
    return numeros.map(n => n / divisor);
}

dividirArray(prueba)