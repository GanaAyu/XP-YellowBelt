const {TicTacToe, PLAYER_X, PLAYER_O, SIZE} = require('../src/tic-tac-toe.js');

describe('TicTacToe', () => {
    beforeEach(() => {
        game = new TicTacToe();
    });
    describe('Board creation', () => {
        test('should create 3x3 game board when game starts', () => {
            const ROW = game.board.length;
            const COL = game.board[0].length;
            expect(ROW).toEqual(SIZE);
            expect(COL).toEqual(SIZE);
        });    
    });

});