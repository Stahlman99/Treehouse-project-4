/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // This class provides the structure of the game itself. Each game will consist of it's own instance of the game class.
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

     // Calling this method removes the overlay, calls the getRandomPhrase method, and calls the phrase's addPhraseToDisplay method.
    startGame() {
        document.querySelector("#overlay").style.display = 'none';
        this.activePhrase  = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // This method selects a random phrase from our phrases array.
    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * 5);
        return this.phrases[randNum];
    }

    // This method will be called when a letter is selected from the onscreen keyboard (or the physical keyboard).
    // It marks the letter as a correct or incorrect guess and calls the checkForWin method.
    handleInteraction(letterKey) {
        letterKey.disabled = true;

        if (this.activePhrase.checkLetter(letterKey.textContent)) {
            letterKey.className = 'chosen';
            this.activePhrase.showMatchedLetter(letterKey.textContent);

            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            letterKey.className = 'wrong';
            this.removeLife();
        }
    }

    // This method replaces "heart" icons with "lost heart" icons. It then calls the gameOver method if all 5 hearts have been lost.
    removeLife() {
        let hearts = document.querySelector("#scoreboard > ol");
        let heartIndex = 4 - this.missed;

        hearts.children[heartIndex].firstElementChild.src = "images/lostHeart.png";
        this.missed++;

        if (this.missed >= 5) {
            this.gameOver();
        }
    }

    // This method checks whether all the letters in the phrase have been given the 'show letter...' class. If so, the game is won, and the method returns true.
    checkForWin() {
        let gameWon = true;
        let phraseElements = Array.from(document.querySelector("#phrase > ul").children);

        phraseElements.forEach(letter => {
            if (letter.className !== 'space') {
                if (letter.className === `show letter ${letter.textContent}` && gameWon === true) {
                    gameWon = true;
                } else {
                    gameWon = false;
                }
            }
        });

        return gameWon;
    }

    // This method reveals the overlay and then calls the checkForWin method. It then displays the appropriate results based on whether the player won the game or not.
    // After that, it resets the game so that it can be played again.
    gameOver() {
        let overlay = document.querySelector("#overlay");
        let gameOverMessage = document.querySelector("#game-over-message");

        overlay.style.display = '';

        if (this.checkForWin()) {
            overlay.className = 'win';
            gameOverMessage.textContent = 'You win!';
        } else {
            overlay.className = 'lose';
            gameOverMessage.textContent = 'You lose!';
        }

        document.querySelector("#phrase > ul").textContent = '';

        let keyboard = document.querySelectorAll("#qwerty div button");
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].className = 'key';
            keyboard[i].disabled = false;
        }

        let hearts = document.querySelector("#scoreboard > ol");
        for (let i = 0; i < hearts.children.length; i++) {
            hearts.children[i].firstElementChild.src = "images/liveHeart.png";            
        }
    }
 }