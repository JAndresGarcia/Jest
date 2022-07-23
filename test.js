// importar la funcion desde app.js

const {sum} = require('./app.js');

// prueba

test ('La suma 14 + 9 debe darnos 23', () => {
    // aca se pruebla la funcion 
    let total = sum(14,9)

    // aca es lo que se espera
    expect(total).toBe(23)
})

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.5*1.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 127.9 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(3.5*127.9); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One yen should be 0.8 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(3.5*0.8); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})