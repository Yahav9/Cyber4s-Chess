let chessBoard;
let selectedSquare;
let boardData;


class BoardData {
  constructor(pieces) {
    this.pieces = pieces;
  }

  getPiece(row, col) {
    for (let piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
  }
}

class Piece {
  constructor(row, col, type, player) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.player = player;
  }

  getPossibleMoves() {
    let relativeMoves = [];
    if (this.type === 'pawn') {
      relativeMoves = this.getPawnRelativeMoves();
    } else if (this.type === 'rook') {
      relativeMoves = this.getRookRelativeMoves();
    } else if (this.type === 'knight') {
      relativeMoves = this.getKnightRelativeMoves();
    } else if (this.type === 'bishop') {
      relativeMoves = this.getBishopRelativeMoves();
    } else if (this.type === 'king') {
      relativeMoves = this.getKingRelativeMoves();
    } else if (this.type === 'queen') {
      relativeMoves = this.getQueenRelativeMoves();
    }
    let absoluteMoves = [];
    for (let relativeMove of relativeMoves) {
      const absoluteRow = this.row + relativeMove[0];
      const absoluteCol = this.col + relativeMove[1];
      absoluteMoves.push([absoluteRow, absoluteCol]);
    }
    let filteredMoves = [];
    for (let absoluteMove of absoluteMoves) {
      const absoluteRow = absoluteMove[0];
      const absoluteCol = absoluteMove[1];
      if (absoluteRow >= 0 && absoluteRow <= 7 && absoluteCol >= 0 && absoluteCol <= 7) {
        if (!(absoluteRow === this.row && absoluteCol === this.col)) {
          filteredMoves.push(absoluteMove);
        }
      }
    }
    return filteredMoves;
  }


  //possible moves for each piece
  getPawnRelativeMoves() {
    if (this.row === 1 && this.player === 'black') {
      return [[1, 0], [2, 0]];
    } else if (this.row !== 1 && this.player === 'black') {
      return [[1, 0]];
    } else if (this.row === 6 && this.player === 'white') {
      return [[-1, 0], [-2, 0]];
    } else if (this.row !== 6 && this.player === 'white') {
      return [[-1, 0]];
    }
  }

  getRookRelativeMoves() {
    let moves = [];
    for (let i = -7; i < 8; i++) {
      moves.push([i, 0]);
      moves.push([0, i]);
    }
    return moves;
  }

  getKnightRelativeMoves() {
    return [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
  }

  getBishopRelativeMoves() {
    let moves = [];
    for (let i = -7; i < 8; i++) {
      moves.push([i, i]);
      moves.push([i, -i]);
    }
    return moves;
  }

  getKingRelativeMoves() {
    let moves = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        moves.push([i, j]);
      }
    }
    return moves;
  }

  getQueenRelativeMoves() {
    let moves = [];
    for (let i = -7; i < 8; i++) {
      moves.push([i, 0]);
      moves.push([0, i]);
      moves.push([i, i]);
      moves.push([i, -i]);
    }
    return moves;
  }
}


// calling the pieces
function addPieces(result, row, player) {
  result.push(new Piece(row, 0, 'rook', player));
  result.push(new Piece(row, 1, 'knight', player));
  result.push(new Piece(row, 2, 'bishop', player));
  result.push(new Piece(row, 3, 'queen', player));
  result.push(new Piece(row, 4, 'king', player));
  result.push(new Piece(row, 5, 'bishop', player));
  result.push(new Piece(row, 6, 'knight', player));
  result.push(new Piece(row, 7, 'rook', player));
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


//click event
function onSquareClick(event, row, col) {
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      chessBoard.rows[k].cells[l].classList.remove('possible-move');
    }
  }
  const piece = boardData.getPiece(row, col);
  if (piece !== undefined) {
    let possibleMoves = piece.getPossibleMoves();
    for (let possibleMove of possibleMoves)
      chessBoard.rows[possibleMove[0]].cells[possibleMove[1]].classList.add('possible-move');
  }
  if (selectedSquare !== undefined) {
    selectedSquare.classList.remove('selected');
  }
  selectedSquare = event.currentTarget;
  selectedSquare.classList.add('selected');
}


//creating the board and the pieces
function createChessBoard() {
  chessBoard = document.createElement('table');
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
  boardData = new BoardData(getInitialPieces());
  for (let piece of boardData.pieces) {
    addImage(chessBoard.rows[piece.row].cells[piece.col], piece.player, piece.type)
  }
}


window.addEventListener('load', createChessBoard)