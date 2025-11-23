// Ejercicio 22. Crea una función (edadesDesdeFechas) que reciba un array de fechas y devuelva un array con las edades correspondientes
// Valores de prueba: ["2000-01-01", "2010-06-15"]
// Salida: [25, 15]

const prueba = ["2000-01-01", "2010-06-15"];

const edadesDesdeFechas = (array) => {
    const date = new Date();
    let currYear = date.getFullYear();
    const currMonth = date.getMonth() + 1;
    const currDay = date.getDate();

    const edades = array.map(f => {
        f = f.split("-");
        const year = f[0];
        const month = f[1];
        const day = f[2];

        if (currMonth < month || (currMonth == month && currDay < day)) {
            const thisCaseYear = currYear - 1;
        } else {
            const thisCaseYear = currYear;
        }
        return currYear - year;
    });
    return edades
}

console.log(edadesDesdeFechas(prueba))