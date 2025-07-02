function reformatStrig(s) {
  const letters = [];
  const digits = [];

  for (let char of s) {
    if (!isNaN(Number(char))) {
      digits.push(char);
    } else {
      letters.push(char);
    }
  }

  if (Math.abs(letters.length - digits.length) > 1) return "";

  let result = "";

  const largest =
    letters.length > digits.length ? letters.length : digits.length;

  for (let i = 0; i < largest; i++) {
    if (largest === letters.length) {
      result += letters[i];
      result += digits[i] || "";
    } else {
      result += digits[i];
      result += letters[i] || "";
    }
  }

  return result;
}

// Example usage
console.log(reformatStrig("a0b1c2"));
