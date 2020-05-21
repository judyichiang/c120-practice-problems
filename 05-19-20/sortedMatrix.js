// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

function kanGuo(grid){
  var counter = 0;
  for(let i= 0; i < grid.length; i++){
    for (let j = 0; grid[i][j]; j++){
      if (grid[i][j] < 0){
        counter += 1;
      }
    }
  }
  return counter
}


kanGuo([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])