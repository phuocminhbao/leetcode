/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
    const getShortest = (row, index) => {
        if (row === grid.length - 1 || index === grid[0].length - 1) {
            return grid[row][index] ?? Infinity;
        }

        const right = getShortest(row, index + 1);
        const down = getShortest(row + 1, index);
        console.log(`${grid[row][index]} -> ${Math.min(right, down)}`);
        return grid[row][index] + Math.min(right, down);
    };
    return getShortest(0, 0);
};

minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]);
