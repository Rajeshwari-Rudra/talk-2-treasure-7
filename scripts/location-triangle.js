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



// function isLatitude(lat) {
//     return isFinite(lat) && Math.abs(lat) <= 90;
// }

function isLongitude(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
}
