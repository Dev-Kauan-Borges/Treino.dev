const calculadora = require("../models/calculadora");

test("espero que 1 seja 1", () => {
    const resultado = calculadora.somar(1, 0);
    console.log(resultado);
});

test('somar 5 + 100 deveria retornar 105', () => {
    const resultado = calculadora.somar(5,100);
    expect(resultado).toBe(105);
})

test("somar 'banana' + 100 deveria retornar 'Erro' ", () => {
    const resultado = calculadora.somar("banana", 100);
    expect(resultado).toBe("Erro");
})