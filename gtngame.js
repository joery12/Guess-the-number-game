let username = prompt("Welkom! Wat is je naam?");
alert("Hey " + username + "!");

let riddle = function() {
    let correctAnswer = Math.floor(Math.random() * 25);
    console.log(correctAnswer);
    let answerToNumber = prompt("Voer een nummer van 0 tot 25 in om te beginnen met raden");
    //answerToNumber = Number(answer);
    while (answerToNumber != correctAnswer) {
        alert("Dat is niet correct")
        answerToNumber = prompt("Probeer een ander nummer");
    }
    alert("Gefeliciteerd je hebt gewonnen");
    return alert("Dag " + username + "!");
}

riddle();

// Met teller 
// let username = prompt("Welkom! Wat is je naam?");
// alert("Hey " + username + "!");

// let riddle = function() {
//     let correctAnswer = Math.floor(Math.random() * 25);
//     console.log(correctAnswer);
//     let answerToNumber = prompt("Voer een nummer van 0 tot 25 in om te beginnen met raden");
//     //answerToNumber = Number(answer);
//     i=0;
//     while (answerToNumber != correctAnswer && i < 5) {       
//         alert("Dat is niet correct")
//         answerToNumber = prompt("Probeer een ander nummer");
//         i++

//     }
//     alert("Gefeliciteerd je hebt gewonnen");
//     return alert("Dag " + username + "!");
// }

// riddle();

// Met !==
// let username = prompt("Welkom! Wat is je naam?");
// alert("Hey " + username + "!");
// let riddle = function() {
//     let correctAnswer = Math.floor(Math.random() * 25);
//     console.log("correct antwoord", correctAnswer);
//     let answer = prompt("Voer een nummer van 0 tot 25 in om te beginnen met raden");
//     answerToNumber = Number(answer);
//     while (answerToNumber !== correctAnswer) {      
//         answer = prompt("Probeer een ander nummer");
//         answerToNumber = Number(answer);
//         console.log('correcte antwoord: ', correctAnswer)
//         console.log('anwser: ', answer);
//         console.log('anwserToNuber:', answerToNumber);
//     }
//     alert("Gefeliciteerd je hebt gewonnen");
//     return alert("Dag " + username + "!");
// }
// riddle();