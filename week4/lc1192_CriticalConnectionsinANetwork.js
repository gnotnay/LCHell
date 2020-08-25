/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let rank = new Array(connections.length).fill(-1)
    let graph = {} 
    let res = [] 
    
    for (let i = 0; i < connections.length; i++) {
        graph[i] = []
    }
    
    for (let i = 0; i < connections.length; i++) {
        graph[connections[i][0]].push(connections[i][1])
        graph[connections[i][1]].push(connections[i][0])                      
    }
    
    dfs(0, -1, 0, res, graph, rank)
    
    return res 
};

const dfs = (curNode, prevNode, level, res, graph, rank) => {
    rank[curNode] = level + 1 
    for (let neighbor of graph[curNode]) {
        if (neighbor === prevNode) {
            continue
        } 
        if (rank[neighbor] === -1) {
            let neighborLevel = dfs(neighbor, curNode, level+1, res, graph, rank)
            rank[curNode] = Math.min(rank[curNode], neighborLevel)
        } else {
            rank[curNode] = Math.min(rank[curNode], rank[neighbor])
        }
    }
    if (rank[curNode] === level + 1 && curNode !== 0) {
        res.push([curNode, prevNode])
    }
    return rank[curNode]
}