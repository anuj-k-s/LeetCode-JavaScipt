class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var inorderTraversal = function (root) {
  function traversal() {
    let curr = root;
    while (curr != null || stack.length >0) {
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      if (curr != null && curr.val != 0) {
        result.push(curr.val);
      }
      curr = curr.right;
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
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(inorderTraversal(root));
