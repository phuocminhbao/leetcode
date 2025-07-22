/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
    let numberOfPlacings = 0;
    const visitedCols = {};
    const visitedDiagonalLeft = {};
    const visitedDiagonalRight = {};

    const backtrack = (row, remaing) => {
        if (remaing === 0) {
            numberOfPlacings++;
            return;
        }
        if (row >= n) {
            return;
        }

        for (let col = 0; col < n; col++) {
            // Vertical
            if (visitedCols[col]) {
                continue;
            }
            const diagonalLeft = row - col;
            const diagonalRight = row + col;
            // Diagonal
            if (
                visitedDiagonalLeft[diagonalLeft] ||
                visitedDiagonalRight[diagonalRight]
            ) {
                continue;
            }

            // Placeable
            visitedCols[col] = true;
            visitedDiagonalLeft[diagonalLeft] = true;
            visitedDiagonalRight[diagonalRight] = true;
            backtrack(row + 1, remaing - 1);
            visitedCols[col] = false;
            visitedDiagonalLeft[diagonalLeft] = false;
            visitedDiagonalRight[diagonalRight] = false;
        }
    };
    backtrack(0, n);
    return numberOfPlacings;
};

const n = 4;
console.log(totalNQueens(n));
