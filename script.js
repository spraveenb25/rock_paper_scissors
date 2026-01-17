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

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
resetButton.disabled = true;

const forButtons = document.querySelector("#forButtons");
forButtons.style.border = "1px black solid";

resetButton.addEventListener("click",()=>{
    humanScore = 0;
    computerScore = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.disabled = true;
});

rockButton.addEventListener("click",()=>{
    humanChoice = "rock";
    const result = document.createElement("p")
    result.innerHTML = playRound(humanChoice);
    const resultDisplayDiv = document.querySelector("#resultDisplayDiv");
    resultDisplayDiv.appendChild(result);
});

paperButton.addEventListener("click",()=>{
    humanChoice = "paper";
    const result = document.createElement("p")
    result.innerHTML = playRound(humanChoice);
    const resultDisplayDiv = document.querySelector("#resultDisplayDiv");
    resultDisplayDiv.appendChild(result);
});

scissorsButton.addEventListener("click",()=>{
    humanChoice = "scissors";
    const result = document.createElement("p")
    result.innerHTML = playRound(humanChoice);
    const resultDisplayDiv = document.querySelector("#resultDisplayDiv");
    resultDisplayDiv.appendChild(result);
}); 

function playRound(humanChoice) {
    if(humanScore+computerScore <5){
        const computerChoice = getComputerChoice();

        if ((humanChoice == "rock" && computerChoice == "paper")||
            (humanChoice == "paper" && computerChoice == "scissors")||
        (humanChoice == "scissors" && computerChoice == "rock")){
            computerScore++;
            return `${computerChoice} beats ${humanChoice}. Computer Wins! - ${computerScore}`;
        }

        else if ((computerChoice == "rock" && humanChoice == "paper")||
            (computerChoice == "paper" && humanChoice == "scissors")||
            (computerChoice == "scissors" && humanChoice == "rock")){
            humanScore++;
            return `Congratulations.. ${humanChoice} beats ${computerChoice}. You Win! - ${humanScore}`;
        }

        else
            return "It is a draw";
    }
    else{
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        resetButton.disabled = false;
        if(humanScore>computerScore){
            result.innerHTML = `You - ${humanScore} : Computer ${computerScore}`
            resultDisplayDiv.appendChild(result);
            return `Game Over - You Win!`
        }
        else{
            result.innerHTML = `You - ${computerScore} : Computer ${humanScore}`
            resultDisplayDiv.appendChild(result);
            return 'Game Over - You Lose'
        }
        
    }
}


// //while(numberOfGamesPlayed<=5){
//     const humanSelection = getHumanChoice()

    // console.log(humanSelection)
    // const result = document.createElement("p")
    // result.innerHTML = playRound(humanSelection);
    // console.log(humanScore);
    // console.log(computerScore);
    // numberOfGamesPlayed++;
//}
