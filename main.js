const resultsContainer = document.querySelector("#results-container");

const winLooseMessage = document.createElement("p");
winLooseMessage.textContent =
  "Take your pick and the bot will too. First to five poins wins.";
resultsContainer.appendChild(winLooseMessage);

const runningScore = document.createElement("p");
resultsContainer.appendChild(runningScore);

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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === "rock" && humanChoice === "paper") {
      winLooseMessage.textContent = "You win! Paper beats rock";
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      winLooseMessage.textContent = "You lose! Rock beats scissors";
      computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "rock") {
      winLooseMessage.textContent = "Rock and rock! Its a tie!";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      winLooseMessage.textContent = "You win! Scissors beat paper";
      humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      winLooseMessage.textContent = "You lose! Paper beats rock";
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
      winLooseMessage.textContent = "Paper and paper! Its a tie!";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      winLooseMessage.textContent = "You win! Rock beats scissors";
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      winLooseMessage.textContent = "You lose! Scissors beat paper";
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
      winLooseMessage.textContent = "Scissors and scissors! Its a tie!";
    }
  }

  const buttons = document.querySelector("#button-container");

  buttons.addEventListener("click", (event) => {
    let computerSelection = getComputerChoice();
    let humanSelection = "";

    switch (event.target.id) {
      case "rock":
        humanSelection = "rock";
        break;
      case "paper":
        humanSelection = "paper";
        break;
      case "scissors":
        humanSelection = "scissors";
        break;
    }

    playRound(computerSelection, humanSelection);

    runningScore.textContent = `Current score = Human ${humanScore}:${computerScore} Computer`;

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore === 5) {
        winLooseMessage.textContent = "🎉 You won the game!";
      } else {
        winLooseMessage.textContent = "💀 You lost the game.";
      }

      buttons.style.pointerEvents = "none";
    }
  });
}

playGame();
