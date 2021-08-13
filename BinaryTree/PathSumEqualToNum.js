class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  var hasPathSum = function (root,targetSum) {
    if(root == null){
        return false;
    }
    function isSymmetric(root,targetSum){
        if(root == null) {
            return;
        }else{
            
            return isSymmetric(root.left, targetSum-root.val) || isSymmetric(root.right, targetSum-root.val);
        }
    }
    return isSymmetric(root,targetSum);
    
  };
  
  let root = new Node(1);
  root.left = new Node(2);
//   root.right = new Node(2);
//   root.left.left = new Node(3);
//   root.right.right = new Node(3);
//   root.left.right = new Node(4);
//   root.right.left = new Node(5);
  console.log(hasPathSum(root,1));
  