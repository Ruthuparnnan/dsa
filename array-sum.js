function findArraySum(array) {
  if (array.length < 1) {
    return 0;
  } else {
    return array[0] + findArraySum(array.slice(1));// Recursive call
  }
}

console.log(findArraySum([1,2,3,4,5]))