// const isValid = require('./isValid');

// test('Coordinates', () => {
//     expect(isValid(39.999, 60.00088)).toBe(true);
// });
import { TestScheduler } from 'jest';
import isValid from './main.js'
describe('isValid', () => {
    it('checks whether the coordinates are valid', () => {
        expect(isValidCoordinates({})).toEqual(false);
    });
});


const isLocationValid = require('./location-triangle')
describe('isLocationValid', () => {
    it('checks the location is valid or not', () => {
        const validLocation = {
            latitude: 33.4271871,
            longitude: -111.8848516
        }
        expect(isLocationValid(validLocation)).toEqual(true);

    });
});





