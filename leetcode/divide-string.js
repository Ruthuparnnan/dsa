function divideString(s, k, fill) {
  const result = [];

  for (let i = 0; i < s.length; i += k) {
    let slice = s.slice(i, i + k);
    if (slice.length !== k) {
      slice += fill.repeat(k - slice.length);
    }
    result.push(slice);
  }

  return result;
}

// Example usage:
console.log(divideString("abcdefghi", 3, "x")); // Output: ["abc", "def", "ghi"]
