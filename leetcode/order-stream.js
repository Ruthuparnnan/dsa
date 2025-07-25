OrderedStream.prototype.insert = function(idKey, value) {
    const key = idKey-1;
    this.arr[key]=value;
    let result=[]
    if(this.pointer === key){
        while(this.arr[this.pointer]){
            result.push(this.arr[this.pointer])
            this.pointer++
        }
    }
    return result
};