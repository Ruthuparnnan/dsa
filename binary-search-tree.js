class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return;

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  print() {
    console.log(this.root);
  }

  insertUsingRecursion(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (this.root.value === value) return;

    return this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (root.value < newNode.value) {
      if (!root.right) {
        root.right = newNode;
        return;
      } else {
        return this.insertNode(root.right, newNode);
      }
    } else if (root.value > newNode.value) {
      if (!root.left) {
        root.left = newNode;
        return;
      } else {
        return this.insertNode(root.left, newNode);
      }
    }
    return;
  }

  search(root, value) {
    if (!root) return false;
    if (root.value === value) return true;
    if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrderTraversal(root) {
    if (!root) return;
    console.log(root.value);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  }

  inOrderTraversal(root) {
    if (!root) return;
    this.inOrderTraversal(root.left);
    console.log(root.value);
    this.inOrderTraversal(root.right);
  }

  postOrderTraversal(root) {
    if (!root) return;
    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.value);
  }

  breadthFirstSearch() {
    if (this.isEmpty()) return;
    let queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  min() {
    if (!this.root.left) return this.root.value;
    let current = this.root.left;
    while (current.left) {
      current = current.left;
    }
    console.log(current.value);
  }

  min() {
    if (this.isEmpty()) return;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    console.log(current.value);
  }

  max() {
    if (this.isEmpty()) return;
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    console.log(current.value);
  }
}

const tree = new BinarySearchTree();
tree.insertUsingRecursion(10);
tree.insertUsingRecursion(5);
tree.insertUsingRecursion(15);
tree.insertUsingRecursion(9);
// tree.print();
// console.log(tree.search(tree.root, 10));
// tree.breadthFirstSearch();
tree.min();
tree.max();

