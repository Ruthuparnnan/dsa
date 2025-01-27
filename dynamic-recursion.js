// sunny(2)(3)(4)()

function dynamicRecursion(num1) {
  return function (num2) {
    if (num2) {
      return dynamicRecursion(num1 * num2);
    } else {
      return num1;
    }
  };
}

console.log(dynamicRecursion(2)(3)(6)());
