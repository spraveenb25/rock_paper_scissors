let humanScore = 0;
let computerScore = 0;
let numberOfGamesPlayed = 0;
let humanInput ="";


function getComputerChoice(){
let x =  Math.floor(Math.random()*3);
    if (x == 0)
        return "rock"
    else if (x == 1)
        return "paper"
    else 
        return "scissors"
}

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

const forButtons = document.querySelector("#forButtons");
forButtons.style.border = "1px black solid";
forButtons.appendChild(rockButton);
forButtons.appendChild(paperButton);
forButtons.appendChild(scissorsButton);



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
    const computerChoice = getComputerChoice();

    if ((humanChoice == "rock" && computerChoice == "paper")||
        (humanChoice == "paper" && computerChoice == "scissors")||
    (humanChoice == "scissors" && computerChoice == "rock")){
        computerScore++;
        return `${computerChoice} beats ${humanChoice}. Computer Wins!`;
    }

    else if ((computerChoice == "rock" && humanChoice == "paper")||
        (computerChoice == "paper" && humanChoice == "scissors")||
        (computerChoice == "scissors" && humanChoice == "rock")){
        humanScore++;
        return `Congratulations.. ${humanChoice} beats ${computerChoice}. You Win!`;
    }

    else
        return "It is a draw";
}


// //while(numberOfGamesPlayed<=5){
//     const humanSelection = getHumanChoice()

    // console.log(humanSelection)
    // const result = document.createElement("p")
    // result.innerHTML = playRound(humanSelection);
    console.log(humanScore);
    console.log(computerScore);
    numberOfGamesPlayed++;
//}
