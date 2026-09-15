const calculadora = require("../models/calculadora");

test("espero que 1 seja 1", () => {
    const resultado = calculadora.somar(1, 0);
    console.log(resultado);
});