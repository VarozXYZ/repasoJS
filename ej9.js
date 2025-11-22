// Ejercicio 9. Haz una función (generarAleatorios) que genere 5 números aleatorios entre 1 y 100 y los ordene de menor a mayor
// Valores de prueba: N/A
// Salida: [3, 14, 22, 57, 91] (ejemplo)

function generarAleatorios() {
    let aleatorios = [];
    for (let i = 0; i < 5; i++) {
        const n = parseInt(Math.random().toFixed(2) * 100);
        aleatorios.push(n)
    }
    console.log(aleatorios);
}

generarAleatorios()