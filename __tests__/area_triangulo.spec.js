const calcularAreaTriangulo = require('../src/area_triangulo');
const massaDeTeste = require('../fixtures/massa_triangulo');

test.each(massaDeTeste.array)('calcular a área do triângulo com lista de valores', ({ base, altura, resultado }) => {
    expect(calcularAreaTriangulo(base, altura)).toBe(resultado);
});