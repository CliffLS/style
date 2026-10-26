import "./style.css";

const love = document.getElementById("Love")!;
const why = document.getElementById("why")!;
const noButton = document.getElementById("noLove")!;
const yesButton = document.getElementById("showLove")!;
const notPlaying = document.getElementById("noPlay")!;
const playButton = document.getElementById("play")!;
const games = document.getElementById("games")!;

function showLove() {
  love.style.display = "block";
  why.style.display = "none";
  noButton.style.marginLeft = "0px";
  noButton.style.marginTop = "0px";
  noButton.style.display = "";
}

function runAway() {
  const currentLeft = parseInt(getComputedStyle(noButton).marginLeft) || 0;
  const currentTop = parseInt(getComputedStyle(noButton).marginTop) || 0;
  if (currentLeft < (window.innerWidth - noButton.offsetWidth) / 2) {
    noButton.style.marginLeft = currentLeft + 50 + "px";
  } else if (currentTop < (window.innerHeight - noButton.offsetHeight) / 2) {
    noButton.style.marginTop = currentTop + 50 + "px";
  } else {
    noButton.style.display = "none";
    noButton.style.marginLeft = "0px";
    noButton.style.marginTop = "0px";
    why.style.display = "block";
    love.style.display = "none";
  }
}

function play() {
  games.style.display = "block";
}

function hide() {
  notPlaying.textContent = "Wrong answer. Try again!";
}

yesButton.onclick = showLove;
noButton.onmouseenter = runAway;
notPlaying.onclick = hide;
playButton.onclick = play;
