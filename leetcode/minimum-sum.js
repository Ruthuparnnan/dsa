/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  num = String(num)
    .split("")
    .sort((a, b) => a - b);

  // Form two numbers by distributing digits
  let num1 = num[0] + num[2];
  let num2 = num[1] + num[3];

  return Number(num1) + Number(num2);
};
