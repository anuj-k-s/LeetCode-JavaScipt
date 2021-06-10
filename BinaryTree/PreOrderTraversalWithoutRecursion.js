class Node {
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.left = null;
    this.right = null;
  }
}

var preorderTraversal = function (root) {
  function traversal() {
    if (null != root && root.val !== 0) {
      stack.push(root);
    }
    while (stack.length > 0) {
      let node = stack.pop();
      resultantArr.push(node.val);
      if (node.right !== null && node.right.val != 0) {
        stack.push(node.right);
      }
      if (node.left !== null && node.left.val != 0) {
        stack.push(node.left);
      }
    }
  }
  let stack = [];
  let resultantArr = [];
  traversal();
  return resultantArr;
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

console.log(preorderTraversal(root));
