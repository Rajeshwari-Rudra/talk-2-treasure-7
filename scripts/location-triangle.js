function isValid(latitude, longitude) {
    var latitude = document.getElementById(lat).value;
    var longitude = document.getElementById(lng).value;

    var number = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");

    if (number.exec(latitude) && number.exec(longitude)) {
        return true
    }
    else {

        return false
    }

}


function isValid(coordinate) {

    return isFinite(coordinate) && Math.abs(coordinate) <= 90;

}

var lat = coordinate.lat;
var lng = coordinate.lng;


function isLatitude(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90;
}

function isLongitude(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
}

const isCoordinateValid=(coordinate)=>{
    //check if dev.coordinate
    //check if dev.coordinate with isCoordinateValid
    if(isValid(length(coordinate)==3))
    return true;
}

const isDeviceValid = (device) =>{
    let deviceCoordinates = {};

    deviceCoordinates["lat"]=deviceCoordinates.lat;
    deviceCoordinates['lng']=deviceCoordinates.lng;

    if(isValid(deviceCoordinates))
    return true;
}
const isLocationValid=(location)=>{
    // check if loc.coordinates array exists
    //  check if loc.coordinates array length is correct for shape
    // check if each coordinate is valid.
    if(isValid(location))
    return true;
}

const isInsideTraingle=(device,location) =>{
    const isDeviceValid = isDeviceValid(device);
    const isLocationValid = isLocationValid(location);

    if(!isDeviceValid){
        throw new Error('Invalid device');
    }
    if(!isLocationValid){
        throw new Error('Invalid location');
    }

    if(isValid(device,location)){
        let P = device.coords.latitude;
            let A = device.coords.longitude;
            let B = location.coords.latitude;
            let C = location.coords.longitude;

            function vec(from, to) { return [to[0] - from[0], to[1] - from[1]]; }
            var v0 = vec(A, C);
            var v1 = vec(A, B);
            var v2 = vec(A, P);

            function dot(u, v) { return u[0] * v[0] + u[1] * v[1]; }
            var dot00 = dot(v0, v0);
            var dot01 = dot(v0, v1);
            var dot02 = dot(v0, v2);
            var dot11 = dot(v1, v1);
            var dot12 = dot(v1, v2);
            var invDenom = 1.0 / (dot00 * dot11 - dot01 * dot01);
            var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
            var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
            console.log(u)
            console.log(v)
            // Check if point is in triangle
            if ((u >= 0) && (v >= 0) && (u + v < 1)) {
                return true;
            }

    }


return true;
};
