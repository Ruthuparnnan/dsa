function constructRectangle(area) {
  let width = Math.floor(Math.sqrt(area));
  while (area % width !== 0) {
    width--;
  }
  return [area / width, width];
}
// Test cases
console.log(constructRectangle(4)); // Output: [2, 2]
console.log(constructRectangle(37)); // Output: [37, 1]
console.log(constructRectangle(122122)); // Output: [427, 286]