/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("I have a dream"),
            new Phrase("Will you marry me"),
            new Phrase("Coding is the best"),
            new Phrase("Treehouse rocks"),
            new Phrase("Guess this phrase")
        ];
        this.activePhrase = null;
     }

    startGame() {
        document.querySelector("#overlay").style.display = 'none';
        this.activePhrase  = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * 5);
        console.log(randNum);
        return this.phrases[randNum];
    }
 }