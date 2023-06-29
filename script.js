"use strict";

/*

=======

UNDERSTAND:

Мне нужно написать программу-игру "Камень, ножницы, бумага", которая на данный момент времени будет играться в консоли без графического интерфейса. 
Играть будет игрок и компьютер. 

Игра состоит из 5 раундов. каждый раунд программа должна будет записывать и обновлять результат игроков. 
По истечению 5 раундов, игра пишет сообщение со счётом и победителем.
Сообщение о результате раунда: "Ты выиграл! Камень бьет ножницы!". Сообщение о счёте: "Игрок: 1 | Компьютер: 0"

Игрок-пользователь должен иметь возможность во всплывающем окне ввести нужный ответ для игры. 
Компьютеру нужно создать отдельную подпрограмму, которая будет случайным образом выбирать между словами "камень", "ножницы" и "бумага"
Нужно создать подпрограмму сохранения очков игры

Игра должна успешно понимать ввод игроками слов без учёта регистра ("камень", "КаМЕнь", "КАМЕНЬ" и пр.)

=======

PLAN:

Q: Does your program have a user interface? What will it look like? What functionality will the interface have? 
A: CLI программа. Пока без UI
=======
What inputs will your program have? Will the user enter data or will you get input from 
somewhere else? 
A: На стороне игрока будет prompt() в котором он будет вводить данные
   На стороне второго игрока будет компьютер со своим набором данных,
   которые уже будут записанны в отдельную программу
=======
Q: What’s the desired output?
A: Ожидаемый результат это результат сравнения между данными игрока и компьютера, на основании которых появляется сообщение о выигрыше или проигрыше раунда 
   и состояние счёта на текущем раунде. 
   На 5 раунде вывести финальное сообщение об актуальном счёте и сообщение победителя игры. 
   Сообщения о выигрыше или проигрыше и счёте должны быть каждый на своей собственной строке
=======
Q: Given your inputs, what are the steps necessary to return the desired output? 
A: Ниже алгоритм задачи в псевдокоде:

PSEUDOCODE:
-------
Случайный вывод игрока компьютера:
Создать функцию 
Вычислить случайное число от 1 до 3
Если 1, то вернуть "Камень"
Если 2, то вернуть "Бумага"
Если 3, то вернуть "Ножницы"
Иначе вернуть "Ошибка программы"
-------
Подсчёт очков:
Создать функцию подсчёта
Создать переменную счёта += 1
-------
Создать переменные строки по результатам игры (напр. "Игрок выиграл")
Камень
Ножницы
Бумага
Игрок выиграл раунд "Вы победили"
Комп выиграл раунд "Вы проиграли"
Ничья "Ничья"
Игрок выиграл игру "Вы выиграли игру"
Комп выиграл игру "Вы проиграли игру"
-------
Один раунд:
Создать функцию одного раунда с двумя параметрами для игрока и компьютера
Присвоить компьютеру функцию случайного вывода игры
Сделать все инпуты от игрока с низким регистром
У игрока появляется prompt()
Если игрок и компьютер равны, то ничья
Если игрок равен камень, а комп равен ножницам, то игрок выиграл
Если игрок равен бумага, а комп равен камню, то игрок выиграл
Если игрок равен ножницы, а комп равен бумага, то игрок выиграл
Если игрок не равен ножницы, не равен бумага, не равен камень, то выведи ошибку и попроси попробовать заново
Иначе комп выиграл
*/

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

let playerNum = 0;
let computerNum = 0;

function playerScores() {
  return playerNum + 1;
}

function computerScores() {
  return computerNum + 1;
}

const PLAYER_WIN_ROUND = `You Won this round!`;
const COMP_WIN_ROUND = `You Lose this round!`;
const DRAW = `It's Draw!`;
const PLAYER_WIN_GAME = `You Won this game! Congratulations!`;
const COMP_WIN_GAME = `You Lose this game! Try again!`;
const scores = `Player Score: ${playerScores()} | Computer Score: ${computerScores()}`;
// `Player Score: ${playerScores()} | Computer Scores: ${computerNum}`;

function game() {
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

    // round of game
    if (playerSelection === computerSelection) {
      return `${DRAW} Opponent had ${computerSelection} and you ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      return `${PLAYER_WIN_ROUND} ${playerSelection} beats ${computerSelection}`;
    } else
      return `${COMP_WIN_ROUND} Opponent had ${computerSelection} and you ${playerSelection}`;
  }
  return playRound();
}

console.log(game());
// console.log(game());
// console.log(game());
// console.log(game());
// console.log(game());
