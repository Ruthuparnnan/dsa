const curry = (a) => (b) => (c) => a * b * c;
console.log(curry(1)(2)(3));
