// to create a tree you need a node. a node in a tree looks like

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

// Create a constructor for binary search tree

function BinarySearchTree(){
  this.root = null;
}

// Now you need to understand the structure of a binary search tree.
// For every node value in the left is smaller than the value of the node
// For every node value at the right is higher than the value of the root.

BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while(currentNode) {
    if(val< currentNode.value) {
      if(!currentNode.left) {
        curretNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }

    } else {
      if(!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

var bst = new BinarySearchTree();
bst.push(3);
bst.push(5);

console.log('BST', bst)
