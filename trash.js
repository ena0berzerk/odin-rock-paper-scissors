// within playRound() after computerSelection
// playerSelection = prompt(playerSelection);

// console if else logic within playRound()
// if (playerSelection === computerSelection) {
//   const draw = `${DRAW} Opponent had ${computerSelection} and you ${playerSelection}`;
//   return draw;
// } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//   return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
// } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//   return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
// } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//   return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
// } else {
//   return `${COMP_WIN_ROUND} Computer had ${computerSelection} and you ${playerSelection}`;
// }

// implement case-insensitive of playerSelection parameter within playRound()
// playerSelection = playerSelection.toLowerCase();
// const firstLetter = playerSelection[0].toUpperCase();
// playerSelection = playerSelection.replace(playerSelection[0], firstLetter);

// if user tap 'ESC' btn, click 'Cancel' or 'OK' without data inside. within playRound()
// if (playerSelection === "" || playerSelection === null) {
//   return `Cancel input`;
// }

// console.log(game());
// console.log(game());
// console.log(game());
// console.log(game());
// console.log(game());
// console.log(gameOver());

// rockPaperScissors.forEach((buttons) => {
//   buttons.addEventListener("click", () => {
//     // console.log(playRound());
//     console.log(game());
//   });
// });

let playerScore = 0;
let computerScore = 0;

const PLAYER_WIN_ROUND = `You Won this round!`;
const COMP_WIN_ROUND = `You Lose this round!`;
const DRAW = `It's Draw!`;
const PLAYER_WIN_GAME = `You Won this game! Congratulations!`;
const COMP_WIN_GAME = `You Lose this game! Try again!`;

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

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
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

function gameOver() {
  if (playerScore > computerScore) {
    return PLAYER_WIN_GAME;
  } else if (playerScore < computerScore) {
    return COMP_WIN_GAME;
  } else if (playerScore === computerScore) {
    return DRAW;
  }
}

/* Мой код игры. Не могу понять как добавить раунды в игру

"use strict";

// Стартовые настройки DOM
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const message = document.querySelector(".message");
const round = document.querySelector(".round");
const score = document.querySelector(".score");
const hidden = document.querySelector(".hidden");

rock.addEventListener("click", () => {
  return playRound("Rock");
});
paper.addEventListener("click", () => {
  return playRound("Paper");
});
scissors.addEventListener("click", () => {
  return playRound("Scissors");
});

// Подсчёт очков игрока и компьютера
let playerScore = 0;
let computerScore = 0;

const PLAYER_WIN_ROUND = `You Won this round!`;
const COMP_WIN_ROUND = `You Lose this round!`;
const DRAW = `It's Draw!`;
const PLAYER_WIN_GAME = `You Won this game! Congratulations!`;
const COMP_WIN_GAME = `You Lose this game! Try again!`;

// Сторона компьютера
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

// Раунд игры
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    hidden.classList.remove("hidden");
    round.textContent = `${DRAW} Opponent had ${computerSelection} and you ${playerSelection}`;
    return (score.textContent = `${playerScore}:${computerScore}`);
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    hidden.classList.remove("hidden");
    round.textContent = `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
    return (score.textContent = `${++playerScore}:${computerScore}`);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    hidden.classList.remove("hidden");
    round.textContent = `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
    return (score.textContent = `${++playerScore}:${computerScore}`);
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    hidden.classList.remove("hidden");
    round.textContent = `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
    return (score.textContent = `${++playerScore}:${computerScore}`);
  } else {
    hidden.classList.remove("hidden");
    round.textContent = `${COMP_WIN_ROUND} Computer had ${computerSelection} and you ${playerSelection}`;
    return (score.textContent = `${playerScore}:${++computerScore}`);
  }
}

function game() {
  const oneround = playRound();
  for (let i = 0; i < 5; i++) {
    if (score.textContent === 5 && playerScore === 5) {
      return (round.textContent = "YOU WIN THE GAME");
    } else if (score.textContent === 5 && computerScore === 5) {
      return (round.textContent = "COMPUTER WINS!");
    }
  }
  return oneround;
}

game();






*/
