const players = {
  "X": "X's turn",
  "O": "O's turn"
}

const playersWinningMoves = {
  "X": [],
  "O": []
}

const scoreboard = {
  "X": 0,
  "O": 0
}

const currentBoard = {
  "X": [],
  "O": []
}

//  [0 , 1 , 2]
//  [3 , 4 , 5]
//  [6 , 7 , 8]
//  horizontal (012, 345, 678)
//  vertical (036, 147, 258)
//  diagonal (048, 642)
// const winningMoves = ['012', '345', '678', '036', '147', '258', '048', '246'];
const winningMoves = {
  0: {
    1: { 2: true},
    3: { 6: true},
    4: { 8: true}
  },
  1: {
    4: { 7: true}
  },
  2: {
    5: { 8: true},
    4: { 6: true}
  },
  3: {
    4: { 5: true}
  },
  6: {
    7: { 8: true}
  }
}

const xMoves = [];
const oMoves = [];
let currTurn = "X";

turnStart = (val = "") => {
  anyWinners(val);
  changeTurns();
}

changeTurns = () => {
  const turn = document.getElementById('turn-sign');
  currTurn = currTurn === "X" ? "O" : "X";

  turn.textContent = players[currTurn];
}
horizontalWin = (value, moves) => {
  if (value === 0 || value === 1 || value === 2) {
    if (moves.includes(1) && moves.includes(0) && moves.includes(2)){
      updateWinner(currTurn)
    }
  }
  if (value === 3 || value === 4 || value === 5) {
    if (moves.includes(4) && moves.includes(3) && moves.includes(5)){
      updateWinner(currTurn)
    }
  }
  if (value === 6 || value === 7 || value === 8) {
    if (moves.includes(7) && moves.includes(6) && moves.includes(8)){
      updateWinner(currTurn)
    }
  }
}

verticalWin = (value, moves) => {
  if (value === 0 || value === 3 || value === 6) {
    if (moves.includes(3) && moves.includes(0) && moves.includes(6)){
      updateWinner(currTurn)
    }
  }
  if (value === 1 || value === 4 || value === 7) {
    if (moves.includes(4) && moves.includes(1) && moves.includes(7)){
      updateWinner(currTurn)
    }
  }
  if (value === 2 || value === 5 || value === 8) {
    if (moves.includes(5) && moves.includes(2) && moves.includes(8)){
      updateWinner(currTurn)
    }
  }
}

diagonalWin = (value, moves) => {
  if (value === 0 || value === 4 || value === 8) {
    if (moves.includes(4) && moves.includes(0) && moves.includes(8)){
      updateWinner(currTurn)
    }
  }
  if (value === 6 || value === 4 || value === 2) {
    if (moves.includes(4) && moves.includes(6) && moves.includes(2)){
      updateWinner(currTurn)
    }
  }
}



anyWinners = (value) => {
  let moves = currentBoard[currTurn];
  console.log(moves)
  horizontalWin(value, moves);
  verticalWin(value, moves);
  diagonalWin(value, moves);

  // searches through the winning moves to see if it matches the currTurn's moves.
  // choices.forEach( (choice) => {
  //   if (choice in winningMoves) {
  //     arr.push(winningMoves[choice])
  //   }
  // });

  // winningMoves.forEach( (str, idx) => {
  // let choices = currentBoard[currTurn];
  // console.log(choices)
  //   if (choices.sort().join("").includes(str)) {
  //     updateWinner(currTurn);
  //   }
  // })


}

updateWinner = (winner) => {
  let node;
  if (winner === "X") {
    node = document.getElementsByClassName('x-score')[0];
    scoreboard[currTurn] = scoreboard[currTurn] + 1
    node.textContent = `X's score: ${scoreboard[currTurn]}`
    setTimeout( ()=> {
      alert(winner + " is the winner")
      resetBoard();
    }, 200)
  } else {
    node = document.getElementsByClassName('o-score')[0];
    scoreboard[currTurn] = scoreboard[currTurn] + 1
    node.textContent = `O's score: ${scoreboard[currTurn]}`
    setTimeout( ()=> {
      alert(winner + " is the winner")
      resetBoard();
    }, 200)
  }
}