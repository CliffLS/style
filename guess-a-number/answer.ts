import "../src/style.css";

const restart = document.getElementById("aRestart")!;
const answer = document.getElementById("aAnswer")!;
const change = document.getElementById("aChangeBack")!;
const guessing = document.getElementById("guessing")!;
const answering = document.getElementById("answering")!;
const numberInput = document.getElementById("aInput")! as HTMLInputElement;
const numberForm = document.getElementById("aNumberForm")! as HTMLFormElement;
const mistake = document.getElementById("aMistake")!;
let numberOfTurns = 0;
let number = Math.floor(Math.random() * 1000 + 1);
let guessedNumber = 0;

function startGame() {
  restart.style.display = "none";
  change.style.display = "none";
  answer.textContent = "Make your guess!";
  numberOfTurns = 0;
  number = Math.floor(Math.random() * 1000 + 1);
}

function checkAnswer(event: SubmitEvent) {
  event.preventDefault();

  guessedNumber = numberInput.valueAsNumber;
  if (
    guessedNumber < 1 ||
    guessedNumber > 1000 ||
    guessedNumber % 1 != 0 ||
    Number.isNaN(guessedNumber)
  ) {
    mistake.style.display = "block";
  } else {
    mistake.style.display = "none";
    if (guessedNumber == number) {
      won();
    } else if (numberOfTurns > 8) {
      change.style.display = "";
    } else if (guessedNumber < number) {
      answer.textContent = `My number is higher than ${guessedNumber}`;
      numberOfTurns++;
    } else {
      answer.textContent = `My number is lower than ${guessedNumber}`;
      numberOfTurns++;
    }
  }
}

function won() {
  answer.textContent = `You guessed my number in ${numberOfTurns} tries. Want to play again?`;
  restart.style.display = "";
  change.style.display = "";
}

function changeToGuessing() {
  startGame();
  guessing.style.display = "";
  answering.style.display = "none";
}

restart.onclick = startGame;
change.onclick = changeToGuessing;
numberForm.onsubmit = checkAnswer;
