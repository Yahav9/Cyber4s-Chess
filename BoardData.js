class BoardData {
  constructor() {
    this.getInitialPieces();
  }

  getInitialPieces() {
    this.pieces = [];
    for(let i=0; i<8; i++){
      this.pieces.push(new Piece(7, i, PIECES[i], 'white'))
      this.pieces.push(new Piece(6, i, 'pawn', 'white'));
      this.pieces.push(new Piece(0, i, PIECES[i], 'black'))
      this.pieces.push(new Piece(1, i, 'pawn',  'black'));
    }
  }

  getPiece(row, col) {
    for (let piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
  }

  isEmpty(row, col,) {
    return this.getPiece(row, col) === undefined;
  }

  isPlayer(row, col, player) {
    const piece = this.getPiece(row, col);
    return piece !== undefined && piece.player === player;
  }

  removePiece(row, col) {
    for (let i = 0; i < this.pieces.length; i++) {
      const piece = this.pieces[i];
      if (piece.row === row && piece.col === col) {
        this.pieces.splice(i, 1);
        return piece;
      }
    }
  }
}
