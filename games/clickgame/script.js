let score = 0;
let clickedOnce = 0;

clickgame.addEventListener("click", () => {
  clickgame.style.backgroundColor = "#22b54a";

  score++;
  document.getElementById("score").innerHTML = `Clicks: ${score}`;

  if (clickedOnce == 0) {
    setTimeout(timerEnd, 10000);
  }

  clickedOnce++;
});

function timerEnd() {
  const seconds = 15;
  const clicksPerSecond = score / seconds;

  const message =
    "You clicked " +
    score +
    " times in " +
    seconds +
    " seconds." +
    "\nClicks per second: [ " +
    clicksPerSecond +
    " ]";

  alert(message);
  reset();
}

function reset() {
  score = 0;
  clickedOnce = 0;
  clickgame.style.backgroundColor = "#2253b5";
  document.getElementById("score").innerHTML = "Click to start!";
}
