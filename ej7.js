// Ejercicio 7. Escribe una función (convertirANumero) que convierta un string a número y devuelva un error si no es posible
// Valores de prueba: "123", "abc"
// Salida: 123, Error: No es un número válido

const prueba1 = "123";

const prueba2 = "abc";

function convertirANumero(string) {
        string = parseInt(string);
        if (string) {
            console.log(string);
        } else {
            console.log("No es un número válido");
        }
};

convertirANumero(prueba1);
convertirANumero(prueba2);