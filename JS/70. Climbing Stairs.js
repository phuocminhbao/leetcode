const stairsMemorize = {
    1: 1,
    2: 2,
};

const climbStairsMemoization = (n) => {
    if (stairsMemorize[n]) {
        return stairsMemorize[n];
    }
    const result = climbStairs(n - 1) + climbStairs(n - 2);
    stairsMemorize[result] = result;
    return result;
};

const climbStairsTabulation = (n) => {
    const store = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        store[i] = store[i - 1] + store[i - 2];
    }
    return store[n];
};
