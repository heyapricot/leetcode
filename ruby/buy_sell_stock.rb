# You are given an array prices where prices[i] is the price of a given stock on the ith day.
#
#   You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
#
#   Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

# Example 1:
#
#   Input: prices = [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
#   Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
#
#   Example 2:
#
#   Input: prices = [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transactions are done and the max profit = 0.

# Iterate through every value
# Check with the reminder of the array (You can only sell on future days)
# Store the profit and replace if found bigger profit

def buy_stock(prices)
  lowest = prices.first
  max_profit = 0

  prices.each do |price|
    next lowest = price if price < lowest

    profit = price - lowest
    max_profit = profit if profit > max_profit
  end

  max_profit
end

p buy_stock([7,1,5,3,6,4]) == 5
p buy_stock([7,6,4,3,1]) == 0
