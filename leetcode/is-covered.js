/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    
    for(let i=left;i<=right;i++){
        let covered =false;
        for(let [start,end] of ranges){
            if(i>=start && i<= end){
                covered = true;
                break;
            }
        }
        if(!covered)return false;
    }

    return true;
};