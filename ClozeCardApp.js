var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');

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

console.log("--------------------------------------------------------")
console.log("NBA Trivia")
console.log("--------------------------------------------------------")
var askQuestion = function() {
    if (count < Cards.length) {
        inquirer.prompt([
            {
                name: "userAnswer",
                message: Cards[count].partial  
            }
        ])
        .then(function(response) {
            console.log("--------------------------------------------------------")
            var answer = (response.userAnswer).toLowerCase();
            //console.log(answer);
            if (answer === (Cards[count].cloze).toLowerCase()) {
                console.log("Correct!")
                console.log("--------------------------------------------------------")
                count++;
                correct++;
                askQuestion();
            }
            else {
                console.log("Sorry Incorrect")
                console.log("--------------------------------------------------------")
                count++;
                askQuestion();
            }
        })
    }
    else {
        console.log("--------------------------------------------------------")
        console.log("You got " + correct + " out of " + count + " correct!")
        console.log("--------------------------------------------------------")
    }
}
askQuestion();