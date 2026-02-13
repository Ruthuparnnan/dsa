/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const stack =[];
    let maxLen=0;

    for(let part of input.split('\n')){
        const depth = part.lastIndexOf('\t')+1;
        const name = part.slice(depth);

        if(depth>0){
            stack[depth] = stack[depth-1] + name.length + 1;
        }else{
            stack[depth] = name.length+1;
        }

        if(name.includes('.')){
            maxLen = Math.max(maxLen,stack[depth]-1);
        }
    }

    return maxLen;
};