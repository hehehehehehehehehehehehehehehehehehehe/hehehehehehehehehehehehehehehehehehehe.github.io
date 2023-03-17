const maxGames = 5;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomGame() {
  const selectedGame = randomIntFromInterval(1, maxGames);
  if (selectedGame == 1) {
    location.href = "../games/football";
  } else if (selectedGame == 2) {
    location.href = "../games/cookie";
  } else if (selectedGame == 3) {
    location.href = "../games/clickgame";
  } else if (selectedGame == 4) {
    location.href = "../games/chancegame";
  } else if (selectedGame == 5) {
    location.href = "../games/aimtrainer";
  } else alert("No game found!");
}
