// Ejercicio 6. Haz una función (modificarX) que demuestre el scope de variables globales y locales
// Valores de prueba: x = 10 (global), dentro de la función x = 20
// Salida:
// Dentro de la función: 20
// Fuera de la función: 10

const x = 10;

function modificarX() {
    const x = 20;
    console.log("Dentro de la funcción: ", x);
}

modificarX()
console.log("Fuera de la función:", x);