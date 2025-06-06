/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    if (amount === 0) return 0;
    const memo = {};
    const getFewest = (remaining) => {
        if (memo[remaining]) {
            return memo[remaining];
        }
        if (remaining === 0) {
            return 0;
        }
        if (remaining < 0) {
            return Infinity;
        }
        let min = Infinity;
        for (let i = 0; i < coins.length; i++) {
            min = Math.min(min, 1 + getFewest(remaining - coins[i]));
        }
        memo[remaining] = min;
        return min;
    };
    const min = getFewest(amount);
    return min === Infinity ? -1 : min;
};

const coin = [2];
const amount = 3;

const res = coinChange(coin, amount);
console.log(res);
