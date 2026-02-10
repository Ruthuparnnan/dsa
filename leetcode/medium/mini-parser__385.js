/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] !== "[") {
    return new NestedInteger(parseInt(s));
  }

  const stack = [];
  let num = 0;
  let negative = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "[") {
      stack.push(new NestedInteger());
    } else if (char === "-") {
      negative = true;
    } else if (char >= "0" && char <= "9") {
      num = num * 10 + (char - "0");
    } else if (char === "," || char === "]") {
      if (i > 0 && s[i - 1] >= "0" && s[i - 1] <= "9") {
        stack[stack.length - 1].add(new NestedInteger(negative ? -num : num));
      }

      negative = false;
      num = 0;

      if (char === "]" && stack.length > 1) {
        const last = stack.pop();
        stack[stack.length - 1].add(last);
      }
    }
  }

  return stack[0];
};
