//global variables

// variables and arrays for storing data
var letters = ["a", "d", "f", "h", "i", "j", "l", "m", "n", "r", "s", "t"];
console.log(letters);

var guessLetters = [];
var computerLetters = null;
var guessesLeft = 9;
var userGuess;

var wins = 0;
var losses = 0;

//updating
var updateGuessesLeft = function () {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    console.log(guessesLeft);
}



var updateComputerLetter = function () {
    computerLetter = letters[Math.floor(Math.random() * letters.length)];
}

var updateGuessesSoFar = function () {
    document.querySelector("#guessesSoFar").innerHTML = "Guesses so far: " + guessLetters.join(", ");
}

var reset = function () {
    guessesLeft = 9;
    letterUser = [];
    updateGuessesLeft();
    updateComputerLetter();
    updateGuessesSoFar();
}

//page loading
reset();

//captures event when keyboard is pressed
document.onkeydown = function (event) {
    // lowercases every user input
    userGuess = event.key.toLowerCase();

    // captures the event when the user presses on the keyboard
    guessLetters.push(userGuess);

    //User guesses the computer's letter correctly!
    if (userGuess === computerLetter) {
        alert("Congrats! You've guessed correctly!");
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        reset();
    } else {
        // Decrease the guesses variable by 1 for guessing incorrectly
        guessesLeft--;
        updateGuessesSoFar();
        updateGuessesLeft();

        if (guessesLeft === 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
    }

}