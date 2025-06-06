/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare1 = (matrix) => {
    const memo = {};
    const maxSide = Math.min(matrix.length, matrix[0].length);
    const is1FullFilled = (x, y, sideLength) => {
        for (let row = x; row < x + sideLength; row++) {
            for (let col = y; col < y + sideLength; col++) {
                if (matrix[row][col] === "0") {
                    return false;
                }
            }
        }
        return true;
    };
    const findSquare = (x, y, sideLength) => {
        if (memo[`${x}-${y}-${sideLength}`] !== undefined) {
            return memo[`${x}-${y}-${sideLength}`];
        }
        if (is1FullFilled(x, y, sideLength)) {
            return true;
        }

        let isSquare = false;
        if (x + sideLength < matrix.length) {
            isSquare = isSquare || findSquare(x + 1, y, sideLength);
        }
        if (y + sideLength < matrix[0].length) {
            isSquare = isSquare || findSquare(x, y + 1, sideLength);
        }
        if (
            y + sideLength < matrix[0].length &&
            x + sideLength < matrix.length
        ) {
            isSquare = isSquare || findSquare(x + 1, y + 1, sideLength);
        }
        memo[`${x}-${y}-${sideLength}`] = isSquare;
        return isSquare;
    };
    for (let sideLength = maxSide; sideLength > 0; sideLength--) {
        if (findSquare(0, 0, sideLength)) {
            return sideLength * sideLength;
        }
    }
    return 0;
};

const maximalSquareMemoi = (matrix) => {
    const dp = [];
    dp.length = matrix.length;
    for (let i = 0; i < dp.length; i++) {
        dp[i] = [];
        dp[i].length = matrix[0].length;
        dp[i].fill(0);
    }

    const memo = {};
    const getCellValue = (row, col) => {
        if (memo[`${row}-${col}`]) {
            return memo[`${row}-${col}`];
        }
        if (!matrix[row]?.[col] || matrix[row][col] === "0") {
            return 0;
        }
        const right = getCellValue(row, col + 1);
        const down = getCellValue(row + 1, col);
        const diagonal = getCellValue(row + 1, col + 1);
        const cellValue = Math.min(right, down, diagonal) + 1;
        memo[`${row}-${col}`] = cellValue;
        return cellValue;
    };

    for (let row = 0; row < dp.length; row++) {
        for (let col = 0; col < dp[0].length; col++) {
            dp[row][col] = getCellValue(row, col);
        }
    }
    const maxSquareSide = Math.max(...dp.flat());
    return maxSquareSide * maxSquareSide;
};

const maximalSquareTap = (matrix) => {
    // Process base cases
    const dp = [];

    // To make sure right, down and diagonal always contains value
    // fill base cases for most right and most down cells
    const lastRow = matrix.length - 1;
    const lastCol = matrix[0].length - 1;
    // Fill most right cells
    for (let row = 0; row <= lastRow; row++) {
        dp[row] = [];
        dp[row][lastCol] = Number(matrix[row][lastCol]);
    }
    // Fill most down cells
    for (let col = 0; col <= lastCol; col++) {
        dp[lastRow][col] = Number(matrix[lastRow][col]);
    }

    for (let row = lastRow - 1; row >= 0; row--) {
        for (let col = lastCol - 1; col >= 0; col--) {
            if (matrix[row][col] === "0") {
                dp[row][col] = 0;
                continue;
            }
            const right = dp[row][col + 1];
            const down = dp[row + 1][col];
            const diagonal = dp[row + 1][col + 1];
            dp[row][col] = Math.min(right, down, diagonal) + 1;
        }
    }
    const maxSquareSide = Math.max(...dp.flat());
    return maxSquareSide * maxSquareSide;
};

const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
];
const res = maximalSquareTap(matrix);
console.log(res);
