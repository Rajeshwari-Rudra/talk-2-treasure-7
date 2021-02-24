// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });


// async function getLocation() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     }).then(position => {
//         return position;
//     });
// }


import getLocation from './main.js';
test('test coordinates', () => {
    let lat = coordinates.latitude;
    let lon = coordinates.longitude;

    if (lat < -90 || lat > 90 || lon < -180 || lon > 180)
        return false;
    else
        return true;

});