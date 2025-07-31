var totalMoney = function(n) {
    let start =1;
    let i=start;
    let total=0;
 
    while(n>0){
        total+=i;
        i++
        if (i===start+7){
          i=start+1
            start++
          
        }
        n--;
    }
 
    return total
};