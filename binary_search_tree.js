class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val){
        // create a new node
        // start at root
        // if no root, make root new node
        // if there is a root, check if the value is greater than or less than
        // if greater
            // check to see if there is a node to the right
                // if yes, move to that node and repeat
                // if no, add the node as the right property
        // if less
            // check to see if there is a node to the left
                // if yes, move to that node and repeat
                // if no, add the new node as the left property
    }
}