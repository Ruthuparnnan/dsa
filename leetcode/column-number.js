function convertToNumber(columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - 64; // 'A' is 65 in ASCII
    result = result * 26 + charCode;
  }
  return result;
}

console.log(convertToNumber('A'))
console.log(convertToNumber('AA'))
console.log(convertToNumber('AAA'))