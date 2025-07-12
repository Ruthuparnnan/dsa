function goodTriplets(arr, a, b, c) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;

      for (let k = j + 1; k < arr.length; k++) {
        const cond2 = Math.abs(arr[j] - arr[k]) <= b;
        const cond3 = Math.abs(arr[i] - arr[k]) <= c;
        if (cond2 && cond3) count++;
      }
    }
  }

  return count;
}
