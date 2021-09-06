class TreeNode {
    constructor(val) {
      this.val = val === undefined ? 0 : val;
      this.left = null;
      this.right = null;
    }
  }



function isSameTree(p, q) {
  if (p == null  &&  q == null) {
    return true;
  } 
  if (p != null && q != null && p.val === q.val) {
    return (isSameTree(p.left, q.left) && isSameTree(p.right,q.right));
  }
  
  return false;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(1);

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(1);

console.log(isSameTree(root, root1));
