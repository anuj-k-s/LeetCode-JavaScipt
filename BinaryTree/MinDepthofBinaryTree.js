/* The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node. */

class Node {

    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

var minDepth = function(root) {
   
    const traverseMinDepth = (node,depth) => {
        if(!node){
            return depth;
        }
        depth++;
        if (node.left && !node.right) {
            return traverseMinDepth(node.left, depth);
        } else if (! node.left && node.right) {
            return traverseMinDepth(node.right, depth);
        }

       return Math.min(traverseMinDepth(node.left,depth),traverseMinDepth(node.right,depth));
  
    }
    return traverseMinDepth(root,0);
   
    
    
};

let root = new Node(2);
root.left = new Node(null);
root.right = new Node(3);
root.right.left = new Node(null);
root.right.right = new Node(4);
root.right.right.left = new Node(null);
root.right.right.right = new Node(5);
console.log(minDepth(root));

