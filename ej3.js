// Ejercicio 3. Haz una función (esPrimo) para determina si un número es primo
// Valores de prueba: 29
// Salida: 29 es primo

const prueba = 29;

function esPrimo(n) {
    if (n <= 1 ) {
        console.log("Usa un número mayor que uno.");
        return;
    }
    let esPrimo = true;
    for (let i = 2; i <= n; i++) {
        if (n % 2 == 0) {
            esPrimo = false;
        }
    }

    if (esPrimo) {
        console.log(`${n} es primo`);
    } else {
        console.log(`${n} no es primo`);

    }
}

esPrimo(prueba);