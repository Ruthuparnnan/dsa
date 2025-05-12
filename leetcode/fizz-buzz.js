function fizzBuzz(n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (!(i % 3 === 0) && !(i % 5 === 0)) {
      array.push(i.toString());
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    }
  }

  return array;
}

console.log(fizzBuzz(15)); // ["Fizz", "Buzz", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
// console.log(fizzBuzz(3)); // ["Fizz", "Buzz", "Fizz"]
