function countSegmentsOptimized(s) {
  // Split the string by spaces and filter out empty strings
  const segments = s.split(" ").filter((segment) => segment.length > 0);
  // Return the length of the segments array
  return segments.length;
}

function countSegments(s) {
  let i = 0;
  let k = 0;
  const result = [];

  while (i <= s.length) {
    //Only push a segment if it's non-empty:
    if ((s[i] === " " || i === s.length) && i > k) {
      result.push(s.slice(k, i));
      k = i + 1;
    }
    i++;
  }

  return result.length;
}

// Test cases
console.log(countSegments("Hello,  my name is John")); // Output: 5
