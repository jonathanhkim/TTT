boardMaker = () => {
  var board = document.getElementById('board');

  // creates the cell nodes and adds click events to it
  for (var i = 0; i < 9; i++) {
    var node = document.createElement('div');
    node.classList.add('cell');

    if (i > 5){
      node.classList.add('bottom');
    }

    node.onclick = cellClickHandler;
    board.appendChild(node);
  }

}

const cellClickHandler = (e) => {
  // handle the change to the cell and the styling overall
  e.currentTarget.classList.add('circle')

}