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

    const outputText = document.getElementById('output-text');
    //human winning choices
    if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        outputText.innerText = `You win! Rock beats scissor! Your score: ${humanScore} and computer score: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        outputText.innerText = `You win! Paper beats rock! Your score: ${humanScore} and computer score: ${computerScore}`;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        outputText.innerText = `You win! Scissor beats paper! Your score: ${humanScore} and computer score: ${computerScore}`;
    }

    //computer winning choices
    else if (computerChoice === "rock" && humanChoice === "scissor") {
        computerScore++;
        outputText.innerText = `You lose! Rock beats scissor! Your score: ${humanScore} and computer score: ${computerScore}`;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        outputText.innerText = `You lose! Paper beats rock! Your score: ${humanScore} and computer score: ${computerScore}`;
    }
    else if (computerChoice === "scissor" && humanChoice === "paper") {
        computerScore++;
        outputText.innerText = `You lose! Scissor beats paper! Your score: ${humanScore} and computer score: ${computerScore}`;
    }

    //tie between computer and human
    else if (computerChoice === "rock" && humanChoice === "rock" || computerChoice === "paper" && humanChoice === "paper" || computerChoice === "scissor" && humanChoice === "scissor") {
        outputText.innerText = `It's a tie! Your score: ${humanScore} and computer score: ${computerScore}`;
    }
}

//function to determine final winners
function finalWinner() {
    const outputText = document.getElementById('output-text');
    if (humanScore > computerScore) {
        outputText.innerText = "Congratulations! You have won the game!";
    }
    else if (humanScore < computerScore) {
        outputText.innerText = "You have lost the game! Try again!";
    }
    else if (humanScore === computerScore) {
        outputText.innerText = "It is a tie!";
    }

    const playAgainButton=document.getElementById("play-again-button");
    playAgainButton.style.display = 'block';


    playAgainButton.addEventListener('click', () => {
        resetGame();
        playAgainButton.style.display = 'none';
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    const outputText = document.getElementById('output-text');
    outputText.innerText = `Game reset. Your score: 0 and computer score: 0`;
}

function playGame() {

    getHumanChoice();

}

playGame();

