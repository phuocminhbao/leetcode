/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    const buyDp = [-prices[0]];
    const sellDp = [0];
    for (let day = 1; day < prices.length; day++) {
        // Fill buy dp
        const holdBuying = buyDp[day - 1];
        const buy = sellDp[day - 1] - prices[day];
        buyDp[day] = Math.max(holdBuying, buy);

        // Fill sell dp
        const holdSelling = sellDp[day - 1];
        const sell = buyDp[day - 1] + prices[day];
        sellDp[day] = Math.max(holdSelling, sell);
    }
    return sellDp[prices.length - 1];
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
