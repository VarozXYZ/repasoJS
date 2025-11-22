// Ejercicio 5. Crea una función (longitudes) que reciba un array de strings y devuelva un array con la longitud de cada string
// Valores de prueba: ["Hola", "JavaScript", "GPT"]
// Salida: [4, 10, 3]

const prueba = ["Hola", "JavaScript", "GPT"];

function longitudes(array) {
    const longitudes = [];
    array.forEach(string => {
        string = string.split("");
        let count = 0;
        string.forEach(l => {
            count++;
        })
        longitudes.push(count);
    });
    console.log(longitudes);
}

longitudes(prueba)