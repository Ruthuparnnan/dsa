/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node)return null

    const visited = new Map();

    function dfs(curr){
       if(visited.has(curr)) return visited.get(curr);

       const clonedNode = new Node(curr.val);

       visited.set(curr,clonedNode);

       for(let neighbor of curr.neighbors){
         clonedNode.neighbors.push(dfs(neighbor))
       }

       return clonedNode;
    }

    return dfs(node)
};