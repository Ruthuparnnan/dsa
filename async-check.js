function random() {
  let count = 10;
  return function () {
    count--;
    return count;
  };
}

const sunnyKuttan = random();
console.log(random()());
console.log(random()());
console.log(random()());
