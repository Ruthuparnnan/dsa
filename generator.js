function* generator() {
  let num = 0;

  while (true) {
    yield num++;
  }
}

const myGenerator = generator();

console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
