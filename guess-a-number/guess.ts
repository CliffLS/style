import "../src/style.css";

const ready = document.getElementById("ready")!;
const inGame = document.getElementById("inGame")!;
const lowerButton = document.getElementById("lower")!;
const higherButton = document.getElementById("higher")!;
const correct = document.getElementById("correct")!;
const gameOver = document.getElementById("gameOver")!;
const restart = document.getElementById("restart")!;
const numberOutput = document.getElementById("guess")!;
const change = document.getElementById("change")!;
const guessing = document.getElementById("guessing")!;
const answering = document.getElementById("answering")!;
let numberOfTurns = 0;
let highestPossible = 1000;
let lowestPossible = 1;
let number = 500;

function reset() {
  gameOver.textContent = "";
  restart.style.display = "none";
  change.style.display = "none";
  numberOfTurns = 0;
  highestPossible = 1000;
  lowestPossible = 1;
  number = 500;
  ready.style.display = "";
  numberOutput.textContent = "";
}

function startGame() {
  reset();
  ready.style.display = "none";
  inGame.style.display = "";
  guess();
}

function guess() {
  if (number == lowestPossible || number == highestPossible) {
    lost();
    return;
  }
  number = Math.round((lowestPossible + highestPossible) / 2);
  numberOutput.textContent = `Is your number ${number}?`;
  numberOfTurns++;
}

function higher() {
  lowestPossible = number + 1;
  guess();
}

function lower() {
  highestPossible = number - 1;
  guess();
}

function won() {
  gameOver.textContent = `I guessed your number in ${numberOfTurns} tries. Want to play again?`;
  restart.style.display = "";
  inGame.style.display = "none";
  change.style.display = "";
}

function lost() {
  gameOver.textContent =
    "I could not guess your number. Are you sure you picked the right buttons?";
  restart.style.display = "";
  numberOutput.textContent = "";
  change.style.display = "";
  inGame.style.display = "none";
}

function changeToAnswering() {
  reset();
  guessing.style.display = "none";
  answering.style.display = "";
}

restart.onclick = startGame;
ready.onclick = startGame;
correct.onclick = won;
higherButton.onclick = higher;
lowerButton.onclick = lower;
change.onclick = changeToAnswering;
