"use strict";

// Функция игрок-компьютер
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
const computerPlayer = getComputerChoice();
