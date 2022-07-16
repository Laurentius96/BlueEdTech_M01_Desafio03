const xClass = 'x';
const oClass = 'o';

let xTurn;

const cells = document.querySelectorAll('.cell');
const board = document.querySelector('#board');

const gameEndMessage = document.querySelector('[data-game-end-message]');

const gameEndElement = document.querySelector('#gameEndElement');

const restartButton = document.querySelector('#restarButton');
