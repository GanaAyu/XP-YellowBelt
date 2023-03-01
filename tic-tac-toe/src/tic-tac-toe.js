const PLAYER_X = 'X';
const PLAYER_O = 'O';
const SIZE = 3;

class TicTacToe {
    board;
    player;
    winner;
    resultMessage;
        
    constructor() {
        this.createGame();
    }

    createGame(){
        this.createGameBoard();
    }
    createGameBoard(){
        this.board = Array(SIZE).fill().map(() => Array(SIZE).fill(''));
    }
}

module.exports = {
    TicTacToe,
    PLAYER_X,
    PLAYER_O,
    SIZE
}