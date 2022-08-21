//randomly returns either 'rock', 'paper', or 'scissors'
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
  
    if (randomNumber === 1) {
      computerChoice = "rock";
    } else if (randomNumber === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  }

//plays a single round of the game
function playRound (playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection;
    let message = "";

    if (playerMove === computerMove) {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". It is a tie.";
    }

    if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". You win!";
    }

    if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "paper" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "rock")) {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". You lose.";
    }

    return message;
}

const playerSelection = "scissors";
console.log("The player selected: " + playerSelection);
const computerSelection = getComputerChoice();
console.log("The computer selected: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));