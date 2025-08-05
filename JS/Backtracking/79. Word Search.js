/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    let isExist = false;
    const visited = {};

    /**
     * @param {number} row
     * @param {number} col
     * @param {string} word
     */
    const backtrack = (row, col, wordIndex) => {
        if (isExist) {
            return;
        }
        if (wordIndex >= word.length) {
            isExist = true;
            return;
        }
        if (
            row >= board.length ||
            row < 0 ||
            col >= board[0].length ||
            col < 0
        ) {
            return;
        }
        const character = board[row][col];
        if (character !== word[wordIndex]) {
            return;
        }
        const key = `${row}-${col}`;
        if (visited[key]) {
            return;
        }

        visited[key] = true;

        backtrack(row, col + 1, wordIndex + 1);
        backtrack(row + 1, col, wordIndex + 1);
        backtrack(row, col - 1, wordIndex + 1);
        backtrack(row - 1, col, wordIndex + 1);

        visited[key] = false;
    };
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (isExist) {
                return true;
            }
            backtrack(row, col, 0);
        }
    }
    return isExist;
};

const board = [["a"]];
const word = "a";
const res = exist(board, word);
debugger;
