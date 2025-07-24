var canFormArray = function (arr, pieces) {
  const map = new Map();

  // Build a map where key is the first element of each piece
  for (let piece of pieces) {
    map.set(piece[0], piece);
  }

  let i = 0;

  while (i < arr.length) {
    const subArr = map.get(arr[i]);
    if (!subArr) return false; // If no matching piece starts with arr[i]

    // Check if the rest of the subarray matches
    for (let j = 0; j < subArr.length; j++) {
      if (arr[i + j] !== subArr[j]) return false;
    }

    i += subArr.length; // Move to the next segment
  }

  return true;
};
