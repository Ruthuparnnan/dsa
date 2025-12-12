/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSize =0;

    const dp = Array.from({length:rows+1},()=>Array(cols+1).fill(0));

    for(let i=1;i<=rows;i++){
      for(let j=1;j<=cols;j++){
        if(matrix[i-1][j-1] === '1'){
           dp[i][j]=1+Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]);
           maxSize = Math.max(maxSize,dp[i][j])
        }
      }
    }

    return maxSize * maxSize
};