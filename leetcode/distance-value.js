var findTheDistanceValue = function(arr1, arr2, d) {

function isValid(num, arr2, d) {
    let left = 0;
    let right = arr2.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const diff = Math.abs(num - arr2[mid]);

        if (diff <= d) return false; // Found a value too close
        if (arr2[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return true; // No value within distance d found
}

    // Step 1: Sort arr2 for binary search
    arr2.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (isValid(arr1[i], arr2, d)) {
            count++;
        }
    }

    return count;
};

function distanceValue(arr1, arr2, d) {
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    let isValid = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }
    if (isValid) count++;
  }

  return count;
}
