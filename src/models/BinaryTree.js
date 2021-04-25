class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  createBalancedTreeFromArr(arr) {
    return this.createBalancedTree(arr, 0, arr.length - 1);
  }

  createBalancedTree(arr, start, end) {
    if (end < start) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.createBalancedTree(arr, start, mid - 1);
    node.right = this.createBalancedTree(arr, mid + 1, end);

    this.root = node;
    return node;
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let output = {};

    while (current && !output) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        output[current.value] = true;
      }
    }

    return output;
  }
}
