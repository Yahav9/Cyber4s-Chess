const PIECES=['rook','knight','bishop','queen','king','bishop','knight','rook',];
let chessBoard;
let selectedSquare;
let selectedPiece;
let game;



function addImage(square, player, type) {
  const image = document.createElement('img');
  image.src = 'images\\' + player + '_' + type + '.png';
  square.appendChild(image);
}


function showMovesForPiece(row, col) {
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      chessBoard.rows[k].cells[l].classList.remove('possible-move');
      chessBoard.rows[k].cells[l].classList.remove('selected');
    }
  }
  const piece = game.boardData.getPiece(row, col);
  if (piece !== undefined) {
    let possibleMoves = game.getPossibleMoves(piece);
    for (let possibleMove of possibleMoves)
      chessBoard.rows[possibleMove[0]].cells[possibleMove[1]].classList.add('possible-move');
  }
  chessBoard.rows[row].cells[col].classList.add('selected');
    selectedPiece = piece;
}

//click event
function onSquareClick(row, col) {
  if (selectedPiece !== undefined && game.tryMove(selectedPiece, row, col)) {
    selectedPiece = undefined;
    createChessBoard(game.boardData);
    } else {
      showMovesForPiece(row, col);
    }
  }
//creating board and pieces
function initGame() {
  game= new Game('white');
  createChessBoard(game.boardData);
}

function createChessBoard(boardData) {
  chessBoard= document.getElementById('chess-board');
  if(chessBoard !== null){
    chessBoard.remove();
  }
  
  chessBoard = document.createElement('table');
  chessBoard.id = 'chess-board';
  document.body.appendChild(chessBoard);
  for (let i = 0; i < 8; i++) {
    const chessRow = chessBoard.insertRow();
    for (let j = 0; j < 8; j++) {
      let square = chessRow.insertCell();
      if (i % 2 === 0 && j % 2 === 0) {
        square.className = 'white';
      } else if (i % 2 !== 0 && j % 2 !== 0) {
        square.className = 'white';
      } else {
        square.className = 'black';
      }
      square.addEventListener('click', () => onSquareClick(i, j));
    }
  }
  for (let piece of boardData.pieces) {
    addImage(chessBoard.rows[piece.row].cells[piece.col], piece.player, piece.type)
  }

  if (game.winner !== undefined) {
    const winnerPopup = document.createElement('div');
    winnerPopup.textContent = game.winner + ' player wins!';
    winnerPopup.classList.add('winner-dialog');
    chessBoard.appendChild(winnerPopup)
  }
}


window.addEventListener('load', initGame)