/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    // let m = board.length;
    // let n = board[0].length;
    let found = false;
    let newBoard = null;
    let arr = null;
    while(!found) {
        arr = mark(board, found);
        [newBoard, found] = arr;
        if(found) {
            board = crush(newBoard);    
        }
        found = !found;
    }
    return board;    
};

const crush = (board) => {
    for(let i = 0; i < board[0].length; i++) {
        let cnt = 0;
        let temp = []
        for(let j = 0; j < board.length; j++) {
            if(board[j][i] <= 0) {
                cnt++;  
            } else {
                temp.push(board[j][i]);
            }    
        }
        temp.reverse();
        for(let k = 0; k < board.length; k++) {
            if(k < cnt) {
                board[k][i] = 0;
            } else {
                board[k][i] = temp.pop();
            }    
        }
    }    
    return board;
}

const mark = (board, found) => {
    for(let i = 0; i< board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            let value = Math.abs(board[i][j]);
            if(board[i][j] === 0) continue;
            if(j < board[0].length - 2 && Math.abs(board[i][j+1]) === value && Math.abs(board[i][j+2]) === value) {
                found = true;
                let N = j;
                while(N < board[0].length && Math.abs(board[i][N]) === value) {
                    board[i][N] = -value;
                    N++;
                }
            }
            if(i < board.length - 2 && Math.abs(board[i+1][j]) === value && Math.abs(board[i+2][j]) === value) {
                found = true;
                let M = i;
                while(M < board.length && Math.abs(board[M][j]) === value) {
                    board[M][j] = -value;
                    M++;
                }     
            }
        }
    }
    return [board,found];
}