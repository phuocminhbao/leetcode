/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
    let numberOfPlacings = 0;
    const chessBoard = [...new Array(n)].map(() => new Array(n).fill(0));
    const fullFill = (col, row, direction, isBlock) => {
        const value = isBlock ? 1 : 0;
        if (direction === "horizontal") {
            chessBoard[row].fill(value);
            return;
        }
        if (direction === "vertical") {
            chessBoard.forEach((currRow) => {
                currRow[col] = value;
            });
            return;
        }
        // Down diagonal
        let c = col,
            r = row;
        while (c < n && r < n) {
            chessBoard[r][c] = value;
            c++;
            r++;
        }
        // Top diagonal
        c = col;
        r = row;
        while (c < n && r < n) {
            chessBoard[r][c] = value;
            c--;
            r--;
        }
    };
    const backtrack = (r, c, remaing) => {
        if (remaing === 0) {
            numberOfPlacings++;
            return;
        }
        if (r >= n || c >= n) {
            return;
        }

        for (let row = 0; row < n; row++) {
            for (let col = 0; col <= n; col++) {}
        }
    };
    backtrack(0, 0, n);
    return numberOfPlacings;
};

const n = 4;
console.log(totalNQueens(n));
