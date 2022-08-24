//starts the game when "Begin Game" is pushed
const gameContainer = document.querySelector(".game-container");
const gameStart = document.querySelector(".begingame")

function startGame () {
    gameContainer.style.display="flex";
    gameStart.style.display="none";
}

gameStart.addEventListener("click", startGame);

//returns the player choice for each round
let playerChoice = "";
const rockChoice = document.querySelector(".rock-choice");
const paperChoice = document.querySelector(".paper-choice");
const scissorsChoice = document.querySelector(".scissors-choice");

rockChoice.addEventListener("click", () => {
    playerChoice = "rock";
});

paperChoice.addEventListener("click", () => {
    playerChoice = "paper";
});

scissorsChoice.addEventListener("click", () => {
    playerChoice = "scissors";
});

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
function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection;
    let winner = "";

    if (playerMove === computerMove) {
        winner = "tie";
    }

    if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
        winner = "player";
    }

    if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "paper" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "rock")) {
        winner = "computer";
    }

    return winner;
}



function displayResults () {
    let message = "";

    if (winnerOfRound === "tie") {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". It is a tie.";
    }
    else if (winnerOfRound === "player") {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". You win!";
    }
    else {
        message = "You chose " + playerMove + ". The computer chose " + computerMove + ". You lose.";
    }
    return message;
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let gameWinner = "";
    
//     for (let i = 0; i < 5; i++) {
//         let question = prompt("Do you choose rock, paper, or scissors?");
//         let roundWinner = playRound(question.toLowerCase(),getComputerChoice());
        
//         if (roundWinner === "tie") {
//             playerScore++;
//             computerScore++;
//         }
//         else if (roundWinner === "player") {
//             playerScore++;
//         }
//         else {
//             computerScore++;
//         }
//         console.log(roundWinner + " won this round");
//     }

//     if (playerScore === computerScore) {
//         gameWinner = "It is a tie";
//     }
//     else if (playerScore > computerScore) {
//         gameWinner = "player wins!";
//     }
//     else {
//         gameWinner = "computer wins!";
//     }

//     return gameWinner;
// }


//console.log(playRound("rock",getComputerChoice()));

