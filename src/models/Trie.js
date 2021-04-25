class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  getFullValue() {
    const output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join('');
  }
}

export class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new Node(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];

      if (i === word.length - 1) {
        node.end = true;
      }
    }
  }

  contains(value) {
    let node = this.root;

    for (let i = 0; i < value.length; i++) {
      if (node.children[value[i]]) {
        node = node.children[value[i]];
      } else {
        return false;
      }
    }
    return node.end;
  }

  find(prefix) {
    let node = this.root;
    const output = {};

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }
    this.findAllValues(node, output);

    return output;
  }

  findAllValues(node, valMap) {
    if (node.end) {
      valMap[node.getFullValue()] = true
    }
    for (let child in node.children) {
      this.findAllValues(node.children[child], valMap);
    }
  }
}
