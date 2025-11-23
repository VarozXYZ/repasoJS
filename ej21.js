// Ejercicio 21. Escribe una función (contarPalabras) que reciba un array de strings y devuelva un objeto con la cantidad de ocurrencias de cada palabra
// Valores de prueba: ["JavaScript","es","JavaScript","divertido"]
// Salida: {JavaScript:2, es:1, divertido:1}

const prueba = ["JavaScript","es","JavaScript","divertido"];

const contarPalabras = (array) => {
    let contador = {};
    array.forEach(palabra => {
        contador[palabra] = (contador[palabra] || 0) + 1;
    });
    return contador;
}

console.log(contarPalabras(prueba));