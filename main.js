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

let a = getHumanChoice();
