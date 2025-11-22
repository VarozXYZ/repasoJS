// Ejercicio 1. Crea una función (analizarArray) que reciba un array de números y devuelva un objeto con {media, max, min}
// Valores de prueba: [4, 8, 15, 16, 23, 42]
// Salida: { media: 18, max: 42, min: 4}

const valor = [4, 8, 15, 16, 23, 42];

function analizarArray(array) {
    let media = 0;
    let max = array[0];
    let min = array[0];
    array.forEach(n => {
        media += n;
        if (n > max) {
            max = n;
        }
        if (n < max) {
            min = n;
        };
    });
    media = media / array.length;
    console.log({ media, max, min });
}

analizarArray(valor);