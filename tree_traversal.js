// this is for traversing any tree, not just sorted binary search trees
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class TreeTraversal {
    constructor(){
        this.root = null
    }

    bfs(){
        // breadth first search
        // traversing tree horizontally aka visit all siblings before moving onto children
        let visited = []
        let queue = []
        let node = this.root

        queue.push(node)

        while(queue.length){
            // while there is something in the queue
            // remove something from the beginning of the queue 
            node = queue.shift()
            visited.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }
}