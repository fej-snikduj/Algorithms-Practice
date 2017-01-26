var cursorLocation = [0,0];
var previousCursorLocation = [0,0];
var gameOverFlag = false;
var uncoveredCount = 0;
var winningCount = 0;



var runGame = function() {
  gameOverFlag = false;
  var boardSize = prompt('how big of board would you like?');
  var diffLevel = prompt('what difficulty level would you like? 1, 2, or 3');
  switch(diffLevel) {
    case '1':
      numOfMine = Math.floor(boardSize * boardSize * .1);
      break;
    case '2':
      numOfMine = Math.floor(boardSize * boardSize * .3);
      break;
    case '3': 
      numOfMine = Math.floor(boardSize * boardSize * .5);
      break;
    default:
      numOfMine = Math.floor(boardSize * boardSize * .25);
  }
  winningCount = boardSize * boardSize - numOfMine;
  var mineBoard = createEmptyMineBoard(boardSize);
  addMines(boardSize, numOfMine, mineBoard);
  var viewBoard = createEmptyViewBoard(boardSize);
  fillInNumbers(mineBoard, boardSize);
  initializeKeyboardEventListeners(boardSize, mineBoard, viewBoard);
  renderBoard(viewBoard);



};


var createEmptyMineBoard = function(boardSize) {
  var board= [];
  //create empty array with board size
  for (var i = 0; i < boardSize; i++) {
    board[i] = [];
    for (var j = 0; j < boardSize; j++) {
      board[i][j] = 0;
    }
    console.log(board[i])
  }
  return board;
}

var createEmptyViewBoard = function(boardSize) {
  var viewBoard = [];
  for (var i = 0; i < boardSize; i++) {
    viewBoard[i] = [];
    for (var j = 0; j < boardSize; j++) {
      viewBoard[i][j] = '[  ]';
    }
  }
  return viewBoard;
}

var fillInNumbers = function(mineBoard, boardLength) {

  for (var row = 0; row < mineBoard.length; row++) {
    for (var column = 0; column < mineBoard[row].length; column++) {
      if (mineBoard[row][column] === '*') {
        continue;
      }
      var numOfBombsInVicinity = 0;
      if (row - 1 >= 0 && column - 1 >= 0) {
        if (mineBoard[row - 1][column - 1] === '*') {
          numOfBombsInVicinity++;
        }
      }

      if (row - 1 >= 0) {
        if (mineBoard[row - 1][column] === '*') {
          numOfBombsInVicinity++;
        }
      }

      if (row - 1 >= 0 && column + 1 < boardLength) {
        if (mineBoard[row - 1][column + 1] === '*') {
          numOfBombsInVicinity++;
        }
      }

      if (column - 1 >= 0) {
        if (mineBoard[row][column - 1] === '*') {
          numOfBombsInVicinity++;
        }
      }

      if (column + 1 < boardLength) {
        if (mineBoard[row][column + 1] === '*') {
          numOfBombsInVicinity++;
        }
      }

      if (row + 1 < boardLength && column - 1 >= 0) {
        if (mineBoard[row + 1][column - 1] === '*') {
          numOfBombsInVicinity++;
        }
      }
      if (row + 1 < boardLength) {
        if (mineBoard[row + 1][column] === '*') {
          numOfBombsInVicinity++;
        }
      }
      if (row + 1 < boardLength && column + 1 < boardLength) {
        if (mineBoard[row + 1][column + 1] === '*') {
          numOfBombsInVicinity++;
        }
      }
      mineBoard[row][column] = numOfBombsInVicinity;
      
    }
  }
  return mineBoard;
}

var addMines = function(boardSize, numOfMines, board) {
  //generate random mine placement
  for (var i = 0; i < numOfMines; i++) {
    var row = Math.floor(Math.random() * boardSize);
    var column = Math.floor(Math.random() * boardSize);
    //if no mine at indices, place mine, otherwise subtract 1 from i and repeat
    if (board[row][column] === 0) {
      board[row][column] = '*';
    } else {
      i--;
    }
  }

}

var handleKeyPress = function(boardSize, board, viewBoard, event) {
    if (gameOverFlag) {
      location.reload();
    }
    if (event.keyCode === 37) {
      moveCursor('left', boardSize, board, viewBoard);
    } else if (event.keyCode === 38) {
      moveCursor('up', boardSize, board, viewBoard);
    } else if (event.keyCode === 39) {
      moveCursor('right', boardSize, board, viewBoard);
    } else if (event.keyCode === 40) {
      moveCursor('down', boardSize, board, viewBoard);
    } else if (event.keyCode === 32) {
      checkForBombs(board, viewBoard);
    } else if (event.keyCode === 78) {
      location.reload();
    } else if (event.keyCode === 17) {
      markSpace(viewBoard);
    } else {
      console.log(event.keyCode)
      return
    }
}

var initializeKeyboardEventListeners = function(boardSize, board, viewBoard) {

  //37 - left, 38 - up, 39 - right, 40 - down
  window.document.addEventListener('keydown', handleKeyPress.bind(null, boardSize, board, viewBoard));

}

var moveCursor = function(direction, boardSize, board, viewBoard) {
  console.clear();
  previousCursorLocation = cursorLocation.slice();
  switch(direction) {
    case 'right':
      if (cursorLocation[1] + 1 < boardSize) {
        cursorLocation[1]++;
      }
      console.log(direction, cursorLocation);
      renderBoard(viewBoard);
      break;
    case 'left':
      if (cursorLocation[1] - 1 >= 0) {
        cursorLocation[1]--;
        
      }
      console.log(direction, cursorLocation);
      renderBoard(viewBoard);
      break;
    case 'down':
      if (cursorLocation[0] + 1 < boardSize) {
        cursorLocation[0]++;
      }
      console.log(direction, cursorLocation);
      renderBoard(viewBoard);
      break;
    case 'up':
      if (cursorLocation[0] - 1 >= 0) {
        cursorLocation[0]--;
      }
      console.log(direction, cursorLocation);
      renderBoard(viewBoard);
      break;
    default:
      renderBoard(viewBoard);
      break;
  }

}

var renderBoard = function(board, endGameBoolean) {
  console.clear();

  if (!endGameBoolean && typeof(board[previousCursorLocation[0]][previousCursorLocation[1]]) !== 'number') {
    //remove brackets from previous cursor location
    if(board[previousCursorLocation[0]][previousCursorLocation[1]].match(/_/)) {
      board[previousCursorLocation[0]][previousCursorLocation[1]] = board[previousCursorLocation[0]][previousCursorLocation[1]].replace('_', '');
    
    } 
  }
  if (!endGameBoolean) {
    //set current cursor location
    board[cursorLocation[0]][cursorLocation[1]] = board[cursorLocation[0]][cursorLocation[1]] + '_'
  }
  for (var i = 0; i < board.length; i++) {
    var line = board[i].join('     ');
    console.log(line);
    console.log('')
  }
  if (!endGameBoolean) {
    console.log('Welcome to Minesweeper, JavaScript style!');
    console.log('Press the arrow keys to move the cursor around the board')
    console.log('Press the space key to uncover whats below!');
    console.log('Use the "ctr" key to mark the space as a bomb');
    console.log('Press "n" at any time to start a new game');
  }

}

var endGame = function(mineBoard) {
  console.clear();
  renderBoard(mineBoard, true);
  console.log('Uh oh, game is over! :(');
  console.log('Press any key to start a new game :)');
  cursorLocation = [0,0];
  previousCursorLocation = [0, 0];
  gameOverFlag = true;
}

var winGame = function(mineBoard) {
  alert('YOU WONNNNNNNN!!!');
  gameOverFlag = true;
}

var checkForBombs = function(mineBoard, viewBoard) {
  if (viewBoard[cursorLocation[0]][cursorLocation[1]].match(/b/)) {
    console.log('you must unmark the bomb first before selecting it.  This is for your protection ;)');
    return;
  }
  if (mineBoard[cursorLocation[0]][cursorLocation[1]] === '*') {
    endGame(mineBoard);
  } else {
    updateViewBoard(mineBoard, viewBoard, cursorLocation[0], cursorLocation[1], {});
    renderBoard(viewBoard);
    if (uncoveredCount >= winningCount) {
      winGame();
    }
  }
}

var updateViewBoard = function(mineBoard, viewBoard, row, column, alreadyCoveredMapObj) {
  var key = 'row' + row + 'column' + column;
  //if this spot has already been checked, return
  if (alreadyCoveredMapObj[key]) {
    return;
  }
  //add this spot to the checked list
  alreadyCoveredMapObj[key] = true;

  //if this spot is out of bounds, return
  if (row >= mineBoard.length || column >= mineBoard[0].length || row < 0 || column < 0) {
    return;
  }

  //if this spot is a bomb, do nothing and return
  if (mineBoard[row][column] === '*') {
    return;
  }
  
  //base case is when the square is anything but a zero - we only continue if it is a zero
  if(mineBoard[row][column] !== 0) {
    viewBoard[row][column] = '  ' + mineBoard[row][column] + '  ';
    uncoveredCount++;
    return;
  }

  viewBoard[row][column] = '  ' + mineBoard[row][column] + '  ';
  uncoveredCount++;

  updateViewBoard(mineBoard, viewBoard, row - 1, column - 1, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row - 1, column, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row - 1, column + 1, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row, column - 1, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row, column + 1, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row + 1, column - 1, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row + 1, column, alreadyCoveredMapObj);
  updateViewBoard(mineBoard, viewBoard, row + 1, column + 1, alreadyCoveredMapObj);
}

var markSpace = function(viewBoard) {
  if (viewBoard[cursorLocation[0]][cursorLocation[1]] === '[  ]_'){
    console.log('yay')
    viewBoard[cursorLocation[0]][cursorLocation[1]] = ' b ';
    renderBoard(viewBoard); 
  } else if (viewBoard[cursorLocation[0]][cursorLocation[1]] === ' b _') {
    viewBoard[cursorLocation[0]][cursorLocation[1]] = '[  ]';
    renderBoard(viewBoard);
  } else {
    return;
  }
    
}

runGame();
