var canvas = document.getElementById("canvas");

canvas.width = 1000;
canvas.height = 600;

var ctx = canvas.getContext("2d");

var x = 500, // Anfangs position x
  y = 300,
  dx = 3.2, // x geschwindigkeit
  dy = 0.3,
  radius = 20;

draw();

function draw() {
  window.requestAnimationFrame(draw);

  ctx.clearRect(0, 0, 1000, 600);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  x += dx;
  y += dy;

  if (x + radius > 1000 || x - radius < 0) {
    dx = -dx * 1.01;
  }

  if (y + radius > 600 || y - radius < 0) {
    dy = -dy * 1.01;
  }
}
