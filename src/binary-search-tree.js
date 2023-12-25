const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const addData = function (node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (node.data < data) {
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }

      return node;
    };

    this._root = addData(this._root, data);
  }

  has(data) {
    const hasData = function (node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      if (node.data < data) return hasData(node.right, data);

      if (node.data > data) return hasData(node.left, data);
    };

    return hasData(this._root, data);
  }

  find(data) {
    const findData = function (node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      if (node.data < data) {
        return findData(node.right, data);
      } else {
        return findData(node.left, data);
      }
    };

    return findData(this._root, data);
  }

  remove(data) {
    const removeData = function (node, data) { 
      return node;
    };
  }

  max() {
    if (!this.root) return false;

    let node = this._root;

    while (node.right) {
      node = node.right;
    }
    
    return node.data;
  }

  min() {
    if (!this.root) return false;

    let node = this._root;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};