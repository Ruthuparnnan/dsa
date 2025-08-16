/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let firstSum = "";
  let secondSum = "";
  let targetSum = "";

  for (let char of firstWord) {
    firstSum += char.charCodeAt(0) - 97;
  }

  for (let char of secondWord) {
    secondSum += char.charCodeAt(0) - 97;
  }

  for (let char of targetWord) {
    targetSum += char.charCodeAt(0) - 97;
  }

  return (
    parseInt(firstSum, 10) + parseInt(secondSum, 10) === parseInt(targetSum, 10)
  );
};

console.log(isSumEqual("acb", "cba", "cdb")); // true
