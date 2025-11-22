// Ejercicio 10. Crea una función (raicesCuadradas) que reciba un array de números y devuelva un array con la raíz cuadrada de cada número
// Valores de prueba: [4, 16, 25, 36]
// Salida: [2, 4, 5, 6]

const prueba = [4, 16, 25, 36];

function raicesCuadradas(numeros) {
    let raicesCuadradas = []
    numeros.forEach(n => {
        for (let i = 1; i < n; i++) {
            if (i * i == n) {
                raicesCuadradas.push(i);
                return;
            } 
        }
        raicesCuadradas.push("NaN");
    })
    console.log(raicesCuadradas)
}

raicesCuadradas(prueba)