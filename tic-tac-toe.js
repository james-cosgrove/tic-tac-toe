var playerOne = "X";
var playerTwo = "O";
var playersClick = document.getElementById("game-board");
var resetClick = document.getElementById("reset");
// hard coded turn varieble so each game will begin with player one. This var will change between players on each turn
var whosTurn = playerOne;

// storing the innerText content in variables to be able to check of a player has 3 in a row - check for winner
var squareOne;
var squareTwo;
var squareThree;
var squareFour;
var squareFive;
var squareSix;
var squareSeven;
var squareEight;
var squareNine;

// excecuteTurn changes innerText of the HTML tags "td" based on the users click location. Also alternates between "X" and "O" each turn and checks that the clicked locations innerText is empty to ensure a previously clicked location cannot be over-written

var excecuteTurn = function(e) {
    if (e.target.innerText === "") {
        e.target.innerText = whosTurn;
        if (whosTurn === playerOne) {
            whosTurn = playerTwo;
        } else {
            whosTurn = playerOne;
        }
        // updates clicked squares variable to the innerText content each time the function fires
        squareOne = document.getElementById("1").innerText;
        squareTwo = document.getElementById("2").innerText;
        squareThree = document.getElementById("3").innerText;
        squareFour = document.getElementById("4").innerText;
        squareFive = document.getElementById("5").innerText;
        squareSix = document.getElementById("6").innerText;
        squareSeven = document.getElementById("7").innerText;
        squareEight = document.getElementById("8").innerText;
        squareNine = document.getElementById("9").innerText;
    }
    // if statement to check if a player has 3 in a row - virtical, horizontal or diagonal and triggers the appropriate function to update DOM based on which player one
    if (squareOne === "X" && squareTwo === "X" && squareThree === "X" || squareFour === "X" && squareFive === "X" && squareSix === "X" || squareSeven === "X" && squareEight === "X" && squareNine === "X" || squareOne === "X" && squareFour === "X" && squareSeven === "X" || squareTwo === "X" && squareFive === "X" && squareEight === "X" || squareThree === "X" && squareSix === "X" && squareNine === "X" || squareOne === "X" && squareFive === "X" && squareNine === "X" || squareThree === "X" && squareFive === "X" && squareSeven === "X") {
        setTimeout(playerOneWins, 100); // delays alert so it doesn't appear before the last box the winner click is populated
    }
    if (squareOne === "O" && squareTwo === "O" && squareThree === "O" || squareFour === "O" && squareFive === "O" && squareSix === "O" || squareSeven === "O" && squareEight === "O" && squareNine === "O" || squareOne === "O" && squareFour === "O" && squareSeven === "O" || squareTwo === "O" && squareFive === "O" && squareEight === "O" || squareThree === "O" && squareSix === "O" && squareNine === "O" || squareOne === "O" && squareFive === "O" && squareNine === "O" || squareThree === "O" && squareFive === "O" && squareSeven === "O") {
        setTimeout(playerTwoWins, 100);
    } else if (squareOne && squareTwo && squareThree && squareFour && squareFive && squareSix && squareSeven && squareEight && squareNine === "X" || squareOne && squareTwo && squareThree && squareFour && squareFive && squareSix && squareSeven && squareEight && squareNine === "O") {
        setTimeout(draw, 100);
    }
}

var playerOneWins = function() {
    if (document.getElementsByTagName("h1")[0].innerText === "naughts & crosses") {
        document.getElementsByTagName("h1")[0].innerText = "game completed";
        document.getElementById("header").style.display = "none";
        document.getElementById("player-one-winner").style.display = "block";
        document.getElementById("reset").style.visibility = "visible";
    }
}

var playerTwoWins = function() {
    if (document.getElementsByTagName("h1")[0].innerText === "naughts & crosses") {
        document.getElementsByTagName("h1")[0].innerText = "game completed";
        document.getElementById("header").style.display = "none";
        document.getElementById("player-two-winner").style.display = "block";
        document.getElementById("reset").style.visibility = "visible";
    }
}

var draw = function() {
    if (document.getElementsByTagName("h1")[0].innerText === "naughts & crosses") {
        document.getElementById("header").style.display = "none";
        document.getElementById("draw").style.display = "block";
        document.getElementById("reset").style.visibility = "visible";
    }
}

var gameReset = function() {
    location.reload();
}

// click event listener attached to playersClick variable to fire excecuteTurn function
playersClick.addEventListener("click", excecuteTurn);

// click event listener attached to resetClick variable to reload page to reset game
resetClick.addEventListener("click", gameReset);
