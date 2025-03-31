/**
 * @param {number[]} prices
 * @return {number}
 */

/* 
Make 2 dp array for storing buy and sell max maxProfitGreedy
first day: buy[0] = -prices[0]
           sell[0] = 0 (if buy then sell then 0 profit) 
for each of next days:
buy profit = max of do nothing (sell[day - 1]) and sell stock (buyDp[day - 1] + prices[day])
sell profit = max of do notthing (buyDp[day - 1]) and buy new stock (sellDp[day - 1] - prices[day])
*/
const maxProfitTabulation = (prices) => {
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

// Only add the diff prices to max if next is higher than current
const maxProfitGreedy = (prices) => {
    let max = 0;
    for (let day = 0; day < prices.length - 1; day++) {
        const currentPrice = prices[day];
        const nextPrice = prices[day + 1];
        if (nextPrice > currentPrice) {
            max += nextPrice - currentPrice;
        }
    }
    return max;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfitGreedy(prices));
