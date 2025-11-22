// Ejercicio 15. Escribe una función (filtrarPares) que reciba un array de números y devuelva solo los números pares
// Valores de prueba: [1,2,3,4,5,6]
// Salida: [2,4,6]

const prueba = [1,2,3,4,5,6];

function filtrarPares(numeros) {
    numeros = numeros.filter(n => n % 2 == 0);
    console.log(numeros)
}

filtrarPares(prueba)