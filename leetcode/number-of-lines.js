function numberOfLines(widths, s) {
  let totalLines = 1; // start with 1 because even 1 line needs to be counted
  let currentWidth = 0;

  for (let char of s) {
    const charWidth = widths[char.charCodeAt(0) - 97];

    if (currentWidth + charWidth <= 100) {
      currentWidth += charWidth;
    } else {
      totalLines++;
      currentWidth = charWidth;
    }
  }

  return [totalLines, currentWidth];
}

// Ṭest cases
console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
); // Output: [3, 60]
