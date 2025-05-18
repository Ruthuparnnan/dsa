function checkRecord(s) {
  let aCount = 0;
  let lCount = 0;

  for (let char of s) {
    if (char === "A") {
      aCount++;
      if (aCount > 1) return false;
    }
    if (char === "L") {
      lCount++;
      if (lCount === 3) return false;
    } else if (char !== "L") {
      lCount = 0;
    }
  }

  return true;
}

// Test cases
console.log(checkRecord("PPALLP")); // Output: true
console.log(checkRecord("PPALLL")); // Output: false
