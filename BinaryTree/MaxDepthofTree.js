
class Node {

    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

var maxDepth = function(root) {
   
    if(!root || !root.val){
        return 0;
    }else{
        let lDepth = maxDepth(root.left);
        let rDepth = maxDepth(root.right);
        if(lDepth > rDepth){
            return lDepth +1;                     
        }else{
            return rDepth+1;
        }
    }
    
};

let root = new Node(1);
root.left = new Node(null);
root.right = new Node(2);
root.right.left = new Node(3);

console.log(maxDepth(root));

