let moneyValue = 0;
document.getElementById("clicker").addEventListener("click", click);
function click() {
  moneyProperty = Math.floor(Math.random() * 100);
  if (moneyProperty < 21) {
    moneyValue += 0.01;
  }
  if (20 < moneyProperty && moneyProperty < 51) {
    moneyValue += 0.02;
  }
  if (50 < moneyProperty && moneyProperty < 71) {
    moneyValue += 0.05;
  }
  if (70 < moneyProperty && moneyProperty < 86) {
    moneyValue += 0.1;
  }
  if (85 < moneyProperty && moneyProperty < 96) {
    moneyValue += 0.2;
  }
  if (95 < moneyProperty && moneyProperty < 101) {
    moneyValue += 0.5;
  }
}

// CUSTOM CURSOR
var hand = document.querySelector(".hand");
var html = document.querySelector("html");

document.addEventListener("mousedown", function (event) {
  if (event.target.id === "clicker") {
    hand.classList.add("clicked");
    const punchAudio = new Audio("sounds/punch.mp3");
    punchAudio.volume = 0.3;
    punchAudio.play();
  }
});

document.addEventListener("mouseup", function () {
  hand.classList.remove("clicked");
});
