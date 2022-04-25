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

  isEmpty(row, col,){
    return this.getPiece(row, col)===undefined;
  }

  isPlayer(row, col, player){
const piece= this.getPiece(row, col);
return piece!==undefined && piece.player === player;
  }
}

class Piece {
  constructor(row, col, type, player) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.player = player;
  }

  getOpponent(){
    if(this.player=== 'white'){
      return 'black';
    }
    return 'white';
  }

  getPossibleMoves(boardData) {
    let moves = [];
    if (this.type === 'pawn') {
      moves = this.getPawnMoves(boardData);
    } else if (this.type === 'rook') {
      moves = this.getRookMoves(boardData);
    } else if (this.type === 'knight') {
      moves = this.getKnightMoves(boardData);
    } else if (this.type === 'bishop') {
      moves = this.getBishopMoves(boardData);
    } else if (this.type === 'king') {
      moves = this.getKingMoves(boardData);
    } else if (this.type === 'queen') {
      moves = this.getQueenMoves(boardData);
    }
    // let absoluteMoves = [];
    // for (let relativeMove of relativeMoves) {
    //   const absoluteRow = this.row + relativeMove[0];
    //   const absoluteCol = this.col + relativeMove[1];
    //   absoluteMoves.push([absoluteRow, absoluteCol]);
    // }
    let filteredMoves = [];
    for (let absoluteMove of moves) {
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

  getMovesInDirection(directionRow, directionCol, boardData) {
    let result = [];
    for (let i = 1; i < 8; i++) {
      let row = this.row + directionRow * i;
      let col = this.col + directionCol * i;
      if (boardData.isEmpty(row, col)) {
        result.push([row, col]);
      } else if (boardData.isPlayer(row, col, this.getOpponent())) {
        result.push([row, col]);
        return result;
      } else if (boardData.isPlayer(row, col, this.player)) {
        return result;
      }
    }
    return result;
  }


  //possible moves for each piece
  getPawnMoves(boardData) {
    let result = [];
    let direction = 1;
    if (this.player === 'white') {
      direction = -1;
    }

    let position = [this.row + direction, this.col];
    if (boardData.isEmpty(position[0], position[1])) {
      result.push(position);
    }

    position = [this.row + direction, this.col + direction];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent())) {
      result.push(position);
    }

    position = [this.row + direction, this.col - direction];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent())) {
      result.push(position);
    }

console.log(result)
    return result;
  }

  getRookMoves(boardData) {
    let moves = [];
    moves= moves.concat(this.getMovesInDirection(-1, 0, boardData));
    moves= moves.concat(this.getMovesInDirection(1, 0, boardData));
    moves= moves.concat(this.getMovesInDirection(0, -1, boardData));
    moves= moves.concat(this.getMovesInDirection(0, 1, boardData));
    return moves;
  }

  getKnightMoves(boardData) {
    let result=[];
    const relativeMoves= [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
    for (const relativeMove of relativeMoves){
      let row = this.row + relativeMove[0];
      let col = this.col + relativeMove[1]; 
      if (!boardData.isPlayer(row, col, this.player)){
        result.push([row,col]);
      }
    }
    return result;
  }

  getBishopMoves(boardData) {
    let moves = [];
    moves= moves.concat(this.getMovesInDirection(1, 1, boardData));
    moves= moves.concat(this.getMovesInDirection(1, -1, boardData));
    moves= moves.concat(this.getMovesInDirection(-1, -1, boardData));
    moves= moves.concat(this.getMovesInDirection(-1, 1, boardData));
    return moves;
  }

  getKingMoves(boardData) {
  let result=[];
    let relativeMoves = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        relativeMoves.push([i, j]);
      }
    }
    for (const relativeMove of relativeMoves){
    let row = this.row + relativeMove[0];
    let col = this.col + relativeMove[1]; 
    if (!boardData.isPlayer(row, col, this.player)){
      result.push([row,col]);
    }
  }
  return result;
}

  getQueenMoves(boardData) {
    let moves = [];
    moves= moves.concat(this.getMovesInDirection(-1, 0, boardData));
    moves= moves.concat(this.getMovesInDirection(1, 0, boardData));
    moves= moves.concat(this.getMovesInDirection(0, -1, boardData));
    moves= moves.concat(this.getMovesInDirection(0, 1, boardData));
    moves= moves.concat(this.getMovesInDirection(1, 1, boardData));
    moves= moves.concat(this.getMovesInDirection(1, -1, boardData));
    moves= moves.concat(this.getMovesInDirection(-1, -1, boardData));
    moves= moves.concat(this.getMovesInDirection(-1, 1, boardData));
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
    let possibleMoves = piece.getPossibleMoves(boardData);
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