class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var isSymmetric = function (root) {
  
  function nodesMirrorCheck(leftNode, rightNode) {
    if (leftNode == null && rightNode == null) {
        return true;
    }
    if(leftNode !=null &&  rightNode!=null && leftNode.val == rightNode.val){
        return (nodesMirrorCheck(leftNode.left,rightNode.right) && nodesMirrorCheck(leftNode.right,rightNode.left));
    }

    return false;
  }
  return nodesMirrorCheck(root.left, root.right);
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.right.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
console.log(isSymmetric(root));
