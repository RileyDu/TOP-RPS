function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  // Options to choose from
  const options = ["rock", "paper", "scissors"];

  // Choose the option based on the random number
  const chosenOption = options[randomNum];

  // Return the chosen option
  return chosenOption;
}

function playRound(playerSelection, computerSelection) {
  
  playerSelection = playerSelection.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    if (!choices.includes(playerSelection)){
      return `Invalid choice. Please choose rock, paper, or scissors`;
    }
  if (playerSelection === computerSelection) {
    return `issa tie boi`;
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`This is just outputting the random COM choice: ${computerSelection}`);
console.log(`This is displaying the user input ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));
