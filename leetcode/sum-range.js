// using constructor function

var NumArray = function (nums) {
  // Build prefix sum array
  this.prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};

// -----------------------------------------------------------

class NumArray {
  constructor(nums) {
    this.prefixArray = [0];

    for (let i = 0; i < nums.length; i++) {
      this.prefixArray[i + 1] = this.prefixArray[i] + nums[i];
    }
  }

  sumRange(left, right) {
    return this.prefixArray[right + 1] - this.prefixArray[left];
  }
}

const array = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(array.sumRange(2, 5));
