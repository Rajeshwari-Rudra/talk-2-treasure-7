import locationsArray from '../locations.js';

let colorElement1 = document.getElementById("bgrone");
let colorElement2 = document.getElementById("bgrtwo");




window.addEventListener('load', main);
colorElement1.addEventListener('click', colorFunction1);
colorElement1.addEventListener('touch', colorFunction1);
colorElement2.addEventListener('click', locationHandler);
colorElement2.addEventListener('touch', locationHandler);

let currentlat;
let currentlon;
let error = true;
let qlat;
let qlong;


var target = [locationsArray[Math.floor(Math.random() * locationsArray.length)].Name];




function main() {
    console.log('Page is fully loaded');
    // console.log(target1);


}




async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

async function locationHandler() {
    let locText = await getLocation();
    currentlat = locText.coords.latitude;
    document.getElementById("device-lat").innerHTML = "Your device-lat: " + currentlat.toFixed(6);
    currentlon = locText.coords.longitude;

    document.getElementById("device-long").innerHTML = "Your device-long: " + currentlon.toFixed(6);




    if (isInside(qlat, qlong)) {
        document.getElementById("locationAnswer").innerHTML = target;
        let utterance = new SpeechSynthesisUtterance("You are in range. Welcome to " + target);
        speechSynthesis.speak(utterance);
        error = false;
    }


    if (error) {
        document.getElementById("error-message").innerHTML = "You are out of range from target location";
        let utterance = new SpeechSynthesisUtterance("You are out of range from target location");
        speechSynthesis.speak(utterance);
    } else {
        document.getElementById("error-message").innerHTML = "";
    }
}

function isInside(qlat, qlong) {
    let distance = distanceBetweenLocations(currentlat, currentlon, qlat, qlong);
    console.log("distance: " + distance);
    let area = (Math.sqrt(3) / 4) * 8.5;


    if (distance * 10 < area) {
        return true;
    } else {
        return false;
    }
}


function distanceBetweenLocations(currentlat, currentlon, qlat, qlong) {
    var p = 0.017453292519943295;
    var a = 0.5 - Math.cos((qlat - currentlat) * p) / 2 +
        Math.cos(currentlat * p) * Math.cos(qlat * p) *
        (1 - Math.cos((qlong - currentlon) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a));
}



function colorFunction1() {
    locationsArray.forEach(function(value) {
        if (value.Name == target) {
            qlat = value.Latitude;
            qlong = value.Longitude;

        } else {
            console.log("invalid");
        }
    });

    console.log(qlat);
    console.log(target);


    // document.getElementById("locationAnswer").innerHTML = value.Name;
    // document.getElementById("lbl").innerHTML = Name;
    // let utterance = new SpeechSynthesisUtterance(` Your target location is ${name}`);
    // speechSynthesis.speak(utterance);
    document.getElementById("bgrone").style.backgroundColor = "#7aeb7a";


}