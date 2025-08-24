/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums = nums.sort((a,b)=>a-b);
    let minDifference =Infinity;

    for(let i=0;i + k - 1<nums.length;i++){
        let difference =nums[i + k-1] -nums[i];
         minDifference = Math.min(minDifference,difference);
    }

    return minDifference;
};