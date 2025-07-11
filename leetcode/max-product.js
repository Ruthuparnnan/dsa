function maxProduct() {
  let largest = -1;
  let secondLargest = -1;

  for (let num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }

  return (largest - 1) * (secondLargest - 1);
}
