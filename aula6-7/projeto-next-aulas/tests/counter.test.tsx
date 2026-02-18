import soma from '../src/components/layout/Counter';

test("Deve somar dois números", () => {
    expect(soma(2, 3)).toBe(5);
});