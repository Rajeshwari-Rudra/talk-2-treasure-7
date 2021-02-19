import locationsArray from '../locations.js';

let colorElement1 = document.getElementById("bgrone");
let colorElement2 = document.getElementById("bgrtwo");


function main() {
    console.log('Page is fully loaded');
}

window.addEventListener('load', main);
colorElement1.addEventListener('click', colorFunction1);
colorElement1.addEventListener('touch', colorFunction1);
colorElement2.addEventListener('click', colorFunction2);
colorElement2.addEventListener('touch', colorFunction2);


let location,device;

// var target = locationsArray[Math.floor(Math.random() * locationsArray.length)].Name;

async function colorFunction1() 
{
    location = locationsArray[0].Name;
   	
  	    
    document.getElementById("bgrone").style.backgroundColor = "#7aeb7a";
   // document.getElementById("lbl").innerHTML = location;	    
    let utterance = new SpeechSynthesisUtterance(`Your target location is : ${location}`);	
    speechSynthesis.speak(utterance);
   


}

async function colorFunction2() {
    device = await getLocation();

    let isInside = isInsideTriange(device, location);
    let status;
    let speak;
   // status = "Device Coordinates: " + "<br>";
   document.getElementById("device-lat").innerHTML= "Latitude: " + device.coords.latitude + "<br>";
   document.getElementById("device-long").innerHTML= "Longitude: " + device.coords.longitude + "<br>";
    if(isInside) 
    {
        //status += "Congratulations!! You have reached Quest: " + location.Name;
        //speak = "Congratulations!! You have reached Quest: " + location.Name;
        let utterance = new SpeechSynthesisUtterance("You are in range. Welcome to " + location.Name);
            speechSynthesis.speak(utterance);
            error = false;
    } else 
    {
        document.getElementById("error-message").innerHTML = "You are out of range from target location";
        let utterance = new SpeechSynthesisUtterance("You are out of range from target location");
        speechSynthesis.speak(utterance);
    }
   

}

// collects current location
async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

function isValid(coordinates) {
    let lat = coordinates.latitude;
    let lon = coordinates.longitude;

    if (lat < -90 || lat > 90 || lon < -180 || lon > 180)
        return false;
    else
        return true;
}

function isValidDevice(device) {
    let deviceCoordinates = {};
    deviceCoordinates["latitude"] = device.coords.latitude;
    deviceCoordinates["longitude"] = device.coords.longitude;

    if (isValid(deviceCoordinates))
        return true;
    else
        throw "Invalid Device";
}

function isValidType(location) {
    if (location.type === "triangle")
        return true;
    else
        throw "Invalid Location Type";
}

function isValidCoordinates(coordinates) {
    if (coordinates.length != 3)
        return false;

    coordinates.forEach(function (coordinate, index) {
        if (!isValid(coordinate))
            return false;
    })

    return true;
}

function isValidLocation(location) {
    if (location.Name.length > 0 && isValidType(location) && isValidCoordinates(location.coordinates))
        return true;
    else
        throw "Invalid Location";
}

function isValidArguments(device, location) {
    if(device == null && location == null)
        throw "Two valid arguments are needed";
    else
        return true;
}



function isInsideTriange(device, location)
{
    try{
    
 let checkValid = isValidArguments(device, location) && isValidDevice(device) && isValidType(location) && isValidLocation(location);
 if (checkValid){
 let P = device.coords.latitude;
    let A = device.coords.longitude;
    let B= location.coords.latitude;
    let C= location.coords.longitude;
    function vec(from, to) {  return [to[0] - from[0], to[1] - from[1]];  }
    var v0 = vec(A, C);
   var v1 = vec(A, B);
   var v2 = vec(A, P);
   function dot(u, v) {  return u[0] * v[0] + u[1] * v[1];  }
   var dot00 = dot(v0, v0);
  var dot01 = dot(v0, v1);
  var dot02 = dot(v0, v2);
  var dot11 = dot(v1, v1);
  var dot12 = dot(v1, v2);
  var invDenom = 1.0 / (dot00 * dot11 - dot01 * dot01);
  var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
  var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
  // Check if point is in triangle
  if((u >= 0) && (v >= 0) && (u + v < 1))
  {
  return isInside;
  }
 }
}
catch (err) {
         console.log("Exception: " + err);
    }}
