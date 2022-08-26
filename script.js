//starts the game when "Begin Game" is pushed
const gameContainer = document.querySelector(".game-container");
const gameStart = document.querySelector(".begingame")
const resultsContainer = document.querySelector(".results-container");
const gamereset = document.querySelector(".play-again");

function showGame () {
    gameContainer.style.display="flex";
    resultsContainer.style.display="flex";
    resultsContainer.style.flexDirection="column";
    gameStart.style.display="none";
}

gameStart.addEventListener("click", showGame);

var playerChoices = document.querySelectorAll(".choice");
  for (i = 0; i < playerChoices.length; i++) {
    playerChoices.item(i).addEventListener("click", playRound) 
    };

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
let computerMove = getComputerChoice();
let gameWinner = "";
let roundNumber = 1;  

function playRound() {
    
if (roundNumber <= 5) {
    if (playerChoice === computerMove) {
        winner = "tie";

        resultOfRound.textContent = displayResults();
        console.log("Player Score is:" + playerScore);
        console.log("Computer Score is:" + computerScore);
        console.log("The winner of" + roundNumber + "is: noone. It is a " + winner);
        roundNumber++;
    }

    if ((playerChoice === "rock" && computerMove === "scissors") || (playerChoice === "paper" && computerMove === "rock") || (playerChoice === "scissors" && computerMove === "paper")) {
        winner = "player";
        resultOfRound.textContent = displayResults();
        playerScore++;
        console.log("Player Score is:" + playerScore);
        console.log("Computer Score is:" + computerScore);
        console.log("The winner of" + roundNumber + "is:" + winner);

        roundNumber++;
    }

    if ((playerChoice === "rock" && computerMove === "paper") || (playerChoice === "paper" && computerMove === "scissors") || (playerChoice === "scissors" && computerMove === "rock")) {
        winner = "computer";
        resultOfRound.textContent = displayResults();
        computerScore++;
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

let resultOfRound = document.querySelector(".results");

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

// function game() {

//         //let roundWinner = playRound(playerChoice, computerMove);
//         //use roundwinner from playRound()

        

    

// }
  //returns the player choice for each round

  //playerChoices.addEventListener("click", playRound);

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


//let playerChoice = "";

let result = "";



//plays a single round of the game



//let playerScore = parseInt(document.querySelector(".pscore").textContent);
//let computerScore = parseInt(document.querySelector(".cscore").textContent);

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




