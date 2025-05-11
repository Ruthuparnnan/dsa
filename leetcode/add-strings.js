function addStrings(s1, s2) {
  let i = s1.length - 1;
  let j = s2.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(s1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(s2[j]) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
    i--;
    j--;
  }
  return result.reverse().join("");
}
// Test cases
console.log(addStrings("11", "123")); // Output: "134"
console.log(addStrings("456", "77")); // Output: "533"
