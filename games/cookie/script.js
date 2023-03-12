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

//cursor
/*

    var cursor = document.getElementById("cursor")
    var clicked = false;

    document.addEventListener('mousedown', function () {
        clicked = true;
        cursor.classList.add('clicked');
    });

    document.addEventListener('mouseup', function () {
        clicked = false;
        cursor.classList.remove('clicked');
    });

    document.addEventListener('mousemove', function (event) {
        var x = event.clientX;
        var y = event.clientY;

        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';

        if (clicked) {
            cursor.classList.add('clicked');
        } else {
            cursor.classList.remove('clicked');
        }
    });

    document.getElementById('clicker').forEach(function (element) {
        element.addEventListener('mouseover', function () {
            cursor.classList.add('hover');
        });

        element.addEventListener('mouseout', function () {
            cursor.classList.remove('hover');
        });
    });
    */
