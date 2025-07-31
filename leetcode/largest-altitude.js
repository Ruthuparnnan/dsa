var largestAltitude = function(gain) {
    let highest = Math.max(0,gain[0]);
    const arr = [highest,gain[0]];

    for(let i=1;i<gain.length;i++){
        arr.push(gain[i] + arr [i]);
        highest = Math.max(highest,gain[i]+arr[i])
    }

    return highest;
};