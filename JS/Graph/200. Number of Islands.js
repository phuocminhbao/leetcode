/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslandsDFS = (grid) => {
    const ROW_LENGTH = grid.length;
    const COL_LENGTH = grid[0].length;
    let lands = 0;
    const dfs = (row, col) => {
        const value = grid[row]?.[col] ?? "0";
        if (value === "0") {
            return;
        }
        grid[row][col] = "0";
        dfs(row + 1, col);
        dfs(row, col + 1);
        dfs(row - 1, col);
        dfs(row, col - 1);
    };
    for (let row = 0; row < ROW_LENGTH; row++) {
        for (let col = 0; col < COL_LENGTH; col++) {
            const value = grid[row][col];
            if (value === "0") {
                continue;
            }
            lands++;
            dfs(row, col);
            grid[row][col] = "0";
        }
    }
    return lands;
};

const numIslandsBFS = (grid) => {
    const ROW_LENGTH = grid.length;
    const COL_LENGTH = grid[0].length;
    let lands = 0;
    const debug = [];
    const bfs = (row, col) => {
        grid[row][col] = "0";
        const queue = [[row, col]];
        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();
            [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0],
            ].forEach(([nextRow, nextCol]) => {
                const value =
                    grid[currRow + nextRow]?.[currCol + nextCol] ?? "0";
                if (value === "1") {
                    grid[currRow + nextRow][currCol + nextCol] = "0";
                    queue.push([currRow + nextRow, currCol + nextCol]);
                }
            });
        }
    };
    for (let row = 0; row < ROW_LENGTH; row++) {
        for (let col = 0; col < COL_LENGTH; col++) {
            const value = grid[row][col];
            if (value === "0") {
                continue;
            }
            lands++;
            debug.push(`${row}-${col}`);
            bfs(row, col);
        }
    }
    return lands;
};

const grid = [
    ["1", "0", "1"],
    ["0", "1", "0"],
    ["1", "0", "1"],
];

const res = numIslandsDFS(grid);
console.log(res);
