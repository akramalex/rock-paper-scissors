/** 
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const playerImage = document.getElementById("player-image");
const computerScore = document.getElementById("computer-score");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];


/**
 * add event listener to all the buttons 
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * the main game function , update picture when choice and
 *  date choice value of seclected button
 * 
 */
function playGame(playerChoice) {
    
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src = `./assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];
    
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScore(result);
}