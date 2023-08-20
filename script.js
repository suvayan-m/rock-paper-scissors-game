"use strict";

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btnReset = document.querySelector(".reset");
const btnCompMove = document.querySelector(".move-c");
const dispWin = document.querySelector(".win");
const dispLoss = document.querySelector(".loss");
const dispTie = document.querySelector(".draw");

const result = JSON.parse(localStorage.getItem("result")) || {
  win: 0,
  losses: 0,
  ties: 0,
};

const computerMove = function () {
  const random = Math.random();
  let move = undefined;
  if (random < 1 / 3) {
    move = "rock";
    btnCompMove.innerHTML = "";
    btnCompMove.insertAdjacentHTML(
      "afterbegin",
      `<i class="fa-solid fa-hand-fist"></i>`
    );
  } else if (random > 1 / 3 && random < 2 / 3) {
    move = "paper";
    btnCompMove.innerHTML = "";
    btnCompMove.insertAdjacentHTML(
      "afterbegin",
      `<i class="fa-solid fa-hand"></i>`
    );
  } else {
    move = "scissors";
    btnCompMove.innerHTML = "";
    btnCompMove.insertAdjacentHTML(
      "afterbegin",
      `<i class="fa-solid fa-hand-scissors"></i>`
    );
  }
  return move;
};

const displayResult = function () {
  dispWin.innerHTML = result.win;

  dispLoss.innerHTML = result.losses;

  dispTie.innerHTML = result.ties;
};
displayResult();

const reset = function () {
  result.win = 0;
  result.losses = 0;
  result.ties = 0;
  document.body.style.backgroundColor = "#fff";
  btnCompMove.innerHTML = "";
  btnCompMove.insertAdjacentHTML(
    "afterbegin",
    `<i class="fa-solid fa-face-smile"></i>`
  );
  localStorage.removeItem("result");
  displayResult();
};

const checkWinner = function (playerMove) {
  const compMove = computerMove();
  if (playerMove === "rock") {
    if (compMove === "rock") {
      result.ties++;
      document.body.style.backgroundColor = "#ffeaa7";
      dispTie.closest(".result").classList.add("stats");
      dispWin.closest(".result").classList.remove("stats");
      dispLoss.closest(".result").classList.remove("stats");
    } else if (compMove === "paper") {
      result.losses++;
      document.body.style.backgroundColor = "#fab1a0";
      dispTie.closest(".result").classList.remove("stats");
      dispWin.closest(".result").classList.remove("stats");
      dispLoss.closest(".result").classList.add("stats");
    } else if (compMove === "scissors") {
      result.win++;
      document.body.style.backgroundColor = "#55efc4";
      dispTie.closest(".result").classList.remove("stats");
      dispWin.closest(".result").classList.add("stats");
      dispLoss.closest(".result").classList.remove("stats");
    }
  } else if (playerMove === "paper") {
    if (compMove === "rock") {
      result.win++;
      document.body.style.backgroundColor = "#55efc4";
      dispTie.closest(".result").classList.remove("stats");
      dispWin.closest(".result").classList.add("stats");
      dispLoss.closest(".result").classList.remove("stats");
    } else if (compMove === "paper") {
      result.ties++;
      document.body.style.backgroundColor = "#ffeaa7";
      dispTie.closest(".result").classList.add("stats");
      dispWin.closest(".result").classList.remove("stats");
      dispLoss.closest(".result").classList.remove("stats");
    } else if (compMove === "scissors") {
      result.losses++;
      document.body.style.backgroundColor = "#fab1a0";
      dispTie.closest(".result").classList.remove("stats");
      dispWin.closest(".result").classList.remove("stats");
      dispLoss.closest(".result").classList.add("stats");
    }
  } else if (playerMove === "scissors") {
    if (compMove === "rock") {
      result.losses++;
      document.body.style.backgroundColor = "#fab1a0";
      dispTie.closest(".result").classList.remove("stats");
      dispWin.closest(".result").classList.remove("stats");
      dispLoss.closest(".result").classList.add("stats");
    } else if (compMove === "paper") {
      result.win++;
      document.body.style.backgroundColor = "#55efc4";
      dispTie.closest(".result").classList.remove("stats");
      dispWin.closest(".result").classList.add("stats");
      dispLoss.closest(".result").classList.remove("stats");
    } else if (compMove === "scissors") {
      result.ties++;
      document.body.style.backgroundColor = "#ffeaa7";
      dispTie.closest(".result").classList.add("stats");
      dispWin.closest(".result").classList.remove("stats");
      dispLoss.closest(".result").classList.remove("stats");
    }
  }
  localStorage.setItem("result", JSON.stringify(result));
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
