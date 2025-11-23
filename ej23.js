// Ejercicio 23. Haz una función (juegoAdivinanza) que genere un número aleatorio y permita adivinar hasta acertar, devolviendo número de intentos
// Valores de prueba: Número generado: 7, secuencia de intentos: 3,5,7
// Salida: ¡Correcto! Número de intentos: 3

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function juegoAdivinanza() {
    let acertado = false;
    let intentos = 0;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    const preguntar = () => {
        intentos++;
        rl.question("Adivina el número (1-10): ", (respuesta) => {
            const intento = parseInt(respuesta);
            if (intento === randomNumber) {
                acertado = true;
                console.log(`¡Correcto! Número de intentos: ${intentos}`);
                rl.close();
            } else {
                preguntar();
            }
        });
    };
    
    preguntar();
}

juegoAdivinanza()