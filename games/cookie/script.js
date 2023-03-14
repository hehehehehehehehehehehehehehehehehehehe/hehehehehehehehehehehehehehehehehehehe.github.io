let moneyValue = 0;
document.getElementById("hand").addEventListener("click", click);
function click() {
  moneyProperty = Math.floor(Math.random() * 100);
  if (moneyProperty < 21) {
    moneyValue += 0.01;
    rewardValue = 0.01;
  }
  if (20 < moneyProperty && moneyProperty < 51) {
    moneyValue += 0.02;
    rewardValue = 0.02;
  }
  if (50 < moneyProperty && moneyProperty < 71) {
    moneyValue += 0.05;
    rewardValue = 0.05;
  }
  if (70 < moneyProperty && moneyProperty < 86) {
    moneyValue += 0.1;
    rewardValue = 0.1;
  }
  if (85 < moneyProperty && moneyProperty < 96) {
    moneyValue += 0.2;
    rewardValue = 0.2;
  }
  if (95 < moneyProperty && moneyProperty < 101) {
    moneyValue += 0.5;
    rewardValue = 0.5;
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
