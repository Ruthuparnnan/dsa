/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length > 1) {
    const newN = Math.floor(nums.length / 2);
    const newNums = new Array(newN).fill(0);
    for (let i = 0; i < newN; i++) {
      if(i%2===0){
        newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      }else{
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    nums = [...newNums];
  }

  return nums[0];
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // 1