function fairCandySwap(aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((acc, elem) => acc + elem, 0);
  const sumB = bobSizes.reduce((acc, elem) => acc + elem, 0);
  const delta = (sumA - sumB) / 2;
  const bobSet = new Set(bobSizes);

  for (let char of aliceSizes) {
    if (bobSet.has(char - delta)) {
      return [char, char - delta];
    }
  }
}
