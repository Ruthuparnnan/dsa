function identicalPairs() {
  let totalPairs = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j]) totalPairs++;
      j++;
    }
  }

  return totalPairs;
}
