const isValid = require('./isValid');

test('Coordinates', () => {
    expect(isValid(39.999, 60.00088)).toBe(true);
});