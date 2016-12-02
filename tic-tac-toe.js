var gameStatus = "incomplete";
var playerOne = "X";
var playerTwo = "O";
var playersClick = document.getElementById("game-board");
var resetClick = document.getElementById("reset");
var board = document.getElementById("game-board");
var changeBoardSize = document.getElementById("board-size-selection");
// this variable change based on the board size selection and is used as the counter for the 'for loop' which creates the game board
var boardSize = 3;
// hard coded turn varieble so each game will begin with player one. This var will change between players on each turn
var whosTurn = playerOne;
var boardArray = [
["", "", "", "", ""],
["", "", "", "", ""],
["", "", "", "", ""],
["", "", "", "", ""],
["", "", "", "", ""]
];

// storing the innerText content in variables to be able to check of a player has 3 in a row - check for winner
// var squareOne;
// var squareTwo;
// var squareThree;
// var squareFour;
// var squareFive;
// var squareSix;
// var squareSeven;
// var squareEight;
// var squareNine;

var squareOne;
var squareTwo;
var squareThree;
var squareFour;
var squareFive;
var squareSix;
var squareSeven;
var squareEight;
var squareNine;

// function to create the game board. Defaults to 3 x 3 when the page is loaded
var createGameBoard = function() {
  board.innerHTML = "";
  for (var i = 0; i < boardSize; i++) {
    var row = document.createElement("tr");
    board.appendChild(row);
    for (var j = 0; j < boardSize; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
  }
}

// excecuteTurn changes innerText of the HTML tags "td" based on the users click location. Also switches between "X" and "O" each turn and checks that the clicked locations innerText is empty to ensure a previously clicked location cannot be over-written
var a;

var excecuteTurn = function(e) {
  if (gameStatus === "incomplete") {
    if (e.target.innerText === "") {
        e.target.innerText = whosTurn;
        boardArray[e.target.parentNode.rowIndex][e.target.cellIndex] = whosTurn;
        if (whosTurn === playerOne) {
            whosTurn = playerTwo;
        } else {
            whosTurn = playerOne;
        }
        // updates clicked squares variable to the innerText content each time the function fires
        // squareOne = document.getElementById("1").innerText;
        // squareTwo = document.getElementById("2").innerText;
        // squareThree = document.getElementById("3").innerText;
        // squareFour = document.getElementById("4").innerText;
        // squareFive = document.getElementById("5").innerText;
        // squareSix = document.getElementById("6").innerText;
        // squareSeven = document.getElementById("7").innerText;
        // squareEight = document.getElementById("8").innerText;
        // squareNine = document.getElementById("9").innerText;

    }
    // if statement to check if a player has 3 in a row - virtical, horizontal or diagonal and triggers the appropriate function to update DOM based on which player one
  //   if (squareOne === "X" && squareTwo === "X" && squareThree === "X" || squareFour === "X" && squareFive === "X" && squareSix === "X" || squareSeven === "X" && squareEight === "X" && squareNine === "X" || squareOne === "X" && squareFour === "X" && squareSeven === "X" || squareTwo === "X" && squareFive === "X" && squareEight === "X" || squareThree === "X" && squareSix === "X" && squareNine === "X" || squareOne === "X" && squareFive === "X" && squareNine === "X" || squareThree === "X" && squareFive === "X" && squareSeven === "X") {
  //       playerOneWon();
  //   }
  //   if (squareOne === "O" && squareTwo === "O" && squareThree === "O" || squareFour === "O" && squareFive === "O" && squareSix === "O" || squareSeven === "O" && squareEight === "O" && squareNine === "O" || squareOne === "O" && squareFour === "O" && squareSeven === "O" || squareTwo === "O" && squareFive === "O" && squareEight === "O" || squareThree === "O" && squareSix === "O" && squareNine === "O" || squareOne === "O" && squareFive === "O" && squareNine === "O" || squareThree === "O" && squareFive === "O" && squareSeven === "O") {
  //       playerTwoWon();
  //   }
  //   else if (squareOne && squareTwo && squareThree && squareFour && squareFive && squareSix && squareSeven && squareEight && squareNine === "X" || squareOne && squareTwo && squareThree && squareFour && squareFive && squareSix && squareSeven && squareEight && squareNine === "O") {
  //       draw();
  //   }
  // } if (gameStatus === "completed") {
  //   return;
  }
}

var winnerCheckHorizontal = function() {
  for (var i = 0; i < boardSize; i++){
    for (var j = 0; j < boardSize; j++){
        console.log(boardArray[i][j]);
  }
}

var winnerCheckVirtical = function() {
  for (var i = 0; i < boardSize; i++){
    for (var j = 0; j < boardSize; j + 3){
        console.log(boardArray[i][j]);
  }
}

var winnerCheckDiagonal = function() {

var playerOneWon = function() {
    if (document.getElementsByTagName("h1")[0].innerText === "naughts & crosses") {
        document.getElementsByTagName("h1")[0].innerText = "game completed";
        document.getElementById("header").style.display = "none";
        document.getElementById("player-one-winner").style.display = "block";
        document.getElementById("reset").style.visibility = "visible";
        gameStatus = "completed";
    }
}

var playerTwoWon = function() {
    if (document.getElementsByTagName("h1")[0].innerText === "naughts & crosses") {
        document.getElementsByTagName("h1")[0].innerText = "game completed";
        document.getElementById("header").style.display = "none";
        document.getElementById("player-two-winner").style.display = "block";
        document.getElementById("reset").style.visibility = "visible";
        gameStatus = "completed";
    }
}

var draw = function() {
    if (document.getElementsByTagName("h1")[0].innerText === "naughts & crosses") {
        document.getElementById("header").style.display = "none";
        document.getElementById("draw").style.display = "block";
        document.getElementById("reset").style.visibility = "visible";
        gameStatus = "completed";
    }
}

var gameReset = function() {
    location.reload();
}

// click event listener attached to playersClick variable to fire excecuteTurn function
playersClick.addEventListener("click", excecuteTurn);

// click event listener attached to resetClick variable to reload page to reset game
resetClick.addEventListener("click", gameReset);

changeBoardSize.addEventListener("click", function(e) {

  if (e.target.innerText === "three by three") {
    boardSize = 3;
  } if (e.target.innerText === "four by four") {
    boardSize = 4;
  } if (e.target.innerText === "five by five") {
    boardSize = 5;
  }
  createGameBoard();

});

createGameBoard();
