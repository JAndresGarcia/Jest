// suma

const sum = (a,b) => {
    return a + b
}

// imprimir

console.log(sum(7,3))

// exportar funcion para que este en otros archivos
// similiar a `export` de webpack

    // let oneEuroIs = {
    //     "JPY": 127.9, // japan yen
    //     "USD": 1.2, // us dollar
    //     "GBP": 0.8, // british pound
    // }

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9
    return valueInYen
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8
    return valueInPound
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}