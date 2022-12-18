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
        let newNode = new Node(val)

        if (!this.root){
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true){
                if (val === current.value) return undefined
                // accounting for duplicates 
                if (val < current.val){
                    if (!current.left){
                        current.left = newNode 
                        return this
                    } else {
                        current = current.left 
                    }
                } else if (val > current.val){
                    if (current.right === null){
                        current.right = newNode
                        return this
                    } else {
                        current = current.right 
                    }
                }
            }
        }
    }

    find(val){
        // start at root
        // check if there is a root, if not, then return false
        // if there is a root, check if the value === root.val
        // if not, check to see if the value if greater or less than the root
        // if greater / if less
            // check to see if there is a node to the right/ left
                // if yes, move to that node and repeat
                // if not, return 
        if (!this.root) return false 

        let foundNode = false
        let current = this.root

        while (current && !foundNode){
            // current is our check to make sure we haven't reached the end of the tree
            if (val < current.val){
                current = current.left
            } else if (val > current.val){
                current = current.right
            } else {
                foundNode = true 
            }
        }
        if (!foundNode) return false
        return current 
    }

    contains(val){
        // same as find but return true or false
        if (this.root === null) return false
        let current = this.root
        let found = false
        while (current && !found){
            if (val < current.val){
                current = current.left
            } else if (val > current.val){
                current = current.right 
            } else {
                return true
            }
        }
        return false
    }
}

// Big O
    // insertion O(log n) (not guaranteed)
    // searching O(log n) (not guaranteed)