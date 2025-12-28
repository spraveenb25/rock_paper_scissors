let humanScore = 0;
let computerScore = 0;
let numberOfGamesPlayed = 0;


function getComputerChoice(){
let x =  Math.floor(Math.random()*3);
    if (x == 0)
        return "rock"
    else if (x == 1)
        return "paper"
    else 
        return "scissors"
}

function getHumanChoice(){
    let humanInput = prompt("Is it Rock or Paper or Scissors?");
    return humanInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        return "Paper beats Rock. Computer Wins!"
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        return "Scissors beat Paper. Computer Wins!"
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return "Rock beats Scissors. Computer Wins!"
    }
    if (computerChoice == "rock" && humanChoice == "paper"){
        humanScore++;
        return "Congratulations.. Paper beats Rock. You Win!"
    }
    else if (computerChoice == "paper" && humanChoice == "scissors"){
        humanScore++;
        return "Congratulations.. Scissors beat Paper. You Win!"
    }
    else if (computerChoice == "scissors" && humanChoice == "rock"){
        humanScore++;
        return "Congratulations.. Rock beats Scissors. You Win!"
    }

    else 
        return "It is a draw"
}

while (numberOfGamesPlayed<5){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    console.log(computerSelection)
    console.log(humanSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore);
    console.log(computerScore);
    numberOfGamesPlayed++;
}