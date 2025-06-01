function backspaceCompare(s, t) {
  const sStack = [];
  const tStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      sStack.push(s[i]);
    } else {
      sStack.pop();
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") {
      tStack.push(t[i]);
    } else {
      tStack.pop();
    }
  }

  return sStack.join("") === tStack.join("");
}

// Test cases
const s1 = "ab#c";
const t1 = "ad#c";
console.log(backspaceCompare(s1, t1)); // Output: true
