"use strict";

function getComputerChoice() {
  const getRandomNum = Math.floor(Math.random() * 3 + 1);
  switch (getRandomNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return "Error message";
  }
}

const PLAYER_WIN_ROUND = `You Won this round!`;
const COMP_WIN_ROUND = `You Lose this round!`;
const DRAW = `It's Draw!`;
const PLAYER_WIN_GAME = `You Won this game! Congratulations!`;
const COMP_WIN_GAME = `You Lose this game! Try again!`;

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt(playerSelection);

  // if user tap 'ESC' btn, click 'Cancel' or 'OK' without data inside
  if (playerSelection === "" || playerSelection === null) {
    return `Cancel input`;
  }

  // implement case-insensitive of playerSelection parameter
  playerSelection = playerSelection.toLowerCase();
  const firstLetter = playerSelection[0].toUpperCase();
  playerSelection = playerSelection.replace(playerSelection[0], firstLetter);

  if (playerSelection === computerSelection) {
    const draw = `${DRAW} Opponent had ${computerSelection} and you ${playerSelection}`;
    return draw;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
  } else {
    return `${COMP_WIN_ROUND} Computer had ${computerSelection} and you ${playerSelection}`;
  }
}

function gameOver() {
  if (playerScore > computerScore) {
    return PLAYER_WIN_GAME;
  } else if (playerScore < computerScore) {
    return COMP_WIN_GAME;
  } else if (playerScore === computerScore) {
    return DRAW;
  }
}

function game() {
  const gameRound = playRound();
  if (gameRound.match(`${PLAYER_WIN_ROUND}`)) {
    ++playerScore;
  } else if (gameRound.match(`${COMP_WIN_ROUND}`)) {
    ++computerScore;
  }
  console.log(gameRound);
  console.log(playerScore, computerScore);
}

console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(gameOver());
