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
    if (this.isEmpty()) return;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  max() {
    if (this.isEmpty()) return;
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (!root.right && !root.left) {
      return null;
    }
    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
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
