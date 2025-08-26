/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const sum = nums.reduce((curr,acc)=>curr+acc,0);
    let leftSum = 0;
    let rightSum = sum;

    // if(leftSum === rightSum)return 0

    for(let i=0;i<nums.length;i++){
         rightSum = rightSum - nums[i];
        if(i !== 0){
         leftSum = leftSum + nums[i-1]
        }

        if(leftSum === rightSum)return i;
    }
return -1;
};