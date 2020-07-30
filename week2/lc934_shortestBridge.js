/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
    let queue = [];
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let mark = false;
    for(let i = 0; i < A.length; i++) {
        if(mark) break;
        for(let j = 0; j < A[0].length; j++) {
            if(A[i][j] === 1) {
                dfs(A, i, j, queue);
                mark = true;
                break;
            }
        }
    }    
    
    let ret = 0;
    
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
    
            let x = curr[0];
            let y = curr[1];
            
            for (let j = 0; j < 4; j++) {
                let nextX = x + dx[j];
                let nextY = y + dy[j];
                
                
                if (isValidPoint(A, nextX, nextY) && A[nextX][nextY] === 0) {
                    queue.push([nextX, nextY]);
                    A[nextX][nextY] = 2;
                }
                if (isValidPoint(A, nextX, nextY) && A[nextX][nextY] === 1) {
                    return ret;
                }
            }  
        }
        ret++;
    }
    
    return ret;
};
const dfs = (A, i, j, queue) => {
    if(i < 0 || i >= A.length || j < 0 || j >= A[0].length || A[i][j] !== 1)  return;
    A[i][j] = 2;
    
    queue.push([i,j]);
    dfs(A, i - 1, j , queue);
    dfs(A, i + 1, j, queue);
    dfs(A, i, j + 1, queue);
    dfs(A, i, j - 1, queue);
}

const isValidPoint = (A, nextX, nextY) => {
    return nextX >= 0 && nextX < A.length && nextY >= 0 && nextY < A[0].length;
}

