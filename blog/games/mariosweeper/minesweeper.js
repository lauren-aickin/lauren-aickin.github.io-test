document.addEventListener('DOMContentLoaded', startGame)
var success = new Audio ('smb.wav')

// Define your `board` object here!
let board = {
  cells: [],
}

let cellCount = 6;

function createBoard(num) {
  for (i = 0; i < cellCount; i++){
    for (j = 0; j < cellCount; j++){
    board.cells.push
    ({
      row: i,
      col: j,
      isMine: Math.random() < 0.20,
      isMarked: false,
      hidden: true
    })
  }
}
}

createBoard();

// manual board creation
/* var board = {
  cells: [
    {row: 0, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 0, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},

    {row: 1, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 5},
    {row: 1, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 2},

    {row: 2, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 1},
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 3},
    {row: 2, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 1}
  ]
}
*/

function startGame (cell) {
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) {
      return
    }
    else if (!board.cells[i].isMine && board.cells[i].isHidden == true) {
      return
    }
    
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('Thank you Mario! But our princess is in another castle')
  success.play();
}
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  surrounding.forEach ((cell) => {
    if (cell.isMine === true) {
      count++;
    }
  });
  return count;
}

