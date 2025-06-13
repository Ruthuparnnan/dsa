function gcdOfStrings(str1, str2) {
  // Helper function to compute the GCD of two numbers
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  // Check if str1 + str2 equals str2 + str1
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Compute the GCD of the lengths of the two strings
  const lengthGCD = gcd(str1.length, str2.length);

  // Return the substring of length GCD from either string
  return str1.substring(0, lengthGCD);
}
