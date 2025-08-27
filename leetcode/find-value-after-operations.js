/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value =0;

    for(let opr of operations){
      if(opr[1] === '-'){
        value--;
      }else if (opr[1] === '+'){
        value++;
      }
    }

return value;

};