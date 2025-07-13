function findKthPositiveOptimizedByGpt(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    const missingBefore = arr[i] - (i + 1);

    if (missingBefore >= k) {
      // The k-th missing number is before arr[i]
      return k + i;
    }
  }

  // If not found in the loop, it's beyond the last element
  return k + arr.length;
}

function findKthPositiveOptimizedByMe(arr, k) {
  const set = new Set(arr);
  const missed = [];

  for (let i = 1; i < arr[arr.length - 1]; i++) {
    if (!set.has(i)) missed.push(i);
  }

  return missed[k - 1]
    ? missed[k - 1]
    : arr[arr.length - 1] + (k - missed.length);
}

function findKthPositive(arr, k) {
  const missed = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] !== 1) {
      let j = 1;
      while (j < arr[i]) {
        missed.push(j);
        j++;
      }
    }
    if (arr[i + 1] - arr[i] > 1) {
      let j = arr[i] + 1;
      while (j < arr[i + 1]) {
        missed.push(j);
        j++;
      }
    }
  }

  return missed[k - 1]
    ? missed[k - 1]
    : arr[arr.length - 1] + (k - missed.length);
}

console.log(findKthPositiveOptimizedByMe([2, 3, 4, 7, 11], 5));
