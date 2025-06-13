function addBinary(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";
  
    while (i >= 0 || j >= 0 || carry) {
      const digitA = i >= 0 ? Number(a[i]) : 0;
      const digitB = j >= 0 ? Number(b[j]) : 0;
      const sum = digitA + digitB + carry;
  
      result = (sum % 2) + result; // Prepend to result
      carry = Math.floor(sum / 2);
  
      i--;
      j--;
    }
  
    return result;
  }

  console.log(addBinary("11", "1")); // "100"
  console.log(addBinary("1010", "1011")); // "10101"