#Suppose we could access yesterday's stock prices as an array, where:

* The indices are the time in minutes past trade opening time, which was 9:30am local time.

* The values are the price in dollars of Apple stock at that time.

So if the stock cost $500 at 10:30am, prices[60] = 500.

### Objective
* Write an efficient function that takes prices and returns the best
* profit I could have made from 1 purchase and 1 sale of 1 stock yesterday.

### Rules
* We can't sell the first time. So we need to start at the 2nd item.
* We can't buy and sell at the same time.
* maxProfit can either be a negative or positive value.

###Answer

```
exports.getMaxProfit = (prices) => {
  // make sure we have at least 2 prices
  if (prices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // Initialize 1st price: 1st item in collection.
  let minPrice = prices[0];

  // Initialize 1st possible profit: 1st item subtracted from the 2nd
  let maxProfit = prices[1] - prices[0];

  prices.forEach(price => {
    if (price.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
    }

    const currentPrice = price;

    // Potential Profit value if we:
    // bought stock at the minPrice,
    // and sold the stock at the currentPrice
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit with the largest of 2 values
    maxProfit = Math.max(maxProfit, potentialProfit);

    // Update minPrice with the smallest of 2 values
    minPrice = Math.min(minPrice, currentPrice);
  });

  return maxProfit;
};
```