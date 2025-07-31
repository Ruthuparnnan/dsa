var decode = function(encoded, first) {
    const arr =[first];
 
    for(let i=0;i<encoded.length;i++){
        arr.push(arr[i]^encoded[i])
    }
 
    return arr
}