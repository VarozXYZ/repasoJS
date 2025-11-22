// Ejercicio 13. Haz una función (palabraMasLarga) que reciba un string y devuelva la palabra más larga
// Valores de prueba: "El conocimiento es poder"
// Salida: conocimiento

const prueba = "El conocimiento es poder";

function palabraMasLarga(palabras) {
    let maxLength = 0;
    let index = 0;
    let indexMaxLength = 0;
    palabras = palabras.split(" ");
    palabras.forEach(p => {
        p.split("");
        if (p.length > maxLength) {
            maxLength = p.length;
            indexMaxLength = index;
        }
        index++;
    });
    console.log(palabras[indexMaxLength]);
}

palabraMasLarga(prueba);