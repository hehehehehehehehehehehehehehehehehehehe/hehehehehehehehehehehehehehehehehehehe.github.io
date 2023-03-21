const gameFolders = [
  "aimtrainer",
  "chancegame",
  "clickgame",
  "cookie",
  "football",
  "colorrun",
];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomGame() {
  const selectedGameIndex = randomIntFromInterval(0, gameFolders.length - 1);
  const selectedGame = gameFolders[selectedGameIndex];
  location.href = `../games/${selectedGame}`;
}
