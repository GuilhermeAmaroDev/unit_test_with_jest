const calcularAreaParalelogramo = require('../src/area_paralelogramo');

test('calcular a área do paralelogramo com lista de valores', () => {
    const massaDeTeste = [
        { base: 2, altura: 3, resultado: 6 },
        { base: 4, altura: 5, resultado: 20 },
        { base: 6, altura: 2, resultado: 12 },
        { base: 7, altura: 3, resultado: 21 },
        { base: 10, altura: 4, resultado: 40 }
    ];

    massaDeTeste.forEach(({ base, altura, resultado }) => {
        expect(calcularAreaParalelogramo(base, altura)).toBe(resultado);
    });
});
