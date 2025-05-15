function licenseKeyFormatting(s, k) {
  let cleanedString = s.replace(/-/g, "").toUpperCase();
  let result = "";
  const length = cleanedString.length - 1;

  for (let i = length; i >= 0; i--) {
    if ((length - i) % k === 0 && i !== length) {
      result += `-${cleanedString[i]}`;
    } else {
      result += cleanedString[i];
    }
  }

  return result.split("").reverse().join("");
}

// Test cases
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // Output: "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); // Output: "2-5G-3J"
