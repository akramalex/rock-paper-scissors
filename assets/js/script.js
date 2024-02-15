/** 
 * Declare constants for DOM elements 
 * and possible choices.
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
 * Add event listener to all the buttons 
 * and handle button clicks.
 */

function handleButtonClick() {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
}

for (let button of buttons) {
    button.addEventListener("click", handleButtonClick);
}

/**
 * The main game function updates the picture when a choice is made 
 * and updates the value of the selected button. 
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


/**  
 * The function checks the winner using an if statement 
 * and returns the result.
 */
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
/** 
 * The function updates the score: If the 'check winner'
 *  function determines the player as the winner, the player's score is incremented by 1.
 * If the 'check winner' function determines the computer as the winner, 
 * the computer's score is incremented by 1
 */
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

/** 
 * The 'show message' function is connected with the 'check winner'function.
 *  If the player wins, the message is displayed,
 *  and the 'update score' function is called.
*/

function showMessage(message) {
    messages.innerText = message;
}
/* event listener to reset game  */

resetButton.addEventListener("click", resetGame);
/**
 * The function 'resetGame' resets the score to 0,
 *  updates the picture to the initial one,
 *  and also updates the message.
 */

function resetGame() {
    playerScore.innerText = "0";
    computerScore.innerText = "0";
    playerImage.src = "./assets/images/rock.png";
    computerImage.src = "./assets/images/rock.png";
    messages.innerText = "Game reset! Let's play again.";
}