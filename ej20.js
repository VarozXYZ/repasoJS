// Ejercicio 20. Crea una función (arrayUnicoOrdenado) que reciba un array de números, elimine duplicados, los ordene descendente y devuelva un JSON
// Valores de prueba: [4, 2, 7, 4, 9, 2]
// Salida: {"resultado":[9,7,4,2]}

const prueba = [4, 2, 7, 4, 9, 2];

const arrayUnicoOrdenado = (array) => {
    array = array.filter((n, index) => {
        return array.indexOf(n) === index;
    })
    array.sort((a, b) => b - a);
    console.log(JSON.stringify({resultado: array}));
}

arrayUnicoOrdenado(prueba)