
// Game variables
let currentPlayer = "X";
let gameEnded = false;
let board = ["", "", "", "", "", "", "", "", ""];

// Function to make a move
function makeMove(cell) {
  if (gameEnded || board[cell] !== "") {
    return;
  }
 
  board[cell] = currentPlayer;
  document.getElementsByClassName("cell")[cell].innerText = currentPlayer;
  document.getElementsByClassName("cell")[cell].style.pointerEvents = "none";
 
  if (checkWin()) {
    announceWinner(currentPlayer);
    gameEnded = true;
    return;
  }
 
  if (checkDraw()) {
    announceDraw();
    gameEnded = true;
    return;
  }
 
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check for a win
function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
 
  for (let combo of winningCombos) {
    if (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    ) {
      return true;
    }
  }
 
  return false;
}

// Function to check for a draw
function checkDraw() {
  return board.filter(cell => cell === "").length === 0;
}

// Function to announce the winner
function announceWinner(winner) {
  alert("Player " +
winner + " wins!");
}

// Function to announce a draw
function announceDraw() {
alert("It's a draw!");
}

// Function to reset the game
function resetGame() {
currentPlayer = "X";
gameEnded = false;
board = ["", "", "", "", "", "", "", "", ""];

const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
cells[i].innerText = "";
cells[i].style.pointerEvents = "auto";
}
}