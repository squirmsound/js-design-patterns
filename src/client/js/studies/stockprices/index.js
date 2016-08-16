exports.getMaxProfit = (prices) => {
  // make sure we have at least 2 prices
  if (prices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // Initialize 1st price: 1st item in collection.
  let minPrice = prices[0];

  // Initialize 1st possible profit: 1st item subtracted from the 2nd
  let maxProfit = prices[1] - prices[0];

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

  // ------------ WITH .FOREACH -----------------------------------
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
