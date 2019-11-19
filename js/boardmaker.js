let board = document.getElementById('board');
boardMaker = () => {

  // creates the cell nodes and adds click events to it
  for (var i = 0; i < 9; i++) {
    var node = document.createElement('div');
    node.classList.add('cell');
    node.value = i;
    if (i > 5){
      node.classList.add('bottom');
    }
    node.onclick = cellClickHandler;
    board.appendChild(node);
  }

}

const cellClickHandler = (e) => {
  let target = e.currentTarget;
  let value = e.currentTarget.value;


  // handle the change to the cell and the styling overall
  if (target.classList.contains('x') || target.classList.contains('circle')) {
    alert('nice try cheater');
  } else if (currTurn === "X") {
    target.classList.add('x')
    currentBoard[currTurn].push(value)
    turnStart(value);
  } else {
    target.classList.add('circle')
    currentBoard[currTurn].push(value)
    turnStart(value);
  }
}

resetBoard = () => {
  // deletes cells and creates a brand new board
  while (board.firstChild) {
    board.removeChild(board.firstChild)
  }

  currentBoard["X"] = [];
  currentBoard["O"] = [];
  boardMaker();
}