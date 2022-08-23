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
    let winner = "";

    if (playerMove === computerMove) {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". It is a tie.";
        winner = "tie";
    }

    if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". You win!";
        winner = "player";
    }

    if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "paper" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "rock")) {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". You lose.";
        winner = "computer";
    }

    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = "";
    
    for (let i = 0; i < 5; i++) {
        let question = prompt("Do you choose rock, paper, or scissors?");
        let roundWinner = playRound(question.toLowerCase(),getComputerChoice());
        
        if (roundWinner === "tie") {
            playerScore++;
            computerScore++;
        }
        else if (roundWinner === "player") {
            playerScore++;
        }
        else {
            computerScore++;
        }
        console.log(roundWinner + " won this round");
    }

    if (playerScore === computerScore) {
        gameWinner = "It is a tie";
    }
    else if (playerScore > computerScore) {
        gameWinner = "player wins!";
    }
    else {
        gameWinner = "computer wins!";
    }

    return gameWinner;
}

// const playerSelection = "scissors";
// console.log("The player selected: " + playerSelection);
// const computerSelection = getComputerChoice();
// console.log("The computer selected: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));
console.log(game());