// DOM
const player = document.querySelector(".player-span");
const computer = document.querySelector(".computer-span");
const buttons = document.querySelectorAll("button");
const rockButton = document.querySelector(".rock");
const result = document.querySelector(".result");
const finalText = document.querySelector(".final-text");

let playerScore = 0;
let computerScore = 0;

// helper function
function setDisableButton() {
  buttons.forEach((el) => {
    el.setAttribute("id", "disabled");
    el.disabled = true;
  });
}

buttons.forEach((eachBtn) => {
  eachBtn.addEventListener("click", () => {
    let rock = eachBtn.dataset.rock;
    let paper = eachBtn.dataset.paper;
    let scissors = eachBtn.dataset.scissors;
    if (rock) {
      playRound(rock);
      playGame();
    }
    if (paper) {
      playRound(paper);
      playGame();
    }

    if (scissors) {
      playRound(scissors);
      playGame();
    }
  });
});

// Computer random output between Rock, Paper, Scissors
function getComputerChoise() {
  let arr = ["Rock", "Paper", "Scissors"];
  let calcRandom = Math.floor(Math.random() * arr.length);
  switch (calcRandom) {
    case 0:
      return arr[0];
    case 1:
      return arr[1];
    case 2:
      return arr[2];
  }
  return calcRandom;
}

// CONST variables
const PLAYER_WIN_ROUND = `You Won!`;
const COMP_WIN_ROUND = `You Lose!`;
const DRAW = `It's Draw!`;
const PLAYER_WIN_GAME = `You Won this game! Congratulations!`;
const COMP_WIN_GAME = `You Lose this game! Try again!`;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoise();
  if (playerSelection === computerSelection) {
    return (result.textContent = `${DRAW} You have ${playerSelection} and Computer have ${computerSelection}`);
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    player.textContent = ++playerScore;
    return (result.textContent = `${PLAYER_WIN_ROUND} You have ${playerSelection} Computer have ${computerSelection}`);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    player.textContent = ++playerScore;
    return (result.textContent = `${PLAYER_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`);
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    player.textContent = ++playerScore;
    return (result.textContent = `${PLAYER_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`);
  } else {
    computer.textContent = ++computerScore;
    result.textContent = `${COMP_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`;
  }
}

function playGame() {
  if (playerScore >= 5 && computerScore < 5) {
    finalText.classList.toggle("hidden");
    finalText.classList.toggle("win");
    finalText.textContent = "you win";
    setDisableButton();
  } else if (computerScore >= 5 && playerScore < 5) {
    finalText.classList.toggle("hidden");
    finalText.classList.toggle("lose");
    finalText.textContent = "you lose";
    // result.textContent = "Game over! You lost! Try again!";
    setDisableButton();
  } else if (computerScore === 5 && playerScore === 5) {
    result.textContent = `Game over! It's a tie!`;
    setDisableButton();
  }
}
