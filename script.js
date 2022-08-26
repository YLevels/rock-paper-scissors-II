const gameContainer = document.querySelector(".game-container");
const gameStart = document.querySelector(".begingame")
const resultsContainer = document.querySelector(".results-container");
const gamereset = document.querySelector(".play-again");
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".cscore");
const resultOfRound = document.querySelector(".results");

//starts the game when "Begin Game" is pushed
function showGame () {
    gameContainer.style.display="flex";
    resultsContainer.style.display="flex";
    resultsContainer.style.flexDirection="column";
    gameStart.style.display="none";
}

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

gameStart.addEventListener("click", showGame);

var playerChoices = document.querySelectorAll(".choice");
  for (i = 0; i < playerChoices.length; i++) {
    playerChoices.item(i).addEventListener("click", playRound) 
    };


//gets playerChoice by click on button
let playerChoice = "";
const rockChoice = document.getElementById("rock-button");
const paperChoice = document.getElementById("paper-button");
const scissorsChoice = document.getElementById("scissors-button");

    rockChoice.addEventListener("click", () => {
        playerChoice = "rock";
        console.log(playerChoice);
        return playerChoice;
  });
   
    paperChoice.addEventListener("click", () => {
        playerChoice = "paper";
        console.log(playerChoice);
        return playerChoice;
    });
    
    scissorsChoice.addEventListener("click", () => { 
        playerChoice = "scissors";
        console.log(playerChoice);
        return playerChoice;
    });
 
let winner = ""; 
let playerScore = 0;
let computerScore = 0;
let computerMove = "";
let gameWinner = "";
let roundNumber = 1;  

function playRound() {
    
if (roundNumber <= 5) {
    computerMove = getComputerChoice();

    if (playerChoice === computerMove) {
        winner = "tie";

        resultOfRound.textContent += "\n" + displayResults(winner);
        console.log("Player Score is:" + playerScore);
        console.log("Computer Score is:" + computerScore);
        console.log("The winner of" + roundNumber + "is: noone. It is a " + winner);
        roundNumber++;
    }

    if ((playerChoice === "rock" && computerMove === "scissors") || (playerChoice === "paper" && computerMove === "rock") || (playerChoice === "scissors" && computerMove === "paper")) {
        winner = "player";
        resultOfRound.textContent += "\n" + displayResults(winner);
        playerScore++;
        pscore.textContent = playerScore;
        console.log("Player Score is:" + playerScore);
        console.log("Computer Score is:" + computerScore);
        console.log("The winner of" + roundNumber + "is:" + winner);

        roundNumber++;
    }

    if ((playerChoice === "rock" && computerMove === "paper") || (playerChoice === "paper" && computerMove === "scissors") || (playerChoice === "scissors" && computerMove === "rock")) {
        winner = "computer";
        resultOfRound.textContent += "\n" + displayResults(winner);
        computerScore++;
        cscore.textContent = computerScore;
        console.log("Player Score is:" + playerScore);
        console.log("Computer Score is:" + computerScore);
        console.log("The winner of" + roundNumber + "is:" + winner);

        roundNumber++;
    }
}
 
if (roundNumber > 5) {
    if (playerScore === computerScore) {
        gameWinner = "It is a tie";
    }
    else if (playerScore > computerScore) {
        gameWinner = "player wins!";
    }
    else {
        gameWinner = "computer wins!";
    }
    gameContainer.style.display="none";
    gamereset.style.display="flex";
    console.log(gameWinner);

    return gameWinner;
}
    //return winner;
}

function displayResults (winner) {
    let message = "";

    if (winner === "tie") {
        message = "You chose " + playerChoice + ". The computer chose " + computerMove + ". It is a tie.";
    }
    else if (winner === "player") {
        message = "You chose " + playerChoice + ". The computer chose " + computerMove + ". You win!";
    }
    else {
        message = "You chose " + playerChoice + ". The computer chose " + computerMove + ". You lose.";
    }
    return message;
}



