/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let count =0;

   let i=0;
   while(i<s.length){
    if(s[i] === 'O'){
        i++;
        continue;
    }
     let isXfound=false;
        for(let j=i;j<i+3;j++){
           if(s[j] === 'X'){
              isXfound = true;
              break;
           }
        }
        if(isXfound)count++;
        i+=3;
   }

    return count
};