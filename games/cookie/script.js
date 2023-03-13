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
var cursor = document.querySelector(".cursor");
var body = document.querySelector("body");

document.addEventListener("mousedown", function (event) {
  if (event.target.id === "clicker") {
    // hide default cursor
    body.style.cursor = "none";
    // change cursor image
    cursor.classList.add("clicked");
  }
});

document.addEventListener("mouseup", function () {
  // show default cursor
  body.style.cursor = "default";
  // change cursor image
  cursor.classList.remove("clicked");
});

document.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});
