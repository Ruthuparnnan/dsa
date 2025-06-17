function minimumAbsoluteDifference(arr) {
arr.sort((a,b)=>a-b);

    let minDiff = Infinity;
    const result =[];

    for(let i=0;i<arr.length;i++){
        const diff = arr[i+1] - arr[i];
        if(diff<minDiff){
            minDiff = diff;
            result.length=0;
            result.push([arr[i],arr[i+1]])
        }else if(diff === minDiff){
            result.push([arr[i],arr[i+1]])
        }
    }

    return result
}
