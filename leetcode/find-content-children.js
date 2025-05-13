function findContentChildrenOptimized(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;
  let cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      child++;
    }
    cookie++;
  }

  return child;
}

function findContentChildren(g, s) {
  let i = 0;
  let j = 0;
  let count = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      count++;
      i++;
    }
    j++;
  }

  return count;
}

// Test cases
console.log(findContentChildren([1, 2, 3], [1, 1])); // Output: 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // Output: 2
console.log(findContentChildren([1, 2, 3], [3])); // Output: 1
