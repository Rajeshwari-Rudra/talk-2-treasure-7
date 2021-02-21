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


const getLocation = require('./getLocation');
test('test coordinates', () => {
    let lat = coordinates.latitude;
    let lon = coordinates.longitude;

    if (lat < -90 || lat > 90 || lon < -180 || lon > 180)
        return false;
    else
        return true;

});

// function isValid(coordinates) {
//     let lat = coordinates.latitude;
//     let lon = coordinates.longitude;

//     if (lat < -90 || lat > 90 || lon < -180 || lon > 180)
//         return false;
//     else
//         return true;
// }

// function isValidDevice(device) {
//     let deviceCoordinates = {};
//     deviceCoordinates["latitude"] = device.coords.latitude;
//     deviceCoordinates["longitude"] = device.coords.longitude;

//     if (isValid(deviceCoordinates))
//         return true;
//     else
//         throw "Invalid Device";
// }

// function isValidType(location) {
//     if (location.type === "triangle")
//         return true;
//     else
//         throw "Invalid Location Type";
// }

// function isValidCoordinates(coordinates) {
//     if (coordinates.length != 3)
//         return false;

//     coordinates.forEach(function(coordinate, index) {
//         if (!isValid(coordinate))
//             return false;
//     })

//     return true;
// }

// function isValidLocation(location) {
//     if (location.Name.length > 0 && isValidType(location) && isValidCoordinates(location.coordinates))
//         return true;
//     else
//         throw "Invalid Location";
// }

// function isValidArguments(device, location) {
//     if (device == null && location == null)
//         throw "Two valid arguments are needed";
//     else
//         return true;
// }