function arrayRankTransformationOP(arr) {
  const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  const rankMap = new Map();

  for (let i = 0; i < sorted.length; i++) {
    rankMap.set(sorted[i], i + 1);
  }

  return arr.map((num) => rankMap.get(num));
}

function arrayRankTransformation(arr) {
  const rankMap = new Map();
  const array = Array.from(new Set(arr)).sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    rankMap.set(array[i], i + 1);
  }
  const result = new Array();

  for (let i = 0; i < arr.length; i++) {
    result[i] = rankMap.get(arr[i]);
  }

  return result;
}

// Test cases
console.log(arrayRankTransformation([40, 10, 20, 30])); //
// Output: [4, 1, 2, 3]
