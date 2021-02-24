// const isValid = require('./isValid');

// test('Coordinates', () => {
//     expect(isValid(39.999, 60.00088)).toBe(true);
// });
import isValid from './main.js'
describe('isValid', () => {
    it('checks whether the coordinates are valid', () => {
        expect(isValidCoordinates({})).toEqual(false);
    });
});