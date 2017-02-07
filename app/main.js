var gameStatus = "incomplete";
var playerOne = "X";
var playerTwo = "O";
var playersClick = document.getElementById("game-board");
var resetClick = document.getElementById("reset");
var board = document.getElementById("game-board");
var changeBoardSize = document.getElementById("board-size-selection");

// this variable changes based on the board size selection and is used as the counter for the 'for loop' which creates the game board
var boardSize = 3;

// hard coded turn varieble so each game will begin with player one. This var will change between players on each turn
var whosTurn = playerOne;
var virtualBoard = {
  0:"", 1:"", 2:"", 3:"", 4:"",
  5:"", 6:"", 7:"", 8:"", 9:"",
  10:"", 11:"", 12:"", 13:"", 14:"",
  15:"", 16:"", 17:"", 18:"", 19:"",
  20:"", 21:"", 22:"", 23:"", 24:""
};

// function to create the game board. Defaults to 3 x 3 when the page is loaded
var createGameBoard = function() {
  board.innerHTML = "";
  var counter = 0;
  for (var i = 0; i < boardSize; i++) {
    var row = document.createElement("tr");
    board.appendChild(row);
    for (var j = 0; j < boardSize; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
      cell.setAttribute("id", counter);
      counter+=1;
    }
  }
};

// excecuteTurn changes innerText of the HTML tags "td" based on the users click location. Also switches between "X" and "O" each turn and checks that the clicked locations innerText is empty to ensure a previously clicked location cannot be over-written
var a;

var excecuteTurn = function(e) {
  if (gameStatus === "incomplete") {
    if (e.target.innerText === "") {
        e.target.innerText = whosTurn;
        boardArray[e.target.parentNode.rowIndex][e.target.cellIndex] = whosTurn;
        debugger;
        if (whosTurn === playerOne) {
            whosTurn = playerTwo;
        } else {
            whosTurn = playerOne;
        }
    }
  } if (gameStatus === "completed") {
    return;
  }
}

var checkForWinner = function() {
  for (var i = 0; i < boardSize; i++){
    for (var j = 0; j < boardSize; j++){
      console.log(boardArray[i][j]);
    }
  }
}

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
