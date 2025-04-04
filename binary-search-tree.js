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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(9);
tree.print();
