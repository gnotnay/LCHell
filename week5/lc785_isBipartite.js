/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let color = {} 
    for (let i = 0; i < graph.length; i++) {
        if (color[i] === undefined) {
            if (!bfs(i, graph, color)) {
                return false 
            }
        }
    }
    return true 
};

const bfs = (start, graph, color) => {
    let queue = [] 
    queue.push([start, 1])
    while (queue.length !== 0) {
        let temp = queue.shift()
        let node = temp[0]
        let c = temp[1]
        if (color[node] !==undefined) {
            if (color[node] !== c) {
                return false 
            }
            continue 
        }
        color[node] = c
        for (let neighbor of graph[node]) {
            queue.push([neighbor, -c])
        }
    }
    return true 
}

// var isBipartite = function(graph) {
//     let v = new Array(graph.length).fill(0);
    
//     let queue = [];
//     let isVisited = new Array(graph.length).fill(false);
//     let isA = true;
//     for (let k = 0; k < graph.length; k++) {
//         if (!isVisited[k]) {
//             queue.push(k);
//         }
//         while (queue.length !== 0) {
//             let temp = [...queue];
//             queue = [];

//             for (let i = 0; i < temp.length; i++) {
//                 let curr = temp[i];
//                 isVisited[curr] = true;
//                 if (isA) {
//                     v[curr] = 2;
//                     for (let n of graph[curr]) {
//                         if (v[n] === 2) {
//                             return false;
//                         } else if (v[n] === 0) {
//                             v[n] = 1;
//                             queue.push(n);
//                         }
//                     }
//                 } else {
//                     v[curr] = 1;
//                     for (let n of graph[curr]) {
//                         if (v[n] === 1) {
//                             return false;
//                         } else if (v[n] === 0) {
//                             v[n] = 2;
//                             queue.push(n);
//                         }
//                     }
//                 }

//             }
//             isA = !isA;
//         }
//     }
    
//     return true;
// };


