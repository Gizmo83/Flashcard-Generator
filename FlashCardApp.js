var BasicCard = require("./BasicCard.js");
var inquirer = require('inquirer');

var flashCards = [];

function addBasicCard(front, back){
    var card = new BasicCard(front, back);
    flashCards.push(card);
}



addBasicCard("What must a variable begin with?","A letter, $ or _");
addBasicCard("What will an undeclared variable return?","Undefined");
addBasicCard("Are variables case sensitive?","Yes");
addBasicCard("Two types of variable scope?","Local and Global");
addBasicCard("What are the properties of a Local Scope","Within a function, only available within function");
addBasicCard("What are the properties of Global Scope?","Outside a function, available to any code outside that function (also within).");
addBasicCard("Define: DOM","Document Object model.");
addBasicCard("What is DOM?","Representation of HTML Page....");
addBasicCard("What are the two ways to add JS to your site?","Internally and Externally.");
addBasicCard("Define: Objects","Custom datatypes with properties and actions");

console.log(flashCards[0].front)
// var count = 0;
// var cardNum = 1;

// var askQuestion = function(){
//     if (count < flashCards.length){
//         console.log("Flash Card Number " + cardNum + " ---------------------")
//         console.log("Question: " + flashCards[count].front);
//         console.log("-----------------------------------------")
//         inquirer.prompt([
//             {
//                 type: "confirm",
//                 message: "See Answer?",
//                 name: "confirm"
//             }
//         ])
//         .then(function(inquirerResponse){
//             if (inquirerResponse.confirm) {
//                 console.log("Answer Card Number " + cardNum + " -------------------")
//                 console.log("Answer: " + flashCards[count].back)
//                 console.log("----------------------------------------")
//                 count++;
//                 cardNum++;
//                 askQuestion();
//             }
//             else {
//                 count++;
//                 cardNum++;
//                 askQuestion();
//             }
//         })
//     }
// }

// askQuestion();
