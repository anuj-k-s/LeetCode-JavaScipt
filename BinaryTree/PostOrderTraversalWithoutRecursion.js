class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var postorderTraversal = function (root) {
  function traversal(root) {
    if (root && root.val != 0) {
      stack.push(root);
    }
    while (stack.length > 0) {
      let node = stack.pop();
      result.push(node.val);
      if (node.left && node.left.val != 0) {
        stack.push(node.left);
      }
      if (node.right && node.right.val != 0) {
        stack.push(node.right);
      }
    }
  }

  let stack = [];
  let result = [];
  traversal(root);
  return result.reverse();
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(8);
root.right.right.left = new Node(9);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
root.left.right.right = new Node(7);

console.log(postorderTraversal(root));
