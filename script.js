//returns random number 0-2
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

//Assigns random number for computer to rock, paper or scissors
function computerPlay(){
    let i = getRandomInt(3);
    if(i === 0){
        return "Rock";
    }
    else if(i === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

//prompts user to make their choice and returns the responce in lowercase
function playerPlay(){
    let playerChoice = prompt("Please type Rock, Paper, or Scissors: ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

//prints return of 1 game and returns score for winner
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("Computer chose " + computerSelection + " it's a tie!");
        return 0;
    }
    else if((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")){
        console.log("Computer chose " + computerSelection + ", Player wins!");
        return 1;
    }
    else if((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")){
        console.log("Computer chose " + computerSelection + ", Computer wins!");
        return 2;
    }
    else{
        console.log("Please enter either rock, paper or scissors!");
        return -1;
    }
}

//main function for the 5 round game
function game(){
    let playerScore = 0;
    let computerScore = 0;
    //for loop to play 5 games total
    for (let i = 0; i< 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log("Round " + (i+1) + ": ");
        let win = (playRound(playerSelection, computerSelection));
        //increment score based on who won
        if (win ===  1){
            playerScore++;
        }
        else if(win === 2){
            computerScore++;
        }
        else if(win === -1){
            i--; //invalid input, repeat round
        }
    }
    console.log("Player Score is: " + playerScore + "\nComputer Score is: " + computerScore);
    //prints who won most in the 5 round game
    if(playerScore > computerScore){
        console.log("Player Wins!");
    }
    else if(playerScore < computerScore){
        console.log("Computer Wins!");
    }
    else{
        console.log("It's a draw!")
    }
}

//play game
game();