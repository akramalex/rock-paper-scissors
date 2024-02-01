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
const resetButton = document.getElementById("reset-button");
const choices = ["rock", "paper", "scissors"];


/**
 * add event listener to all the buttons 
 */

function handleButtonClick() {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
}

for (let button of buttons) {
    button.addEventListener("click", handleButtonClick);
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



function checkWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "tie";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "rock")
    ) {
        return "computer";
    } else {
        return "player";
    }
}

function updateScore(result) {
    if (result === "player") {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
        showMessage("You win!");
    } else if (result === "computer") {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        showMessage("Computer wins!");
    } else {
        showMessage("It's a tie!");
    }
}
function showMessage(message) {
    messages.innerText = message;
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
    playerScore.innerText = "0";
    computerScore.innerText = "0";
    playerImage.src = "./assets/images/rock.png";
    computerImage.src = "./assets/images/rock.png";
    messages.innerText = "Game reset! Let's play again.";
}