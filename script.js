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
console.log(getComputerChoice());