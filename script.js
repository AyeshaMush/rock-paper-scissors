//welcome message and game rules
// alert("Welcome to this game of rock, paper and scissors!");
// alert("You will be playing 5 rounds against the computer. Remember that rock crushes scissors, scissors cut paper, and paper covers rock.");

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