class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

let levelOrderTraversal = function (root) {
  function traversal() {
    if (root && root.val != 0) {
      stack.push(root);
    }
    while (stack.length > 0) {
      let node = stack.shift();
      result.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
      
    }
  }
  let stack = [];
  let result = [];
  traversal();
  return result;
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

console.log(levelOrderTraversal(root));
