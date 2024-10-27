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

//function to get choice from player
function getHumanChoice() {
    //toLowerCase() method used to make inputs case insensitive
    let playerChoice = prompt("Choose rock, paper or scissor(s): ", "").toLowerCase();
    if (playerChoice === "rock") {
        return "rock";
    }
    else if (playerChoice === "paper") {
        return "paper";
    }
    else if (playerChoice === "scissor" || playerChoice === "scissors") {
        return "scissor";
    }
    else {
        alert("Invalid Choice! Refresh the game to try again!");
        return null;
    }
}

//function to play five rounds of rock paper scissors
function playGame() {

    //score counters
    let humanScore = 0;
    let computerScore = 0;

    //welcome message and game rules
    alert("Welcome to this game of rock, paper and scissors!");
    alert("You will be playing 5 rounds against the computer. Remember that rock beats scissors, scissors beat paper, and paper beats rocks.");

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

    //removed the logic of playing 5 rounds

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        if (humanSelection === null) {
            return;
        }
        playRound(humanSelection, computerSelection);

    finalWinner();
}

playGame();

