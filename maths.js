const obj = {
  total: 0,
  add: function (value) {
    this.total += value;
    return this;
  },
  multiply: function (value) {
    this.total *= value;
    return this;
  },
  substract: function (value) {
    this.total -= value;
    return this;
  },
  divide: function (value) {
    this.total /= value;
    return this;
  },
};

// obj.add(8).substract(2).multiply(4).add(6).divide(3);
// console.log(obj.total);

const obj2 = { total: 120 };
obj.add.apply(obj2, [10]);
console.log(obj2.total);
