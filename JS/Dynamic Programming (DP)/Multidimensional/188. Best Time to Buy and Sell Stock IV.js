/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (k, prices) => {
  if (prices.length === 0) return 0;
  const maxTransaction = k;

  // base cases
  const dpBuy = [];
  const dpSell = [];
  for (let day = 0; day <= prices.length; day++) {
    dpBuy[day] = [];
    dpBuy[day].length = maxTransaction + 1;
    dpBuy[day].fill(0);

    dpSell[day] = [];
    dpSell[day].length = maxTransaction + 1;
    dpSell[day].fill(0);
  }

  for (let day = prices.length - 1; day >= 0; day--) {
    for (let transaction = 1; transaction <= maxTransaction; transaction++) {
      // Buy
      const buyProfit = dpSell[day + 1][transaction] - prices[day];
      const waitToBuyProfit = dpBuy[day + 1][transaction];
      dpBuy[day][transaction] = Math.max(buyProfit, waitToBuyProfit);

      // Sell
      const sellProfit = dpBuy[day + 1][transaction - 1] + prices[day];
      const waitToSellProfit = dpSell[day + 1][transaction];
      dpSell[day][transaction] = Math.max(sellProfit, waitToSellProfit);
    }
  }
  return dpBuy[0][maxTransaction];
};
