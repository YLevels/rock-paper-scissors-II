//starts the game when "Begin Game" is pushed
const gameContainer = document.querySelector(".game-container");
const gameStart = document.querySelector(".begingame")

function showGame () {
    gameContainer.style.display="flex";
    gameStart.style.display="none";
}

gameStart.addEventListener("click", showGame);

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

  var playerChoices = document.querySelectorAll(".choice");
  for (i = 0; i < playerChoices.length; i++) {
    playerChoices.item(i).addEventListener("click", getPlayerChoice, true);
  }

  //returns the player choice for each round
  function getPlayerChoice() {
    let playerChoice = "";
    const rockChoice = document.getElementById("rock-button");
    const paperChoice = document.getElementById("paper-button");
    const scissorsChoice = document.getElementById("scissors-button");

    rockChoice.addEventListener("click", () => {
        playerChoice = "rock";
        console.log(playerChoice);
    });

    paperChoice.addEventListener("click", () => {
        playerChoice = "paper";
        console.log(playerChoice);
    });

    scissorsChoice.addEventListener("click", () => {
        playerChoice = "scissors";
        console.log(playerChoice);
    });

    return playerChoice;
  }


//   rockChoice.addEventListener("click", () => {
//     playerChoice = "rock";
//     computerMove = getComputerChoice();
//     result = playRound(playerChoice, computerMove);
//     resultOfRound.textContent = displayResults();
//     updateScore();
//     declareWinner();
//     console.log(playerScore);
// console.log(computerScore);
// console.log(winner);

// });

// paperChoice.addEventListener("click", () => {
//     playerChoice = "paper";
//     computerMove = getComputerChoice();
//     result = playRound(playerChoice, computerMove);
//     resultOfRound.textContent = displayResults();
//     updateScore();
//     declareWinner();
//     console.log(playerScore);
// console.log(computerScore);
// console.log(winner);
    //result = playRound(playerChoice, computerMove);
    //resultOfRound.textContent = displayResults();
// });

// scissorsChoice.addEventListener("click", () => {
//     playerChoice = "scissors";
//     computerMove = getComputerChoice();
//     result = playRound(playerChoice, computerMove);
//     resultOfRound.textContent = displayResults();
//     updateScore();
//     declareWinner();
//     console.log(playerScore);
// console.log(computerScore);
// console.log(winner);
    //result = playRound(playerChoice, computerMove);
    //resultOfRound.textContent = displayResults();
// });






let playerChoice = "";

let result = "";

let computerMove = "";

let winner = "";
//plays a single round of the game
function playRound(playerSelection, computerSelection) {

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
    //let roundWinner = playRound(playerChoice, computerMove);
    //use roundwinner from playRound()
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
let playerScore = parseInt(document.querySelector(".pscore").textContent);
let computerScore = parseInt(document.querySelector(".cscore").textContent);

function trackPlayerScore () {
    //if (winner !== "player") return;
    if (winner === "player") {
        playerScore++;
    } 
    return playerScore;
}

function trackComputerScore () {
    //if (winner !== "computer") return;
    if (winner === "computer") {
        computerScore++;
    }
    return computerScore;
}

function updateScore() {
    if (result === "player") {
        playerScore++;
        return playerScore;
    }
    if (result === "computer") {
        computerScore++;
        return computerScore;
    }
    else return;
}

function declareWinner () {
    if (playerScore < 5 || computerScore < 5) {
        return;
    }
    if (playerScore === 5) {
        winner = player;
    }
    if (computerScore === 5) {
        winner = computer;
    }
    return winner;
}




