const xClass = 'x';
const oClass = 'o';

let xTurn;

const cells = document.querySelectorAll('.cell');
const board = document.querySelector('#board');

const gameEndMessage = document.querySelector('[data-game-end-message]');

const gameEndElement = document.querySelector('#gameEndElement');

const restartButton = document.querySelector('#restarButton');

function startGame() {
   xTurn = true;
   board.classList.add('x');

   cells.forEach(cell => {
      cell.classList.remove(xClass);
      cell.classList.remove(oClass);
      board.classList.replace('o', 'x');

      cell.addEventListener('click', handleClick, { once: true });
   });

   restartButton.addEventListener('click', startGame);
   document.querySelector('main').classList.remove('end');
}

startGame();
