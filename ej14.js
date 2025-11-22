// Ejercicio 14. Crea una función (dosDecimales) que reciba un número y lo devuelva con 2 cifras decimales
// Valores de prueba: 12.3456
// Salida: 12.35

const prueba = 12.3456;

function dosDecimales(n) {
    console.log(parseFloat(n.toFixed(2)))
}
dosDecimales(prueba)