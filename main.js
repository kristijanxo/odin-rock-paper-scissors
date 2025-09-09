function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  if (randNum === 0) {
    return "rock";
  } else if (randNum === 1) {
    return "paper";
  } else if (randNum === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  const input = prompt("Choose by typing rock, paper or scissors: ");
  return input;
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("Rock and rock! Its a tie!");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You win! Scissors beat paper");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("Paper and paper! Its a tie!");
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beat paper");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("Scissors and scissors! Its a tie!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("human:", humanSelection);
console.log("computer:", computerSelection);

playRound(computerSelection, humanSelection);
