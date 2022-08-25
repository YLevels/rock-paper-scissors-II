//starts the game when "Begin Game" is pushed
const gameContainer = document.querySelector(".game-container");
const gameStart = document.querySelector(".begingame")

function startGame () {
    gameContainer.style.display="flex";
    gameStart.style.display="none";
}

gameStart.addEventListener("click", startGame);

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

  //returns the player choice for each round
let playerChoice = "";
const rockChoice = document.querySelector(".rock-choice");
const paperChoice = document.querySelector(".paper-choice");
const scissorsChoice = document.querySelector(".scissors-choice");
let result = "";


let computerMove = "";



//plays a single round of the game
function playRound(playerSelection, computerSelection) {

    let winner = "";

    if (playerChoice === computerMove) {
        winner = "tie";
    }

    if ((playerChoice === "rock" && computerMove === "scissors") || (playerChoice === "paper" && computerMove === "rock") || (playerChoice === "scissors" && computerMove === "paper")) {
        winner = "player";
    }

    if ((playerChoice === "rock" && computerMove === "paper") || (playerChoice === "paper" && computerMove === "scissors") || (playerChoice === "scissors" && computerMove === "rock")) {
        winner = "computer";
    }

    return winner;
}

function displayResults () {
    let message = "";

    if (result === "tie") {
        message = "You chose " + playerChoice + ". The computer chose " + computerMove + ". It is a tie.";
    }
    else if (result === "player") {
        message = "You chose " + playerChoice + ". The computer chose " + computerMove + ". You win!";
    }
    else {
        message = "You chose " + playerChoice + ". The computer chose " + computerMove + ". You lose.";
    }
    return message;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner = "";
    let gameWinner = "";
    
    for (let i = 0; i < 5; i++) {

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

let resultOfRound = document.querySelector(".results");

rockChoice.addEventListener("click", () => {
    playerChoice = "rock";
    computerMove = getComputerChoice();
    result = playRound(playerChoice, computerMove);
    resultOfRound.textContent = displayResults();
    console.log(displayResults());
});

paperChoice.addEventListener("click", () => {
    playerChoice = "paper";
    result = playRound(playerChoice, computerMove);
    resultOfRound.textContent = displayResults();
    console.log(displayResults());
});

scissorsChoice.addEventListener("click", () => {
    playerChoice = "scissors";
    result = playRound(playerChoice, computerMove);
    resultOfRound.textContent = displayResults();
    console.log(displayResults());
});
