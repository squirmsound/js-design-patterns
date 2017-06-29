#You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

* First we get the products of all the integers before each index
* Then we go backwards to get the products of all the integers after each index.
* For each integer, we find the product of all the integers, before it, storing the total product so far each time

### Objective
* Write a function getProductsOfOtherNums() that takes an array of integers and returns an array of the products.
* For each integer, we find the product of all the integers after it.
* since each index in products already has the product of all the integers before it, now we're storing
* the total product of all other integers

### Rules
* Do not use division in your solution.

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