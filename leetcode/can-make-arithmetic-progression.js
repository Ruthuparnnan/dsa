function arithmeticProgression(arr) {
  if (arr.length < 2) return true; // A single element or empty array is trivially an arithmetic progression

  arr.sort((a, b) => a - b); // Sort the array in ascending order
  const diff = arr[1] - arr[0]; // Calculate the common difference

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false; // If the difference is not consistent, return false
    }
  }
  return true; // All differences are consistent, return true
}
