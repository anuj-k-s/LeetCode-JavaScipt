
class Node {

    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

var preorderTraversal = function(root) {
   
    function traversal(root){
        if(root == null || root.val == null){
            return;
        }
        result.push(root.val);
        traversal(root.left);
        traversal(root.right);
    }
    let result = [];
    traversal(root,result);
    return result;
};

let root = new Node(1);
root.left = new Node(null);
root.right = new Node(2);
root.right.left = new Node(3);

console.log(preorderTraversal(root));

