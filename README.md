# Flashcard-Generator

Description

There are two applications in this repository.

## Basic Flash Cards
Basic Flash Cards is a conventional flash card app.  It shows the user the question and prompts the user if they want to see the answer.  If user selects 'yes' the answer will be revealed, if they select 'no' it will prompt the next question.  

BasicCard.js is the contructor for the questions.

You can make additional cards by: addBasicCard("front","back");  (replace "front" and "back")

## Cloze Cards Fill in the Blanks
Cloze Cards Fill in the Blanks is a cloze deletion trivia app.  A question will be prompted and the user will enter the answer.  If answered correctly then next question will be prompted.  If incorrect it will show the correct answer and next question will be prompted.  At the end of the trivia the correct answers will be tallied.

ClozeCard.js is the constructor for the cloze deletion questions.

You can make additional cards by: addClozeCard("Full Question", "Cloze deletion text"); (replace "Full question" and "Cloze deleteion text" NOTE: "Cloze deletion text" must be in "Full Question")

### Run
node CardApp.js