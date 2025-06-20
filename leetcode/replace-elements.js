function replaceElements(arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = max;
    if (current > max) {
      max = current;
    }
  }
  return arr;
}
