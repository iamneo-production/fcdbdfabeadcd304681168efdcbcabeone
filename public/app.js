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
            RE
        }
    }
}