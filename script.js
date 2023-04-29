"use strict";

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btnReset = document.querySelector(".reset");
const btnCompMove = document.querySelector(".comp-move");
const dispWin = document.getElementById("win");
const dispLoss = document.getElementById("loss");
const dispTie = document.getElementById("tie");

const result = {
  win: 0,
  losses: 0,
  ties: 0,
};

const computerMove = function () {
  const random = Math.random();
  let move = undefined;
  if (random < 1 / 3) {
    move = "rock";
    btnCompMove.innerHTML = "Rock🤘";
  } else if (random > 1 / 3 && random < 2 / 3) {
    move = "paper";
    btnCompMove.innerHTML = "Paper🧻";
  } else {
    move = "scissors";
    btnCompMove.innerHTML = "Scissors✂";
  }
  return move;
};

const displayResult = function () {
  dispWin.value = result.win;
  dispLoss.value = result.losses;
  dispTie.value = result.ties;
};

const reset = function () {
  result.win = 0;
  result.losses = 0;
  result.ties = 0;
  btnCompMove.innerHTML = "🤔!?";
  displayResult();
};

const checkWinner = function (playerMove) {
  const compMove = computerMove();
  if (playerMove === "rock") {
    if (compMove === "rock") {
      result.ties++;
    } else if (compMove === "paper") {
      result.losses++;
    } else if (compMove === "scissors") {
      result.win++;
    }
  } else if (playerMove === "paper") {
    if (compMove === "rock") {
      result.win++;
    } else if (compMove === "paper") {
      result.ties++;
    } else if (compMove === "scissors") {
      result.losses++;
    }
  } else if (playerMove === "scissors") {
    if (compMove === "rock") {
      result.losses++;
    } else if (compMove === "paper") {
      result.win++;
    } else if (compMove === "scissors") {
      result.ties++;
    }
  }
  displayResult();
};

// console.log(computerMove());
// displayResult();
// reset();

btnRock.addEventListener("click", () => {
  checkWinner("rock");
});
btnPaper.addEventListener("click", () => {
  checkWinner("paper");
});
btnScissors.addEventListener("click", () => {
  checkWinner("scissors");
});
btnReset.addEventListener("click", reset);
