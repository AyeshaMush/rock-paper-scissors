//score counters
let humanScore = 0;
let computerScore = 0;

//function to get computer choice
function getComputerChoice() {
    //function will generate random numbers between 0-2
    let computerRandomNumber = Math.floor(Math.random() * 3);
    switch (computerRandomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

let humanSelection;
let computerSelection;
//function to get choice from player
function getHumanChoice() {

    //rock button 
    const rockButton = document.querySelector("#rock-button");
    rockButton.addEventListener('click', () => {
        humanSelection = 'rock';
        computerSelection = getComputerChoice();
        if (computerScore === 5 || humanScore === 5) {
            finalWinner();
        }
        else {
            playRound(humanSelection, computerSelection);
            if (computerScore === 5 || humanScore === 5) {
                finalWinner();
            }
        }
    });

    //paper button
    const paperButton = document.querySelector("#paper-button");
    paperButton.addEventListener('click', () => {
        humanSelection = 'paper';
        computerSelection = getComputerChoice();
        if (computerScore === 5 || humanScore === 5) {
            finalWinner();
        }
        else {
            playRound(humanSelection, computerSelection);
            if (computerScore === 5 || humanScore === 5) {
                finalWinner();
            }
        }
    });

    //scissor button
    const scissorButton = document.querySelector("#scissor-button");
    scissorButton.addEventListener('click', () => {
        humanSelection = 'scissor';
        computerSelection = getComputerChoice();
        if (computerScore === 5 || humanScore === 5) {
            finalWinner();
        }
        else {
            playRound(humanSelection, computerSelection);
            if (computerScore === 5 || humanScore === 5) {
                finalWinner();
            }
        }
    });
}

//function to play a single round of rock, paper and scissors
function playRound(humanChoice, computerChoice) {

    //human winning choices
    if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        alert(`You win! Rock beats scissor! Your score: ${humanScore} and computer score: ${computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert(`You win! Paper beats rock! Your score: ${humanScore} and computer score: ${computerScore}`);
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        alert(`You win! Scissor beats paper! Your score: ${humanScore} and computer score: ${computerScore}`);
    }

    //computer winning choices
    else if (computerChoice === "rock" && humanChoice === "scissor") {
        computerScore++;
        alert(`You lose! Rock beats scissor! Your score: ${humanScore} and computer score: ${computerScore}`);
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        alert(`You lose! Paper beats rock! Your score: ${humanScore} and computer score: ${computerScore}`);
    }
    else if (computerChoice === "scissor" && humanChoice === "paper") {
        computerScore++;
        alert(`You lose! Scissor beats paper! Your score: ${humanScore} and computer score: ${computerScore}`);
    }

    //tie between computer and human
    else if (computerChoice === "rock" && humanChoice === "rock" || computerChoice === "paper" && humanChoice === "paper" || computerChoice === "scissor" && humanChoice === "scissor") {
        alert(`It's a tie! Your score: ${humanScore} and computer score: ${computerScore}`);
    }
}

//function to determine final winners
function finalWinner() {
    if (humanScore > computerScore) {
        alert("Congratulations! You have won the game!");
    }
    else if (humanScore < computerScore) {
        alert("You have lost the game! Try again!");
    }
    else if (humanScore === computerScore) {
        alert("It is a tie!");
    }
}

//function to play five rounds of rock paper scissors
function playGame() {

    //welcome message and game rules
    alert("Welcome to this game of rock, paper and scissors!");
    alert("You will be playing against the computer. Remember that rock beats scissors, scissors beat paper, and paper beats rocks.");


    getHumanChoice();

}

playGame();

