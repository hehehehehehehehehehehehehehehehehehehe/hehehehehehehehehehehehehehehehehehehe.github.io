let moneyValue = 0;
document.getElementById("clicker").addEventListener("click", click);
function click() {
  moneyProperty = Math.floor(Math.random() * 100);
  if(moneyProperty < 21) {
    moneyValue += 0.01;
  } if (20 < moneyProperty && moneyProperty < 51) {
    moneyValue += 0.02;
  } if (50 < moneyProperty && moneyProperty < 71) {
    moneyValue += 0.05;
  } if (70 < moneyProperty && moneyProperty < 86) {
    moneyValue += 0.10;
  } if (85 < moneyProperty && moneyProperty < 96) {
    moneyValue += 0.20;
  } if (95 < moneyProperty && moneyProperty < 101) {
    moneyValue += 0.50;
  }
  document.getElementById("moneyValueDisplay").innerHTML = "You have " + moneyValue.toFixed(2) + "€";
}