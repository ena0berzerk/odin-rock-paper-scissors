"use strict";

// 1)
// Function computer-player
// СОЗДАТЬ функцию getComputerChoice()
function getComputerChoice() {
  // СОЗДАТЬ переменную х = Рандомное число из 3
  const randomString = Math.floor(Math.random() * 3 + 1);
  // Если х === 1, то 'rock'
  switch (randomString) {
    case 1:
      return "Rock";
    // Если х === 2, то 'paper'
    case 2:
      return "Paper";
    // Если х === 3, то 'scissors'
    case 3:
      return "Scissors";
    // При какой-нибудь ошибке на всякий случай
    default:
      console.log("Error");
  }
}

// 2)
// One round game logic
function gameRound(playerSelection, computerSelection) {
  // Function parameter is case-insensitive
  function caseInsensitive() {
    playerSelection = playerSelection.toLowerCase();
    const firstLetterUp = playerSelection[0].toUpperCase();
    return playerSelection.replace(playerSelection[0], firstLetterUp);
  }
  playerSelection = caseInsensitive();
  computerSelection = getComputerChoice();
  console.log(`Log run getComputerChoice(): ${computerSelection}`);
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "Paper") {
      return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection === "Rock") {
      return `Draw! ${playerSelection} can't beat ${computerSelection}! Try again!`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "Scissors") {
      return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection === "Paper") {
      return `Draw! ${playerSelection} can't beat ${computerSelection}! Try again!`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "Rock") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "Scissors") {
      return `Draw! ${playerSelection} can't beat ${computerSelection}! Try again!`;
    }
  } else {
    return "Error message";
  }
}

console.log(gameRound("scisSOrs"));
