// Ejercicio 17. Haz una función (ordenarPorEdad) que reciba un array de objetos {nombre, edad} y lo ordene por edad ascendente
// Valores de prueba: [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]
// Salida: [{nombre:"Luis", edad:20}, {nombre:"Ana", edad:25}]

const prueba = [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}];

const ordenarPorEdad = (objetos) => {
    objetos = objetos.sort((a, b) => a.edad - b.edad);
    console.log(objetos)
}

ordenarPorEdad(prueba);