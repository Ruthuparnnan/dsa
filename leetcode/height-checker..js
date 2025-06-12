function heightChecker(heights) {
  // Create a sorted copy of the heights array
  const sortedHeights = [...heights].sort((a, b) => a - b);

  // Count the number of positions where the heights differ
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      count++;
    }
  }

  return count;
}
