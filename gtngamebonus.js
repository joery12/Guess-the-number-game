let username = prompt("Welkom! Wat is je naam?");
alert("Hey " + username + "!");
let numA = prompt("Wat kies je als laagste getal?");
let numB = prompt("Wat kies je als hoogste getal?");

let riddle = function(min, max) {
    let correctAnswer = Math.floor(Math.random() * (numB - numA) + numA);
    console.log(correctAnswer);
    let answerToNumber = prompt(`Voer een nummer van ${numA} tot ${numB} in om te beginnen met raden`);
    i = 0;
    while (answerToNumber != correctAnswer && i < 5) {
        if (i == 4) {
            alert(`Dat is niet correct, je hebt nog maar 1 poging`);
        } else {
            alert(`Dat is niet correct je hebt nog maar ${5-i} pogingen`);
        }

        answerToNumber = prompt("Probeer een ander nummer");
        i++
    }
    if (answerToNumber == correctAnswer) {
        alert("Gefeliciteerd je hebt gewonnen");
        return alert("Dag " + username + "!");
    } else {
        alert("Je bent af, dit is het einde van het spel");
        return alert("Dag " + username + "!");
    }

}
riddle(numA, numB);