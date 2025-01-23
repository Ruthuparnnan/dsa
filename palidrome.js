const palindromeChecker = (integer) => {
  return integer === +integer.toString().split("").reverse().join("");
};
