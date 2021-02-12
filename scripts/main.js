function colorFunction1() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const random = Math.floor(Math.random() * values.length);
    let value = values[random];
    document.getElementById("bgrone").style.backgroundColor = "#7aeb7a";
    document.getElementById("lbl").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of color Light Green of thevalue     ${value}`);
    speechSynthesis.speak(utterance);
}

function colorFunction2() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const random = Math.floor(Math.random() * values.length);
    let value = values[random];
    document.getElementById("bgrtwo").style.backgroundColor = "#99cfe0";
    document.getElementById("lbl2").innerHTML = value;
    let utterance = new SpeechSynthesisUtterance(`     You have picked the card of color Light Blue of the value     ${value}`);
    speechSynthesis.speak(utterance);
}