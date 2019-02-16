const maxProfit = (prices) => {
  let profit = 0;
  let min = Number.MAX_SAFE_INTEGER;
  prices.forEach((price) => {
    if (price < min) {
      min = price;
    } else if (price - min > profit) {
      profit = price - min;
    }
  });
  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
