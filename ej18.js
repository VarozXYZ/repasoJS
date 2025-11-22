// Ejercicio 18. Crea una función (filtrarEdad) que reciba un array de objetos {nombre, edad} y devuelva solo los mayores de 22
// Valores de prueba: [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]
// Salida: [{nombre:"Ana", edad:25}]

const prueba = [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}];

const filtrarEdad = (objetos) => {
    objetos = objetos.filter(obj => obj.edad >= 22);
    console.log(objetos);
}

filtrarEdad(prueba)