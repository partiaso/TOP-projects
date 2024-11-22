const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const result = document.querySelector(".result-container");





let choice;
function getComputerChoice() {
    ranNumber = Math.floor(Math.random() * 3)
    if (ranNumber === 0) {
        choice = "Rock";
        console.log("CPU ha elegido ROCK")
    }
    else if (ranNumber === 1) {
        choice = "Paper";
        console.log("CPU ha elegido PAPER")
    }
    else if (ranNumber === 2) {
        choice = "Scissors"
        console.log("CPU ha elegido SCISSORS")
    }
    else alert("Wrong input, the only values are 'Rock' 'Paper' and 'Scissors'")
}



let myChoice;
let humanScore = 0;
let computerScore = 0;
let winOrLose = "";

winOrLose = ""

function playRound() {
    if (myChoice == "rock" && choice == "Rock") {
        console.log("Empate");
        winOrLose = "Empate";
        humanScore;
        computerScore;
    }
    else if (myChoice == "paper" && choice == "Rock") {
        console.log(`You WIN`);
        winOrLose = "WIN";
        humanScore++;
    }
    else if (myChoice == "scissors" && choice == "Rock") {
        console.log(`You LOSE`);
        winOrLose = "LOSE";
        computerScore++;
    }
    else if (myChoice == "rock" && choice == "Paper") {
        console.log(`You LOSE`);
        winOrLose = "LOSE";
        computerScore++;
    }
    else if (myChoice == "paper" && choice == "Paper") {
        console.log("Empate");
        winOrLose = "Empate";
        humanScore;
        computerScore;
    }
    else if (myChoice == "scissors" && choice == "Paper") {
        console.log("You WIN");
        winOrLose = "WIN";
        humanScore++;
    }
    else if (myChoice == "rock" && choice == "Scissors") {
        console.log("You WIN");
        winOrLose = "WIN";
        humanScore++;
    }
    else if (myChoice == "paper" && choice == "Scissors") {
        console.log("You LOSE");
        winOrLose = "LOSE";
        computerScore++;
    }
    else if (myChoice == "scissors" && choice == "Scissors") {
        console.log("Empate");
        winOrLose = "Empate";
        humanScore;
        computerScore;
    }
    else "ERROR"
}



function ganador() {
    if (humanScore == 5) {
        gameWinner.textContent = "YOU HAVE WON THE GAME!";
        result.appendChild(gameWinner);
        console.log("YOU HAVE WON THE GAME!");
    }
    else if (computerScore == 5) {
        gameWinner.textContent = "YOU HAVE LOST THE GAME :(";
        result.appendChild(gameWinner);
        console.log("YOU HAVE LOST THE GAME :(");
    } 
}



//todo  ------ Botones ------  //

const playerChoice = document.createElement("p");
result.appendChild(playerChoice);

const cpuChoice = document.createElement("p");
result.appendChild(cpuChoice);

const roundWinner = document.createElement("p");
result.appendChild(roundWinner);

const gameWinner = document.createElement("p");
result.appendChild(gameWinner);


// rockBtn.addEventListener("click", () => {
//     result.removeChild(playerChoice);
//     result.removeChild(cpuChoice);
//     result.removeChild(roundWinner);
//     myChoice = "rock";
//     result.appendChild(playerChoice);
//     playerChoice.textContent = "Has elegido Rock";
//     getComputerChoice();
//     cpuChoice.textContent = `CPU ha elegido ${choice}`;
//     result.appendChild(cpuChoice);
//     playRound();
//     roundWinner.textContent = `${winOrLose}`;
//     result.appendChild(roundWinner);
//     console.log("Elegiste rock");});



// paperBtn.addEventListener("click", () => {
//     result.removeChild(playerChoice);
//     result.removeChild(cpuChoice);
//     result.removeChild(roundWinner);
//     myChoice = "paper";
//     result.appendChild(playerChoice);
//     playerChoice.textContent = "Has elegido Paper";
//     getComputerChoice();
//     cpuChoice.textContent = `CPU ha elegido ${choice}`;
//     result.appendChild(cpuChoice);
//     playRound();
//     roundWinner.textContent = `${winOrLose}`;
//     result.appendChild(roundWinner);
//     console.log("Elegiste paper");})



// scissorsBtn.addEventListener("click", () => {
//     result.removeChild(playerChoice);
//     result.removeChild(cpuChoice);
//     result.removeChild(roundWinner);
//     myChoice = "scissors";
//     result.appendChild(playerChoice);
//     playerChoice.textContent = "Has elegido Scissors";
//     getComputerChoice();
//     cpuChoice.textContent = `CPU ha elegido ${choice}`;
//     result.appendChild(cpuChoice);
//     playRound();
//     roundWinner.textContent = `${winOrLose}`;
//     result.appendChild(roundWinner);
//     console.log("Elegiste scissors");})

function winner() {
    rockBtn.addEventListener("click", () => {
        result.removeChild(playerChoice);
        result.removeChild(cpuChoice);
        result.removeChild(roundWinner);
        myChoice = "rock";
        result.appendChild(playerChoice);
        playerChoice.textContent = "Has elegido Rock";
        getComputerChoice();
        cpuChoice.textContent = `CPU ha elegido ${choice}`;
        result.appendChild(cpuChoice);
        playRound();
        roundWinner.textContent = `${winOrLose}`;
        result.appendChild(roundWinner);
        console.log("Elegiste rock");
        console.log(humanScore);
        console.log(computerScore);
        ganador();
    });

    paperBtn.addEventListener("click", () => {
        result.removeChild(playerChoice);
        result.removeChild(cpuChoice);
        result.removeChild(roundWinner);
        myChoice = "paper";
        result.appendChild(playerChoice);
        playerChoice.textContent = "Has elegido Paper";
        getComputerChoice();
        cpuChoice.textContent = `CPU ha elegido ${choice}`;
        result.appendChild(cpuChoice);
        playRound();
        roundWinner.textContent = `${winOrLose}`;
        result.appendChild(roundWinner);
        console.log("Elegiste paper");
        console.log(humanScore);
        console.log(computerScore);
        ganador();
    })

    scissorsBtn.addEventListener("click", () => {
        result.removeChild(playerChoice);
        result.removeChild(cpuChoice);
        result.removeChild(roundWinner);
        myChoice = "scissors";
        result.appendChild(playerChoice);
        playerChoice.textContent = "Has elegido Scissors";
        getComputerChoice();
        cpuChoice.textContent = `CPU ha elegido ${choice}`;
        result.appendChild(cpuChoice);
        playRound();
        roundWinner.textContent = `${winOrLose}`;
        result.appendChild(roundWinner);
        console.log("Elegiste scissors");
        console.log(humanScore);
        console.log(computerScore);
        ganador();
    }); 
}

winner();



