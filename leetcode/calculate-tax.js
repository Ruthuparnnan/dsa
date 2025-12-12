var calculateTax = function (brackets, income) {
  if (income === 0) return 0;

  let result = 0;
  let tax = 0;

  for (let [a, b] of brackets) {
    const rate = Math.max(0, Math.min(a, income) - tax);
    result += (b / 100) * rate;
    tax += rate;

    if (tax >= income) break; // small micro-optimization
  }

  return result;
};
