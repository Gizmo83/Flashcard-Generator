var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');

function start(){
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Please choose an application.",
            choices: ["Basic Flash Cards", "Cloze Cards Fill in the Blanks"]
        }
    ])
    .then(function(choice){
        if (choice.option === "Basic Flash Cards"){
            startFlashCard();
        }
        else {
            console.log("--------------------------------------------------------");
            console.log("NBA Trivia");
            console.log("--------------------------------------------------------");
            startClozeCard();
        }
    })
}
start();

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

var count = 0;
var cardNum = 1;

var startFlashCard = function(){
    if (count < flashCards.length){
        console.log("Flash Card Number " + cardNum + " ------------------------------------")
        console.log("Question: " + flashCards[count].front);
        console.log("--------------------------------------------------------")
        inquirer.prompt([
            {
                type: "confirm",
                message: "See Answer?",
                name: "confirm"
            }
        ])
        .then(function(inquirerResponse){
            if (inquirerResponse.confirm) {
                console.log("Answer Card Number " + cardNum + " -----------------------------------")
                console.log("Answer: " + flashCards[count].back)
                console.log("--------------------------------------------------------")
                count++;
                cardNum++;
                startFlashCard();
            }
            else {
                count++;
                cardNum++;
                startFlashCard();
            }
        })
    }
}

var Cards = [];

function addClozeCard(text, cloze){
    var card = new ClozeCard(text, cloze);
    Cards.push(card);
}

addClozeCard("Kobe Bryant played for the Los Angeles Lakers", "Lakers");
addClozeCard("Chris Paul is known as CP3", "Chris Paul");
addClozeCard("2017 NBA's MVP was Russell Westbrook", "Russell Westbrook");
addClozeCard("The Warriors won the 2017 NBA Finals","Warriors");
addClozeCard("Kyrie Irving was traded to the Boston Celtics from the Cleveland Cavaliers", "Kyrie Irving");

var count = 0;
var correct = 0;

var startClozeCard = function() {

    if (count < Cards.length) {
        inquirer.prompt([
            {
                name: "userAnswer",
                message: Cards[count].partial  
            }
        ])
        .then(function(response) {
            console.log("--------------------------------------------------------");
            var answer = (response.userAnswer).toLowerCase();
            //console.log(answer);
            if (answer === (Cards[count].cloze).toLowerCase()) {
                console.log("Correct!");
                console.log("--------------------------------------------------------");
                count++;
                correct++;
                startClozeCard();
            }
            else {
                console.log("Sorry Incorrect - The correct answer is " + Cards[count].cloze);
                console.log("--------------------------------------------------------");
                count++;
                startClozeCard();
            }
        })
    }
    else {
        console.log("--------------------------------------------------------");
        console.log("You got " + correct + " out of " + count + " correct!");
        console.log("--------------------------------------------------------");
    }
}

