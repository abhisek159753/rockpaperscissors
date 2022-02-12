function computerPlay{
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

function playerPlay(){
    let playerChoice = prompt("Please type Rock, Paper, or Scissors: ");
    return playerChoice.toLowerCase();
}
/*function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("Computer chose " + computerSelection + " it's a tie!");
        return -1;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Computer chose " + computerSelection + " Player wins!");
        return 1;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Computer chose " + computerSelection + " Player wins!");
        return 1;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Computer chose " + computerSelection + " Player wins!");
        return 1;
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Computer chose " + computerSelection + " Computer wins!");
        return 2;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Computer chose " + computerSelection + " Computer wins!");
        return 2;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer chose " + computerSelection + " Computer wins!");
        return 2;
    }
    
}*/
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("Computer chose " + computerSelection + " it's a tie!");
        return -1;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        console.log("Computer chose " + computerSelection + ", Player wins!");
        return 1;
    }
    else if((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer chose " + computerSelection + ", Computer wins!");
        return 2;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i< 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        let win = playRound();
        if (win ===  1){
            playerScore++;
        }
        if(win === 2){
            computerScore++;
        }
    }
    console.log("Player Score is: " + playerScore + "\nComputer Score is: " + computerScore);
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
console.log(game());