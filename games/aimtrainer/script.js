let cursor = document.getElementById("aimCursor");
let field = document.getElementById("aimField");
let score = 0;
let highscore = 0;
let timeleft = 20000;
let gamegoeson = false;

document.addEventListener("mousedown", function (event) {
  if (event.target.id === "startDiv") {
    start();
  }

  if (event.target.id === "aimCursor") {
    click();
  }
});

function start() {
  let startDiv = document.getElementById("startDiv");
  startDiv.style.zIndex = "-1";
  setTimeout(timerEnd, timeleft);
  cursor.style.left =
    Math.floor((Math.random() * aimField.offsetWidth) / 2) + "px";
  cursor.style.top =
    Math.floor((Math.random() * aimField.offsetHeight) / 2) + "px";
  gamegoeson = true;
}

function click() {
  score += 1;
  cursor.style.left =
    Math.floor((Math.random() * aimField.offsetWidth) / 2) + "px";
  cursor.style.top =
    Math.floor((Math.random() * aimField.offsetHeight) / 2) + "px";
}

function timerEnd() {
  if (score > highscore) {
    highscore = score;
    document.getElementById("highscore").innerHTML = "Highscore: " + highscore;
  }

  const message = "Du hast " + score + " Punkte erreicht";
  alert(message);
  score = 0;
  timeleft = 20000;
  startDiv.style.zIndex = "2";
  gamegoeson = false;
}

setInterval(() => {
  if (gamegoeson == true) {
    timeleft -= 4;
  }

  timeleft2 = timeleft / 1000;

  document.getElementById("time").innerHTML =
    "Time left: " + timeleft2.toFixed(1);
}, 1);
