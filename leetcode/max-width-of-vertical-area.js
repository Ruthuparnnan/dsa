function maxWidthOfVerticalArea() {
  const xValues = [];
  let maxWidth = 0;

  for (let point of points) {
    xValues.push(point[0]);
  }

  xValues.sort((a, b) => a - b);

  for (let i = 1; i < xValues.length; i++) {
    maxWidth = Math.max(maxWidth, xValues[i] - xValues[i - 1]);
  }

  return maxWidth;
}
