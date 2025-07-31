/**
* @param {string} number
* @return {string}
*/
var reformatNumber = function(number) {
    number = number.replace(/[\s-]/g, '');
    let len = number.length;
    let result=[];
    let i=0;
    
 
    while(len-i > 4){
        result.push(number.slice(i,i+3));
        i+=3;
    }
    let remaining = len-i;
    if(remaining === 4){
        result.push(number.slice(i,i+2))
        result.push(number.slice(i+2))
    }else{
        result.push(number.slice(i))
    }
 
    return result.join('-')
    
};