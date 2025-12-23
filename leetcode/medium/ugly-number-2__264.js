/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const ugly =new Array(n);
    ugly[0]=1;

    let p2=0,p3=0,p5=0;

    for(let i=1;i<n;i++){
        const next2=ugly[p2]*2
        const next3=ugly[p3]*3
        const next5=ugly[p5]*5

        const nextUgly = Math.min(next2,next3,next5);

        ugly[i]=nextUgly;

        if(nextUgly === next2)p2++
        if(nextUgly === next3)p3++
        if(nextUgly === next5)p5++
    }

    return ugly[n-1];
};