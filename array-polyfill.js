Array.prototype.customMap = function (cb) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }

  return output;
};

const dummy = [1, 2, 3, 4, 5];
const customMapData = dummy.customMap((element, index) => element + 2);

Array.prototype.customFilter = function (cb) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

const customFilterData = dummy.customFilter((element, index) => element > 2);

Array.prototype.customReduce = function (cb, initialValue) {
  let output = initialValue ?? this[0];
  for (let i = 0; i < this.length; i++) {
    output = Number(cb(output, this[i], i, this));
  }
  return output;
};

const customReduceData = dummy.customReduce((acc, element, index, array) => {
  return acc + element;
}, 0);

// console.log(customReduceData);

console.log(dummy.splice(1, 4, 8, 9, 0));
console.log(dummy);
