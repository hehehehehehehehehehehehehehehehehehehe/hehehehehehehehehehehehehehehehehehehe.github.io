let playerSpeed = 25;

const game = document.getElementById("game");
const gameOverlay = document.getElementById("gameOverlay");
const startGame = document.getElementById("start");

startGame.addEventListener("click", () => {
  reset();
  gameOverlay.style.display = "none";
});

const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const p3 = document.getElementById("player3");
const p4 = document.getElementById("player4");

const p1Name = "Red";
const p2Name = "Green";
const p3Name = "Blue";
const p4Name = "Yellow";

window.addEventListener("keyup", function (event) {
  const gameBorder = game.getBoundingClientRect();
  const p1Border = p1.getBoundingClientRect();
  const p2Border = p2.getBoundingClientRect();
  const p3Border = p3.getBoundingClientRect();
  const p4Border = p4.getBoundingClientRect();

  switch (event.key) {
    case "q":
      const p1Overlap = !(gameBorder.right < p1Border.right);

      if (!p1Overlap) {
        win(p1Name);
      } else {
        let p1Left = parseInt(p1.style.left) || 0;
        p1.style.left = p1Left + playerSpeed + "px";
      }

      break;
    case "r":
      const p2Overlap = !(gameBorder.right < p2Border.right);

      if (!p2Overlap) {
        win(p2Name);
      } else {
        let p2Left = parseInt(p2.style.left) || 0;
        p2.style.left = p2Left + playerSpeed + "px";
      }
      break;
    case "u":
      const p3Overlap = !(gameBorder.right < p3Border.right);

      if (!p3Overlap) {
        win(p3Name);
      } else {
        let p3Left = parseInt(p3.style.left) || 0;
        p3.style.left = p3Left + playerSpeed + "px";
      }
      break;
    case "p":
      const p4Overlap = !(gameBorder.right < p4Border.right);

      if (!p4Overlap) {
        win(p4Name);
      } else {
        let p4Left = parseInt(p4.style.left) || 0;
        p4.style.left = p4Left + playerSpeed + "px";
      }
      break;
  }
});

function win(winner) {
  alert(winner + " has won the race!");
  reset();
  gameOverlay.style.display = "";
}

function reset() {
  console.log("reset");
  p1.style.left = 0;
  p2.style.left = 0;
  p3.style.left = 0;
  p4.style.left = 0;
}

// slider

const slider = document.getElementById("widthSlider");

slider.oninput = function () {
  game.style.width = this.value + "%";
  gameOverlay.style.width = this.value + "%";
};
