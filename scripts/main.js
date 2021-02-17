import locationsArray from '../init-locations.js';

let colorElement1 = document.getElementById("bgrone");
let colorElement2 = document.getElementById("bgrtwo");


function main() {
    console.log('Page is fully loaded');
}

window.addEventListener('load', main);
colorElement1.addEventListener('click', colorFunction1);
colorElement1.addEventListener('touch', colorFunction1);
colorElement2.addEventListener('click', locationHandler);
colorElement2.addEventListener('touch', locationHandler);

let currentlat;
let currentlon;
let error = true;

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
    var target = locationsArray[2].Name
   // locationsArray.forEach(function (value) {

        if (isInside(locationsArray[2].Latitude, locationsArray[2].Longitude)) {
            document.getElementById("locationAnswer").innerHTML = value.Name;
            let utterance = new SpeechSynthesisUtterance("You are in range. Welcome to " + value.Name);
            speechSynthesis.speak(utterance);
            error = false;
        }
   // });

    if (error) {
        document.getElementById("error-message").innerHTML = "You are out of range from target location";
        let utterance = new SpeechSynthesisUtterance("You are out of range from target location");
            speechSynthesis.speak(utterance);
    } else {
        document.getElementById("error-message").innerHTML = "";
    }
}

function isInside(questLat, questLon) {
    let distance = distanceBetweenLocations(questLat, questLon);
    console.log("distance: " + distance);
    if (distance < 30) {
        return true;
    } else {
        return false;
    }
}

function distanceBetweenLocations(questLat, questLon) {
    const R = 6371e3;
    const φ1 = currentlat * Math.PI / 180;
    const φ2 = questLat * Math.PI / 180;
    const Δφ = (questLat - currentlat) * Math.PI / 180;
    const Δλ = (questLon - currentlon) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d;
}


function colorFunction1() {
    // const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    var random = locationsArray[2].Name;
    
  //  let value = values[random];
    document.getElementById("bgrone").style.backgroundColor = "#7aeb7a";
    document.getElementById("lbl").innerHTML = random;
    let utterance = new SpeechSynthesisUtterance(` Your target location is ${random}`);
    speechSynthesis.speak(utterance);
    
}

/* function colorFunction2() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const random = Math.floor(Math.random() * values.length);
    let value = values[random];
    document.getElementById("bgrtwo").style.backgroundColor = "#99cfe0";
    document.getElementById("lbl2").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of color Light Blue of the value     ${value}`);
    speechSynthesis.speak(utterance);
}*/