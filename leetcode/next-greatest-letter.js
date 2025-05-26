function nextGreatestLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[left % letters.length];
}
// Example usage:
// const letters = ["c", "f", "j"];
// const target = "a";
// console.log(nextGreatestLetter(letters, target)); // Output: "c"
