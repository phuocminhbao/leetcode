/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders = (board) => {
    const n = board[0].length;
    const destination = Math.pow(n, 2);
    const getPosition = (num) => {
        const index = num - 1;
        const rowFromBottom = Math.floor(index / n);
        const row = n - 1 - rowFromBottom;

        const colFromLeft = index % n;

        // Direction alternates for each row from the bottom
        const col = rowFromBottom % 2 === 0 ? colFromLeft : n - 1 - colFromLeft;

        return [row, col];
    };

    let moves = 0;
    let queue = [1];
    const visited = new Set([1]);

    while (queue.length > 0) {
        const queueLen = queue.length;
        const nextQueue = [];
        for (let item = 0; item < queueLen; item++) {
            const currPos = queue.pop();
            if (currPos === destination) {
                return moves;
            }
            for (
                let nextPos = currPos + 1;
                nextPos <= Math.min(destination, currPos + 6);
                nextPos++
            ) {
                const [currRow, currCol] = getPosition(nextPos);
                const nextDes =
                    board[currRow][currCol] === -1
                        ? nextPos
                        : board[currRow][currCol];

                if (!visited.has(nextDes)) {
                    visited.add(nextDes);
                    nextQueue.push(nextDes);
                }
            }
        }
        moves++;
        queue = nextQueue;
    }

    return -1;
};

const board = [
    [-1, 4, -1],
    [6, 2, 6],
    [-1, 3, -1],
];

const res = snakesAndLadders(board);
debugger;
