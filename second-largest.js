function secondLargestFinder(array) {
  let largest = array[0];
  let secondLargest = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestFinder([1,2,3,4,1,2,50,70]))