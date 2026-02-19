/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    if(nums.length < 2) return 0;

    let sum =0;
    let f=0;

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        f+=i*nums[i];
    }

    let max = f;

    for(let k=1;k<nums.length;k++){
        f = f + sum - nums.length * nums[nums.length-k];
        max=Math.max(f,max)
    }

    return max;
};