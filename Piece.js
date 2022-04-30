class Piece {
  constructor(row, col, type, player) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.player = player;
  }

  getOpponent() {
    if (this.player === 'white') {
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
    return result;
  }

  getRookMoves(boardData) {
    let moves = [];
    moves = moves.concat(this.getMovesInDirection(-1, 0, boardData));
    moves = moves.concat(this.getMovesInDirection(1, 0, boardData));
    moves = moves.concat(this.getMovesInDirection(0, -1, boardData));
    moves = moves.concat(this.getMovesInDirection(0, 1, boardData));
    return moves;
  }

  getKnightMoves(boardData) {
    let result = [];
    const relativeMoves = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
    for (const relativeMove of relativeMoves) {
      let row = this.row + relativeMove[0];
      let col = this.col + relativeMove[1];
      if (!boardData.isPlayer(row, col, this.player)) {
        result.push([row, col]);
      }
    }
    return result;
  }

  getBishopMoves(boardData) {
    let moves = [];
    moves = moves.concat(this.getMovesInDirection(1, 1, boardData));
    moves = moves.concat(this.getMovesInDirection(1, -1, boardData));
    moves = moves.concat(this.getMovesInDirection(-1, -1, boardData));
    moves = moves.concat(this.getMovesInDirection(-1, 1, boardData));
    return moves;
  }

  getKingMoves(boardData) {
    let result = [];
    let relativeMoves = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        relativeMoves.push([i, j]);
      }
    }
    for (const relativeMove of relativeMoves) {
      let row = this.row + relativeMove[0];
      let col = this.col + relativeMove[1];
      if (!boardData.isPlayer(row, col, this.player)) {
        result.push([row, col]);
      }
    }
    return result;
  }

  getQueenMoves(boardData) {
    let moves = [];
    moves = moves.concat(this.getBishopMoves(boardData));
    moves = moves.concat(this.getRookMoves(boardData));
    return moves;
  }
}
