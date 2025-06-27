function generateTheString(n) {
  if (n % 2 !== 0) return "a".repeat(n);
  let result = "";
  result += "a".repeat(n - 1);
  result += "b";
  return result;
}
