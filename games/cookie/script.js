// automat
const maxMoney = 50; //in cent
let moneyValue = 0;

document.getElementById("clicker").addEventListener("click", click);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function click() {
  moneyProperty = Math.floor(Math.random() * 100);

  if(moneyProperty < 21) {
    moneyValue += 0.01;
    console.log("1")
  }

  if(20 < moneyProperty && moneyProperty < 51) {
    moneyValue += 0.02;
    console.log("2")
  }

  if (50 < moneyProperty && moneyProperty < 71) {
    moneyValue += 0.05;
    console.log("3")
  }

  if (70 < moneyProperty && moneyProperty < 86) {
    moneyValue += 0.10;
    console.log("4")
  }

  if (85 < moneyProperty && moneyProperty < 96) {
    moneyValue += 0.20;
    console.log("5")
  }

  if (95 < moneyProperty && moneyProperty < 101) {
    moneyValue += 0.50;
    console.log("6")
  }

  document.getElementById("moneyValueDisplay").innerHTML = "You have " + moneyValue.toFixed(2) + "€";
  console.log(moneyProperty)
}