// Ejercicio 19. Escribe una función (esJSONValido) que reciba un string y determine si es un JSON válido
// Valores de prueba: '{"nombre":"Ana"}', '{"nombre":Ana}'
// Salida: Válido, Inválido

const prueba1 = '{"nombre":"Ana"}';
const prueba2 = '{"nombre":Ana}';

const esJSONValido = (json) => {
    try {
        JSON.parse(json);
        console.log("Válido")
    } catch (e) {
        console.log("Inválido")
    }
}

esJSONValido(prueba1)
esJSONValido(prueba2)