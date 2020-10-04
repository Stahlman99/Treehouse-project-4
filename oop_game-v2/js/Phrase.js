/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // Creates the class for phrases. This class contains a phrase property and three functions.
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // This function adds the phrase to the display by creating the li elements that hold each letter box.
    addPhraseToDisplay() {
        let html = '';
        let letter = '';

        for (let i = 0; i < this.phrase.length; i++) {
            letter = this.phrase.charAt(i);
            if (letter === ' ') {
                html += `<li class="space">${letter}</li>`;
            } else {
                html += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        }

        document.querySelector('#phrase > ul').innerHTML = (html);
    }

    // This function checks if a letter is contained in the this.phrase of the phrase object.
    checkLetter(letter) {
        if (this.phrase.includes(letter.toLowerCase())) {
            console.log('Letter match');
            return true;
        } else {
            console.log('Letter fail');
            return false;
        }
    }

    // This function reveals the letter supplied as an argument by changing it's class to the 'show' class
    showMatchedLetter(letter) {
        for (let i = 0; i < document.querySelector("#phrase > ul").children.length; i++) {
            let letterVisual = document.querySelector(`#phrase > ul > li.hide.letter.${letter}`);

            if (letterVisual !== null) {
                letterVisual.className = `show letter ${letter}`;
            }
        }        
    }
 }