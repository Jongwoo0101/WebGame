var score = 0;
var gameContainer = document.getElementById("gameContainer");
var mole = document.getElementById("mole");
var scoreDisplay = document.getElementById("score");

mole.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
});

function moveMole() {
    var maxX = gameContainer.clientWidth - mole.clientWidth;
    var maxY = gameContainer.clientHeight - mole.clientHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    mole.style.left = randomX + "px";
    mole.style.top = randomY + "px";
    mole.style.display = "block";

    setTimeout(function() {
        mole.style.display = "none";
        setTimeout(moveMole, 1000);
    }, 1000);
}

moveMole();
