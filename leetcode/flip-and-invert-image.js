function flipAndInvertImageOptimized(image) {
  for (let row of image) {
    let left = 0,
      right = row.length - 1;

    while (left <= right) {
      // Swap and invert at the same time
      // XOR with 1 flips 0 to 1 and 1 to 0
      let temp = row[left] ^ 1;
      row[left] = row[right] ^ 1;
      row[right] = temp;

      left++;
      right--;
    }
  }

  return image;
}

function flipAndInvertImage(image) {
  const result = [];

  for (let row of image) {
    const reversedRow = row.reverse();
    const invertedRow = [];
    for (let element of reversedRow) {
      if (element === 0) {
        invertedRow.push(1);
      } else {
        invertedRow.push(0);
      }
    }
    result.push(invertedRow);
  }

  return result;
}

// Test cases
console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
