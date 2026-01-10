/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = [];
  const inStack = new Set();

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of s) {
    map.set(char, (map.get(char) || 0) - 1);

    if (inStack.has(char)) continue;

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      map.get(stack[stack.length - 1]) > 0
    ) {
      inStack.delete(stack.pop());
    }

    stack.push(char);
    inStack.add(char);
  }

  return stack.join("");
};
