const chessBoard= document.createElement('table');
document.body.appendChild(chessBoard);
for(let i=1; i<9; i++){
const chessRow= chessBoard.insertRow();
for(let j=1; j<9; j++){
    const chessSquare= chessRow.insertCell();
if (i%2===0 && j%2===0){
        chessSquare.className='white';
    } else if(i%2!==0 && j%2!==0){
        chessSquare.className='white';
    } else {
        chessSquare.className='black';
    }}};
