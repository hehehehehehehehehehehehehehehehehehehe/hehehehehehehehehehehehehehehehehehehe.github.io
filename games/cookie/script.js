// automat
const maxMoney = 50; //in cent

document.getElementById("clicker").addEventListener("click", click);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function click() {
  const randomMoney = randomIntFromInterval(1, maxMoney);
  moneyOutput = randomMoney * 0.01;
  moneyOutput = moneyOutput.toFixed(2);
  console.log(moneyOutput);
}
