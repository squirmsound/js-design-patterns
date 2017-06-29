
export default function getMaxProfit(prices) {

  if (prices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  prices.forEach(price => {

    const currentPrice = price;

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

  });

  // WITH A FOR LOOP
  //-----------------------------
  // for (let i = 1; i < prices.length; i++) {
  //   const currentPrice = prices[i];
  //
  //   // Potential Profit value if we:
  //   // bought stock at the minPrice,
  //   // and sold the stock at the currentPrice
  //   const potentialProfit = currentPrice - minPrice;
  //
  //   // Update maxProfit with the largest of 2 values
  //   maxProfit = Math.max(maxProfit, potentialProfit);
  //
  //   // Update minPrice with the smallest of 2 values
  //   minPrice = Math.min(minPrice, currentPrice);
  // }

  return maxProfit;
};


// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time
// which was 9:30am local time.

// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes array of prices
// Returns the best profit that could have made from 1 purchase
// and 1 sale of 1 stock yesterday.

// 1. make sure we have at least 2 prices
// 2. Initialize 1st price: 1st item in collection.
// 3. Initialize 1st possible profit: 1st item subtracted from the 2nd
// 4. potentialProfit = minPrice - currentPrice
// - - - bought stock at the minPrice, and sold the stock at the currentPrice
// 5. Update maxProfit with the largest of 2 values
// 6. Update minPrice with the smallest of 2 values