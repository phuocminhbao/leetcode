/**
 * @param {string[]} board
 * @return {number[]}
 */
const pathsWithMaxScore = (board) => {
    const length = board.length;
    const memo = {};

    const dp = (x, y) => {
        if (memo[`${x}-${y}`]) {
            return memo[`${x}-${y}`];
        }
        if (x < 0 || y < 0) {
            return [0, 0];
        }
        let value = board[x].charAt(y);
        if (value === "E") {
            return [0, 1];
        }
        if (value === "X") {
            return [0, 0];
        }
        value = value === "S" ? 0 : Number(value);
        const res1 = dp(x - 1, y); // up
        const res2 = dp(x - 1, y - 1); // diagonal
        const res3 = dp(x, y - 1); // left
        const newMax = Math.max(res1[0], res2[0], res3[0]);
        const newPaths = [res1, res2, res3].reduce(
            (totalPaths, [currMax, currPath]) => {
                return totalPaths + (currMax === newMax ? currPath : 0);
            },
            0,
        );
        const res = newPaths === 0 ? [0, 0] : [newMax + value, newPaths];
        memo[`${x}-${y}`] = res;
        return res;
    };

    return dp(length - 1, length - 1, 0, 0);
};

const board = ["E11", "XXX", "11S"];
const res = pathsWithMaxScore(board);
debugger;
