function twoSum(array, target) {
  let hasSum = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        hasSum = true;
      }
    }
  }

  return hasSum;
}
console.log(twoSum([4, 2, 2, 1, 5], 6));
