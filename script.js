// DOM
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result-span");
const buttons = document.querySelectorAll("button");

buttons.forEach((eachBtn) => {
  eachBtn.addEventListener("click", () => {
    let rock = eachBtn.dataset.rock;
    let paper = eachBtn.dataset.paper;
    let scissors = eachBtn.dataset.scissors;
    if (rock) playRound(rock);
    if (paper) playRound(paper);
    if (scissors) playRound(scissors);
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
const PLAYER_WIN_ROUND = `You Won this round!`;
const COMP_WIN_ROUND = `You Lose this round!`;
const DRAW = `It's Draw!`;
const PLAYER_WIN_GAME = `You Won this game! Congratulations!`;
const COMP_WIN_GAME = `You Lose this game! Try again!`;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoise();
  if (playerSelection === computerSelection) {
    result.textContent = `${DRAW} You have ${playerSelection} and Computer have ${computerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result.textContent = `${PLAYER_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    result.textContent = `${PLAYER_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result.textContent = `${PLAYER_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`;
  } else
    result.textContent = `${COMP_WIN_ROUND} You have ${playerSelection} and Computer have ${computerSelection}`;
}
