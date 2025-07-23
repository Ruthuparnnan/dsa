function sumOddLengthSubArraysHeavilyOptimized(arr) {
  let total = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const totalSubarrays = (i + 1) * (n - i);
    const oddCount = Math.floor((totalSubarrays + 1) / 2);
    total += arr[i] * oddCount;
  }

  return total;
}

function sumOddLengthSubArrays(arr) {
  const array = [];

  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      array.push(...arr.slice(j, j + i));
    }
  }

  return array.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOddLengthSubArrays([1, 2, 3, 4, 5]));
