function targetArray(nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    // Insert nums[i] at index[i], shift everything else to the right
    target.splice(index[i], 0, nums[i]);
  }

  return target;
}

function targetArrayWithoutSplice(nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    const insertPos = index[i];
    const element = nums[i];

    for (let j = target.length; j > insertPos; j--) {
      target[j] = target[j - 1];
    }

    target[insertPos] = element;
  }

  return target;
}
