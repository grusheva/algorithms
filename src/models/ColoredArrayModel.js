import { SPECTRUM_VALUES } from '../utils/constants';
import { BinaryTree } from './BinaryTree';
import { Trie } from './Trie';

class ColoredArrayModel {
  defaultValues = { count: 10000 };

  generate(count = this.defaultValues.count) {
    const newSet = new Set();
    while (newSet.size < count) {
      newSet.add(Math.random().toString(16).substr(2, 6));
    }

    return Array.from(newSet);
  }

  getChannelValue(channel, hex) {
    if (channel === SPECTRUM_VALUES.r) {
      return parseInt(hex.slice(0, 2), 16);
    }
    if (channel === SPECTRUM_VALUES.g) {
      return parseInt(hex.slice(2, 4), 16);
    }
    if (channel === SPECTRUM_VALUES.b) {
      return parseInt(hex.slice(4, 6), 16);
    }
  }

  sortByChannel(array, param) {
    return [
      ...array.sort((a, b) => this.getChannelValue(param, a) - this.getChannelValue(param, b)),
    ];
  }

  sort(array) {
    return [...array].sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  getPrefixTree(array = []) {
    const trie = new Trie();
    array.forEach(item => trie.insert(item));

    return trie;
  }

  getBalancedBinaryTree(array) {
    const binaryTree = new BinaryTree();

    binaryTree.createBalancedTreeFromArr(array);

    return binaryTree;
  }
}

export const coloredArrayModel = new ColoredArrayModel();
