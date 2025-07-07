var finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    let found = false;

    while (!found && j < prices.length) {
      if (prices[j] <= prices[i]) {
        prices[i] = prices[i] - prices[j];
        found = true;
      }
      j++;
    }
  }

  return prices;
};
