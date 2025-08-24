/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const arr = Array.from({length:n},()=>[]);

    for(let [u,v] of edges){
        arr[u].push(v)
        arr[v].push(u)
    }

    const visited = new Set();
    const queue = [source];
    visited.add(source);

    while(queue.length){
        const node = queue.shift();
        if(node === destination)return true;

        for(let neighbour of arr[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }

    return false;
};