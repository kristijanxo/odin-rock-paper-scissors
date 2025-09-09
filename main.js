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
  const input = prompt(
    "Type '1' for rock, '2' for paper or '3' for scissors: ",
  );
  if (input === "1") {
    return "rock";
  } else if (input === "2") {
    return "paper";
  } else if (input === "3") {
    return "scissors";
  }
}
