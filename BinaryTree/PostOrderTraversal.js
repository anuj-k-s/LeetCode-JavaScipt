
class Node {

    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

var postorderTraversal = function(root) {
   
    function traversal(root){
        if(root == null || root.val == null){
            return;
        }
        traversal(root.left);
        traversal(root.right);
        result.push(root.val);
    }
    let result = [];
    traversal(root,result);
    return result;
};

let root = new Node(1);
root.left = new Node(null);
root.right = new Node(2);
root.right.left = new Node(3);

console.log(postorderTraversal(root));

