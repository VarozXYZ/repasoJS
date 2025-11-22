// Ejercicio 2. Escribe una función (contarVocales) que reciba una string y cuente las vocales.
// Valores de prueba: "JavaScript es divertido"
// Salida: 8

const prueba = "JavaScript es divertido";

function contarVocales(string) {
    let count = 0;
    string = string.split("");
    string.forEach(l => {
        if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
            count++;
        }
    });
    console.log(count);
}

contarVocales(prueba)