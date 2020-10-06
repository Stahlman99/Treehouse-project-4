/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // Initializes the game object.
let game = null;

// Adds an event listener to the start button on the overlay. When the button is clicked, it creates a new Game object and calls it's startGame method.
document.querySelector("#btn__reset").addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Adds an event listener to the keyboard. It then calls the game.handleInteraction() method and passes it the selected key.
document.querySelector("#qwerty").addEventListener('click', (e) => {
    if (e.target.className !== 'keyrow' && e.target.id !== 'qwerty') {
        game.handleInteraction(e.target);
    }
});

// Adds an event listener to the document to add keyboard functionality.
document.addEventListener('keydown', (e) => {
    const keyboard = document.querySelectorAll("#qwerty div button");

    if (game !== null) {
        for (let i = 0; i < keyboard.length; i++) {
            if (keyboard[i].disabled === false) {
                if (keyboard[i].textContent === e.key.toLowerCase()) {
                    game.handleInteraction(keyboard[i]);
                }
            }
        }
    }
});