let moneyIncome1 = 0.01;
let moneyIncome2 = 0.02;
let moneyIncome3 = 0.05;
let moneyIncome4 = 0.1;
let moneyIncome5 = 0.2;
let moneyIncome6 = 0.5;
let IncomeProperty1 = 21;
let IncomeProperty2 = 51;
let IncomeProperty3 = 71;
let IncomeProperty4 = 86;
let IncomeProperty5 = 96;

let machineType = 1;

let moneyValue = 0;
document.getElementById("hand").addEventListener("click", click);
function click() {
  moneyProperty = Math.floor(Math.random() * 100);
  if (moneyProperty < IncomeProperty1) {
    moneyValue += moneyIncome1;
    rewardValue = moneyIncome1;
  } else if (moneyProperty < IncomeProperty2) {
    moneyValue += moneyIncome2;
    rewardValue = moneyIncome2;
  } else if (moneyProperty < IncomeProperty3) {
    moneyValue += moneyIncome3;
    rewardValue = moneyIncome3;
  } else if (moneyProperty < IncomeProperty4) {
    moneyValue += moneyIncome4;
    rewardValue = moneyIncome4;
  } else if (moneyProperty < IncomeProperty5) {
    moneyValue += moneyIncome5;
    rewardValue = moneyIncome5;
  } else {
    moneyValue += moneyIncome6;
    rewardValue = moneyIncome6;
  }

  const moneyReward = document.createElement("p");
  moneyReward.innerText = "+" + rewardValue.toFixed(2);
  moneyReward.id = "moneyReward";
  moneyReward.style.position = "absolute";
  moneyReward.style.left =
    Math.floor(Math.random() * moneyRewardDiv.offsetWidth) + "px";
  moneyReward.style.top =
    Math.floor(Math.random() * moneyRewardDiv.offsetHeight) + "px";

  if (rewardValue < 0.03) {
    moneyReward.style.color = "white";
    moneyReward.style.fontSize = 11 + "px";
  } else if (rewardValue < 0.06) {
    moneyReward.style.color = "lightgreen";
    moneyReward.style.fontSize = 13 + "px";
  } else if (rewardValue < 0.3) {
    moneyReward.style.color = "lime";
    moneyReward.style.fontSize = 19 + "px";
  } else {
    moneyReward.style.color = "#9d20c7";
    moneyReward.style.fontSize = 30 + "px";
  }

  const randomIndex = Math.floor(Math.random() * 2);
  if (randomIndex === 0) {
    moneyRewardDiv.appendChild(moneyReward);
  } else {
    moneyRewardDiv2.appendChild(moneyReward);
  }

  setTimeout(() => {
    moneyReward.remove();
  }, 2000);

  //Teleport Fist
  hand.style.left = Math.floor(Math.random() * fistDiv.offsetWidth) + "px";
  hand.style.top = Math.floor(Math.random() * fistDiv.offsetHeight) + "px";

  const MD = document.getElementById("moneyDisplay");
  MD.style.display = "block";
  MD.innerText = moneyValue.toFixed(2) + "€";
}

let nextUpgradeValue = 5;

setInterval(() => {
  const UM = document.getElementById("upgradeMachine");
  if (machineType == 1 && moneyValue >= nextUpgradeValue) {
    UM.classList.remove("disabled");
  } else {
    UM.classList.add("disabled");
  }
}, 200);

let clicker = document.getElementById("clicker");
function upgradeMachine() {
  if (machineType == 1 && moneyValue >= 5) {
    moneyValue -= 5;
    moneyValue - 5;
    IncomeProperty1 = 11;
    IncomeProperty2 = 31;
    IncomeProperty3 = 61;
    IncomeProperty4 = 81;
    IncomeProperty5 = 96;
    machineType = 2;
    nextUpgradeValue = 10;
    clicker.src = "./pics/cany_vending_machine_silver.png";
  }

  const MD = document.getElementById("moneyDisplay");
  MD.style.display = "block";
  MD.innerText = moneyValue.toFixed(2) + "€";
}

// CUSTOM CURSOR
var hand = document.getElementById("hand");

document.addEventListener("mousedown", function (event) {
  if (event.target.id === "hand") {
    hand.classList.add("clicked");
    const punchAudio = new Audio("sounds/punch.mp3");
    punchAudio.volume = 0.3;
    punchAudio.play();
  }
});

document.addEventListener("mouseup", function () {
  hand.classList.remove("clicked");
});

upgradeMachine(); // text is hide without
