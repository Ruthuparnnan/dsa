function decompressRLElistOptimized(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    result.push(...Array(nums[i]).fill(nums[i + 1]));
  }
  return result;
}

function decompressRLEList(nums) {
  const result = [];

  for (let i = 0; i <= nums.length - 2; i += 2) {
    let [freq, val] = [nums[i], nums[i + 1]];
    while (freq > 0) {
      result.push(val);
      freq--;
    }
  }

  return result;
}
