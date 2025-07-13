function thousandSeparator(){
n = n + '';
let result = [];
let count = 0;

for (let i = n.length - 1; i >= 0; i--) {
    if (count === 3) {
        result.push('.');
        count = 0;
    }
    result.push(n[i]);
    count++;
}

return result.reverse().join('');

}

console.log(thousandSeparator())