/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitBruteForce = (prices) => {
    let max = 0;
    prices.forEach((price, day) => {
        const future = prices.slice(day + 1);
        future.forEach((futurePrice, futureDay) => {
            if (futurePrice < price) {
                return;
            }
            const profit = futurePrice - price;
            max = max > profit ? max : profit;
        });
    });
    return max;
};

const maxProfitTabulation = (prices) => {
    let max = 0;
    let cheapest = prices[0];
    prices.forEach((price) => {
        if (price === cheapest) {
            return;
        }
        if (price < cheapest) {
            cheapest = price;
            return;
        }
        const profit = price - cheapest;
        max = max > profit ? max : profit;
    });
    return max;
};

const res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(res);
