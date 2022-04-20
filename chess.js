let chessBoard;
let selectedSquare;
let pieces=[];


// const WHITE_ROOK = document.createElement('img');
// WHITE_ROOK.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png';
// const WHITE_KNIGHT = document.createElement('img');
// WHITE_KNIGHT.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png';
// const WHITE_BISHOB = document.createElement('img');
// WHITE_BISHOB.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png';
// const WHITE_ROOK2 = document.createElement('img');
// WHITE_ROOK2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png';
// const WHITE_KNIGHT2 = document.createElement('img');
// WHITE_KNIGHT2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png';
// const WHITE_BISHOB2 = document.createElement('img');
// WHITE_BISHOB2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png';
// const WHITE_QUEEN = document.createElement('img');
// WHITE_QUEEN.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/45px-Chess_qlt45.svg.png';
// const WHITE_KING = document.createElement('img');
// WHITE_KING.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/45px-Chess_klt45.svg.png';
// const WHITE_PAWN1 = document.createElement('img');
// WHITE_PAWN1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN2 = document.createElement('img');
// WHITE_PAWN2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN3 = document.createElement('img');
// WHITE_PAWN3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN4 = document.createElement('img');
// WHITE_PAWN4.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN5 = document.createElement('img');
// WHITE_PAWN5.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN6 = document.createElement('img');
// WHITE_PAWN6.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN7 = document.createElement('img');
// WHITE_PAWN7.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const WHITE_PAWN8 = document.createElement('img');
// WHITE_PAWN8.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
// const BLACK_ROOK = document.createElement('img');
// BLACK_ROOK.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png';
// const BLACK_KNIGHT = document.createElement('img');
// BLACK_KNIGHT.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png';
// const BLACK_BISHOB = document.createElement('img');
// BLACK_BISHOB.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/45px-Chess_bdt45.svg.png';
// const BLACK_ROOK2 = document.createElement('img');
// BLACK_ROOK2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png';
// const BLACK_KNIGHT2 = document.createElement('img');
// BLACK_KNIGHT2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png';
// const BLACK_BISHOB2 = document.createElement('img');
// BLACK_BISHOB2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/45px-Chess_bdt45.svg.png';
// const BLACK_QUEEN = document.createElement('img');
// BLACK_QUEEN.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/45px-Chess_qdt45.svg.png';
// const BLACK_KING = document.createElement('img');
// BLACK_KING.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/45px-Chess_kdt45.svg.png';
// const BLACK_PAWN1 = document.createElement('img');
// BLACK_PAWN1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN2 = document.createElement('img');
// BLACK_PAWN2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN3 = document.createElement('img');
// BLACK_PAWN3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN4 = document.createElement('img');
// BLACK_PAWN4.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN5 = document.createElement('img');
// BLACK_PAWN5.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN6 = document.createElement('img');
// BLACK_PAWN6.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN7 = document.createElement('img');
// BLACK_PAWN7.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';
// const BLACK_PAWN8 = document.createElement('img');
// BLACK_PAWN8.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png';

// document.getElementById('1-1').appendChild(WHITE_ROOK);
// document.getElementById('1-2').appendChild(WHITE_KNIGHT);
// document.getElementById('1-3').appendChild(WHITE_BISHOB);
// document.getElementById('1-4').appendChild(WHITE_QUEEN);
// document.getElementById('1-5').appendChild(WHITE_KING);
// document.getElementById('1-6').appendChild(WHITE_BISHOB2);
// document.getElementById('1-7').appendChild(WHITE_KNIGHT2);
// document.getElementById('1-8').appendChild(WHITE_ROOK2);
// document.getElementById('2-1').appendChild(WHITE_PAWN1);
// document.getElementById('2-2').appendChild(WHITE_PAWN2);
// document.getElementById('2-3').appendChild(WHITE_PAWN3);
// document.getElementById('2-4').appendChild(WHITE_PAWN4);
// document.getElementById('2-5').appendChild(WHITE_PAWN5);
// document.getElementById('2-6').appendChild(WHITE_PAWN6);
// document.getElementById('2-7').appendChild(WHITE_PAWN7);
// document.getElementById('2-8').appendChild(WHITE_PAWN8);
// document.getElementById('8-1').appendChild(BLACK_ROOK);
// document.getElementById('8-2').appendChild(BLACK_KNIGHT);
// document.getElementById('8-3').appendChild(BLACK_BISHOB);
// document.getElementById('8-4').appendChild(BLACK_QUEEN);
// document.getElementById('8-5').appendChild(BLACK_KING);
// document.getElementById('8-6').appendChild(BLACK_BISHOB2);
// document.getElementById('8-7').appendChild(BLACK_KNIGHT2);
// document.getElementById('8-8').appendChild(BLACK_ROOK2);
// document.getElementById('7-1').appendChild(BLACK_PAWN1);
// document.getElementById('7-2').appendChild(BLACK_PAWN2);
// document.getElementById('7-3').appendChild(BLACK_PAWN3);
// document.getElementById('7-4').appendChild(BLACK_PAWN4);
// document.getElementById('7-5').appendChild(BLACK_PAWN5);
// document.getElementById('7-6').appendChild(BLACK_PAWN6);
// document.getElementById('7-7').appendChild(BLACK_PAWN7);
// document.getElementById('7-8').appendChild(BLACK_PAWN8);

class Piece {
    constructor(row, col, type, player) {
      this.row = row;
      this.col = col;
      this.type = type;
      this.player = player;
    }
    getPossibleMoves() {
      let relativeMoves=[];
      if (this.type === 'pawn') {
        relativeMoves = this.getPawnRelativeMoves();
      } else if (this.type === 'rook') {
        // relativeMoves = this.getRookRelativeMoves();
      } else if (this.type === 'knight') {
        // relativeMoves = this.getKnightRelativeMoves()
      } else if (this.type === 'bishop') {
        // relativeMoves = this.getBishopRelativeMoves()
      } else if (this.type === 'king') {
        // relativeMoves = this.getKingRelativeMoves()
      } else if (this.type === 'queen') {
        // relativeMoves = this.getPQueenRelativeMoves()
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
        filteredMoves.push(absoluteMove);
      }
    }
    return filteredMoves;
    }

    //possible moves for each piece
    getPawnRelativeMoves(){
      if (this.row===1 && this.player==='black'){
        return [[1,0],[2,0]]
      }else if(this.row!==1 && this.player==='black'){
        return [[1,0]]
      }else if(this.row===6 && this.player==='white'){
        return [[-1,0],[-2,0]]
      }else if(this.row!==6 && this.player==='white'){
        return [[-1,0]]
      }
    }
}

    function createChessBoard(){
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
                square.addEventListener('click',(event)=>onSquareClick(event, i, j));
            }}
       pieces= getInitialPieces();
       for (let piece of pieces){
         addImage(chessBoard.rows[piece.row].cells[piece.col],piece.player,piece.type)
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
      function addPawns(result, row, player){
      for (i=0; i<8; i++){
        result.push(new Piece(row, i, 'pawn', player));
      }};
      function getInitialPieces(){
         let result=[];
         addPieces(result, 7, 'white');
         addPawns(result, 6, 'white');
         addPieces(result, 0, 'black');
         addPawns(result, 1, 'black');
         return result
      }
function addImage(square, player, type) {
   const image= document.createElement('img');
   image.src='images\\'+player+'_'+type+'.png';  
   square.appendChild(image);
} 




      function onSquareClick(event,row,col) {
          for (let k = 0; k < 8;k++) {
            for (let l = 0; l < 8; l++) {
              chessBoard.rows[k].cells[l].classList.remove('possible-move');
            }
          }
          for (let piece of pieces) {
            if (piece.row === row && piece.col === col) {
              let possibleMoves = piece.getPossibleMoves();
              for (let possibleMove of possibleMoves)
              chessBoard.rows[possibleMove[0]].cells[possibleMove[1]].classList.add('possible-move');
            }
          }
          if (selectedSquare !== undefined) {
            selectedSquare.classList.remove('selected');
          }
          selectedSquare = event.currentTarget;
          selectedSquare.classList.add('selected');
      }


      window.addEventListener('load', createChessBoard)