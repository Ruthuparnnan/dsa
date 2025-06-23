function maximum69NumberOP(num) {
  const numStr = String(num);
  const index = numStr.indexOf("6");
  if (index !== -1) {
    return Number(numStr.slice(0, index) + "9" + numStr.slice(index + 1));
  }
  return num;
}

function maximum69Number(num) {
  num = num.toString().split('');

    for(let i=0;i<num.length;i++){
        if(num[i] === '6'){
            num[i] = '9';
            break;
        }
    }

    return Number(num.join(''))
}

// Test cases
console.log(maximum69Number(9669)); // Output: 9969
