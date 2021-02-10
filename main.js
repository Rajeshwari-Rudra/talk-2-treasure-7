function myFunction() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];

    const random = Math.floor(Math.random() * values.length);

    let value = values[random];
    document.getElementById("bgrone").style.backgroundColor = "#000000";


    document.getElementById("lbl").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of value     ${value}`);
    speechSynthesis.speak(utterance);

}

function myFunction2() {



    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];

    const random = Math.floor(Math.random() * values.length);

    let value = values[random];
    document.getElementById("bgrtwo").style.backgroundColor = "#ffffff";

    document.getElementById("lbl2").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of value     ${value}`);
    speechSynthesis.speak(utterance);

}