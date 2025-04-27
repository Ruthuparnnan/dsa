function firstOccurance(haystack, needle) {
  if (needle.length === 0) return 0;
  let k = 0;
  let maxK = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[k]) {
      if (k === maxK - 1) {
        return i - maxK + 1;
      } else {
        k++;
      }
    } else {
      i = i - k;
      k = 0;
    }
  }

  return -1;
}

console.log(firstOccurance("leetcode", "leeto"));
