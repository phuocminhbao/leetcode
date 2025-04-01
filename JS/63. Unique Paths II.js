/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstaclesMemoization = (obstacleGrid) => {
  if ([undefined, 1].includes(obstacleGrid[0]?.[0])) {
    return 0;
  }
  const memo = {};
  const lastRow = obstacleGrid.length - 1;
  const lastCol = obstacleGrid[0].length - 1;
  const go = (row, col) => {
    if ([undefined, 1].includes(obstacleGrid[row]?.[col])) {
      return 0;
    }
    if (row === lastRow && col === lastCol) {
      return 1;
    }
    const rightWays = go(row, col + 1);
    const downWays = go(row + 1, col);
    const ways = rightWays + downWays;
    memo[`${row}-${col}`] = ways;
    return ways;
  };
  return go(0, 0);
};

const uniquePathsWithObstaclesTabulation = (obstacleGrid) => {
  const lastRow = obstacleGrid.length - 1;
  const lastCol = obstacleGrid[0].length - 1;
  let blocked = obstacleGrid[0][0] === 1;
  const dp = [];
  // Proccess base case
  dp[0] = obstacleGrid[0].map((value) => {
    if (blocked) {
      return 0;
    }
    if (value === 1) {
      blocked = true;
      return 0;
    }
    return 1;
  });

  for (let row = 1; row < obstacleGrid.length; row++) {
    dp[row] = [];
    for (let col = 0; col < obstacleGrid[0].length; col++) {
      if (obstacleGrid[row][col] === 1) {
        dp[row][col] = 0;
        continue;
      }
      dp[row][col] = dp[row - 1][col] + (dp[row]?.[col - 1] ?? 0);
    }
  }
  return dp[lastRow][lastCol];
};

const grid = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const res = uniquePathsWithObstaclesTabulation(grid);

console.log(res);
