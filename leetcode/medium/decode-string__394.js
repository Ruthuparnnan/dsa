/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (let char of s) {
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      stack.push(currentStr);
      stack.push(currentNum);
      currentStr = "";
      currentNum = 0;
    } else if (char === "]") {
      let previousNum = stack.pop();
      let previousStr = stack.pop();
      currentStr = previousStr + currentStr.repeat(previousNum);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
};
