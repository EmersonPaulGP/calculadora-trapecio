const calcularAreaTrapecio = require("../script.js");

test("Calcula correctamente el área de un trapecio", () => {
    expect(calcularAreaTrapecio(10, 6, 5)).toBe(40);
    expect(calcularAreaTrapecio(8, 4, 3)).toBe(18);
    expect(calcularAreaTrapecio(7, 3, 2)).toBe(10);
});
