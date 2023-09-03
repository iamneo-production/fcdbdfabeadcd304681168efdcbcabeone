const board = document.querySelectorAll('.btn');
const resultContainer = document.querySelector('.result');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let isGameOver = false;

function handleMove(event) {
    const cell =event.target;

    if(!cell.value && !isGameOver){
        cell.value = currentPlayer;
        cell.classList.add(currentPlayer);

        if(checkWin() || checkDraw()){
            endGame();
        } else{
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            resultContainer.textContent=`Player ${currentPlayer}'s Turn`;
        }
    }
}

board.forEach(cell => cell.addEventListener('click',handleMove));

function checkWin(){
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    return winningCombos.some(combo => {
        const [a,b,c] =combo;
        return board[a].value && board[a].value === board[b].value && board[a].value === board[c].value;
    })
}

function checkDraw(){
    return [...board].every(cell => cell.value);
}

function endGame(){
    isGameOver =true;
    resultContainer.textContent=isGameOver?"Game Over":`Player ${currentPlayer} Wins!`;
    resetButton.removeAttribute('disabled');
}

resetButton.addEventListener('click',() => {
    board.forEach(cell => {
        cell.value='';
        cell.classList.remove('X','O');
    });

    currentPlayer = 'x';
    isGameOver=false;
    resultContainer.textContent=`Player ${currentPlayer}'s Turn`;
    resetButton.setAttribute('disabled',true);
});

resultContainer.textContent=`Player ${currentPlayer}'s Turn`;