//welcome message and game rules
// alert("Welcome to this game of rock, paper and scissors!");
// alert("You will be playing 5 rounds against the computer. Remember that rock crushes scissors, scissors cut paper, and paper covers rock.");

//score counters
let humanScore=0;
let computerScore=0;

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
function getHumanChoice(){
    //toLowerCase() method used to make inputs case insensitive
    let playerChoice=prompt("Choose rock, paper or scissor(s): ","").toLowerCase();
    if(playerChoice==="rock"){
        return "rock";
    }
    else if(playerChoice==="paper"){
        return "paper";
    }
    else if(playerChoice==="scissor" || playerChoice==="scissors"){
        return "scissor";
    }
    else{
        alert("Invalid Choice! Refresh the game to try again!");
    }
}

//function to play a single round of rock, paper and scissors
function playRound(humanChoice,computerChoice){
//human winning choices
if(humanChoice==="rock" && computerChoice=="scissor"){
    humanScore++;
    alert("You win! Rock beats scissor! ");
}
else if(humanChoice==="paper" && computerChoice=="rock"){
    humanScore++;
    alert("You win! Paper beats rock!");
}
else if(humanChoice==="scissor" && computerChoice=="paper"){
    humanScore++;
    alert("You win! Scissor beats paper!");
}
//computer winning choices
else if(computerChoice==="rock" && humanChoice=="scissor"){
    computerScore++;
    alert("You lose! Rock beats scissor!");
}
else if(computerChoice==="paper" && humanChoice=="rock"){
    computerScore++;
    alert("You lose! Paper beats rock!");
}
else if(computerChoice==="scissor" && humanChoice=="paper"){
    computerScore++;
    alert("You lose! Scissor beats paper!");
}
}

//test code
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

