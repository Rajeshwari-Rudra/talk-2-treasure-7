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


return true;
};
