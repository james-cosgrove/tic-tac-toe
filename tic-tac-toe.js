
//var emptyBoardSpaces = document.getElementsByTagName("td").innerHTML === "";

// function to change the DOM based on the players selection. Click event listener is attached to the game-board ID and uses event.target method to change the inner HTML to the players character

//Must also alternate between "X" and "O" depending on which player maker the selection based on whether the number of characters on the game board are odd or even

document.getElementById("game-board").addEventListener("click", function(e) {
  e.target.textContent = "X"; 
});
