// Ejercicio 16. Crea una función (sumaArray) que reciba un array de números y devuelva la suma de sus elementos
// Valores de prueba: [5,10,15]
// Salida: 30

const prueba = [5,10,15];

const sumaArray = (array) => {
    let suma = 0;
    array.forEach(n => {
        suma += n;
    });
    console.log(suma)
}

sumaArray(prueba)