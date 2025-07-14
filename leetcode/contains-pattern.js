function containsPatter() {
  function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }

  for (let i = 0; i < arr.length - m; i++) {
    const pattern = arr.slice(i, i + m);
    let count = 1;

    for (let j = i + m; j <= i + m * (k - 1); j += m) {
      const nextSlice = arr.slice(j, j + m);
      if (isEqual(pattern, nextSlice)) count++;
      if (count >= k) return true;
    }
  }

  return false;
}

console.log(containsPatter());
