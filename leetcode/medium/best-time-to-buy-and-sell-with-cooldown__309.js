/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = -prices[0];
    let sold = Number.NEGATIVE_INFINITY;
    let rest = 0;

    for(let i=1;i<prices.length;i++){
        let prevHold = hold;
        let prevSold = sold;
        let prevRest = rest;

        hold = Math.max(prevHold,prevRest - prices[i]);
        sold = prevHold + prices[i];
        rest = Math.max(prevRest,prevSold)
    }

    return Math.max(sold,rest);
};