function reverseStringOptimized(s, k) {
  let array = s.split("");

  for (let i = 0; i < array.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, array.length - 1);

    while (left < right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }

  return array.join("");
}

function reverseString(s, k) {
  let string = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    const slicedArray = [...s.slice(i, i + 2 * k)];
    const reversed = [...slicedArray.slice(0, k)].reverse();
    string += [...reversed, ...slicedArray.slice(k)].join("");
  }

  return string;
}

// Test cases
console.log(reverseStringOptimized("abcdefg", 2));
