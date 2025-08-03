function sumOfUniqueMyVersion(nums) {
  const set = new Set();
  const deleted = new Set();
  let sum = 0;

  for (let num of nums) {
    if (!set.has(num) && !deleted.has(num)) {
      set.add(num);
    } else {
      deleted.add(num);
      set.delete(num);
    }
  }

  for (const value of set) {
    sum += value;
  }

  return sum;
}

function sumOfUnique(nums) {
  const freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let sum = 0;
  for (let num in freq) {
    if (freq[num] === 1) {
      sum += +num; // convert key (string) to number
    }
  }

  return sum;
}
