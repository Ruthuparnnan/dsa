function canThreePartsEqualSum(arr) {
  const sum = arr.reduce((acc, elem) => acc + elem, 0);
  if (sum % 3 !== 0) return false;

  let count = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum === sum / 3) {
      count++;
      currentSum = 0;
    }
    // Optimization: If we already found 2 parts,
    // the remaining part must be valid (because totalSum is divisible)
    if (count === 2 && i < arr.length - 1) return true;
  }

  return false;
}
