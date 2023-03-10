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

    dfsPreOrder(){
        // visiting nodes in a vertical fashion starting at the left and going to the end of the tree
        let visited = []
        let current = this.root

        function traverse(node){
            visited.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited 
    }

    dfsPostOrder(){
        let visited = []

        function traverse(node){
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
            // notice that this comes after in post order 
            // this allows us to go all the way to the bottom of the tree
        }
        traverse(this.root)

        return visited
    }

    dfsInOrder(){
        let visited = []

        function traverse(node){
            if (node.left) traverse(node.left)
            visited.push(node.value)
            // note the position
            // this allows us to go to the bottom most left, than the parent and then the right
            if (node.right) traverse(node.right)
        }
        traverse(this.root)

        return visited 
    }
}