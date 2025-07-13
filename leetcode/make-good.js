function makeGood(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (
      Math.abs(
        stack.length > 0 &&
          stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0)
      ) === 32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
