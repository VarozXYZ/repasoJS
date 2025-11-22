// Ejercicio 4. Dado un número de 3 dígitos, escribe una función (invertirNumero) para invertir sus cifras
// Valores de prueba: 123
// Salida: 321

const prueba = 123;

function invertirNumero(n) {
    n = n.toString().split("").reverse();
    let reverse = "";
    n.forEach(n => {
        reverse = reverse.concat(n);
    });
    console.log(parseInt(reverse));
}

invertirNumero(prueba)