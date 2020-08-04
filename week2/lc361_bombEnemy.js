/**
 * @param {number[][]} board
 * @return {number[][]}
 */
// time: O(mn(m+n)) m: length of grid, n: length of grid[0] 104ms in leetcode 

var maxKilledEnemies = function(grid) {
    let result = 0 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {  //traverse every cell in the grid 
            if (grid[i][j] !== "0") {               //bomb can be only put at position "0"
                continue 
            }
            let enemy = helper(grid, i, j)          //find how many enemies are killed for each "0"
            result = Math.max(enemy, result)        //update result 
        }
    }
    return result 
};

const helper = (grid, i, j) => {
    let result = 0 
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]  
    let x = i
    let y = j 
    for (let dir of directions) {                      //from the start point, search in four directions
        while (isValid(x, y, grid)) { 
            if (grid[x][y] === "E") {                  //if "E" is at this direction, kill it. result ++ 
                result ++
            }
            x += dir[0]
            y += dir[1]
        }
        x = i       
        y = j                                         // when meet "W", set x y to start point and search in another direction
    }
    return result 
}

const isValid = (x, y, grid) => {
    let m = grid.length
    let n = grid[0].length
    if (x < 0 || x >= m) return false                  
    if (y < 0 || y >= n) return false 
    if (grid[x][y] === "W") {                           //if meet "W", the search is not valid at this direction 
        return false 
    }
    return true 
}
