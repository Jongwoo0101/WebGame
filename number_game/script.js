function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    if (guess === randomNumber) {
        document.getElementById("message").innerHTML = "Congratulations! You guessed the number!";
    } else if (guess < randomNumber) {
        document.getElementById("message").innerHTML = "Too low! Try again.";
    } else if (guess > randomNumber) {
        document.getElementById("message").innerHTML = "Too high! Try again.";
    }
}
