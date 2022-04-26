const PIECES=['rook','knight','bishop','queen','king','bishop','knight','rook',];
let chessBoard;
let selectedSquare;
let boardData;
let selectedPiece;


// calling the pieces
function addPieces(result, row, player,) {
 for(let i=0; i<8; i++){
   result.push(new Piece(row, i, PIECES[i], player))
 }
}

function addPawns(result, row, player) {
  for (i = 0; i < 8; i++) {
    result.push(new Piece(row, i, 'pawn', player));
  }
}

function getInitialPieces() {
  let result = [];
  addPieces(result, 7, 'white');
  addPawns(result, 6, 'white');
  addPieces(result, 0, 'black');
  addPawns(result, 1, 'black');
  return result
}

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
  const piece = boardData.getPiece(row, col);
  if (piece !== undefined) {
    let possibleMoves = piece.getPossibleMoves(boardData);
    for (let possibleMove of possibleMoves)
      chessBoard.rows[possibleMove[0]].cells[possibleMove[1]].classList.add('possible-move');
  }
  chessBoard.rows[row].cells[col].classList.add('selected');
    selectedPiece = piece;
}

function tryMove(piece, row, col) {
  const possibleMoves = piece.getPossibleMoves(boardData);
  for (const possibleMove of possibleMoves) {
    if (possibleMove[0] === row && possibleMove[1] === col) {
      boardData.removePiece(row, col);
      piece.row = row;
      piece.col = col;
      return true;
    }
  }
  return false;
}

//click event
function onSquareClick(event, row, col) {
  if (selectedPiece === undefined) {
    showMovesForPiece(row, col);
  } else {
    if (tryMove(selectedPiece, row, col)) {
      selectedPiece = undefined;
      createChessBoard(boardData);
    } else {
      showMovesForPiece(row, col);
    }
  }
}
//creating board and pieces
function initGame() {
  boardData = new BoardData(getInitialPieces());
  createChessBoard(boardData);
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
      square.addEventListener('click', (event) => onSquareClick(event, i, j));
    }
  }
  for (let piece of boardData.pieces) {
    addImage(chessBoard.rows[piece.row].cells[piece.col], piece.player, piece.type)
  }
}


window.addEventListener('load', initGame)