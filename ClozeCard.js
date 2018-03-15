var ClozeCard = function(text, cloze) {
    if (!text.includes(cloze)) {
        console.log("Error: Cannot create card '" + cloze + "' doesn't appear in '" + text + "'");
        return;
    }
    this.cloze = cloze;
    this.fullText = text;
    this.partial = text.replace(cloze, "...");
}

// TEST
// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// console.log(firstPresidentCloze);
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.partial);
// console.log(firstPresidentCloze.fullText);

// var brokenCloze = new ClozeCard("This doesn't work", "oops");

// console.log(brokenCloze);

module.exports = ClozeCard;