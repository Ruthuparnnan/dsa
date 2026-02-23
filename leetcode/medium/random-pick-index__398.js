/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let count = 0;
  let chosenIndex = -1;

  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      count++;

      if (Math.random() < 1 / count) {
        chosenIndex = i;
      }
    }
  }

  return chosenIndex;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
