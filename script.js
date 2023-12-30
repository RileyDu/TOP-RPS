function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  // Options to choose from
  const options = ["Rock", "Paper", "Scissors"];

  // Choose the option based on the random number
  const chosenOption = options[randomNum];

  // Return the chosen option
  return chosenOption;
}

function playRound(playerSelection, computerSelection) {}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
