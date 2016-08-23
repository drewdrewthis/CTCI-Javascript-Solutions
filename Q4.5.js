/*

4.5
Implement a function to check if a binary tree is a binary search tree.
*/

'use strict;'

var assert = require('assert'); // Mocha
var trees = require('./Trees_and_Graphs');
var Tree = trees.Tree;
var makeBST = trees.makeBST;


function isBST(tree, min, max) {

	if(!tree) {
		return true;
	}

	/* 
	TODO: Set checks for min and max
	--> all nodes to left must be smaller
	--> all nodes to thre right must be larger

	var min = min || tree.data;
	var max = max || tree.data;

	if ( tree.data >= max || tree.data <= min ) {
		return false;
	}

	*/

	if(tree.left) {
		if (!isBST(tree.left) ||
			tree.data < tree.left.data) {
			return false;
		}
	}

	if(tree.right) {
		if (!isBST(tree.right) ||
			tree.data >= tree.right.data) {
			return false;
		}
	}

	return true;
}

var arr = [1,2,3,4,5,6,7,8];
var tree = new makeBST(arr);

var tree2 = new Tree(4);
tree2.add(3,7);
tree2.left.add(1,4);
tree2.right.add(5,8);

// Tests
describe('ValidBST:', function() {
  describe('BST from [1,2,3,4,5,6,7,8]', function() {
    it('should return true', function() {
      	assert.equal(true, isBST(tree));
    });
  });
  describe('Custom trees:', function() {
    it('should return true', function() {
      	assert.equal(true, isBST(tree2));
    });

    it('should return true', function() {
    	tree2.right.right.add(null, 9);
      	assert.equal(true, isBST(tree2));
    });

    it('should return true', function() {
    	tree2.left.right.add(3, 6);
      	assert.equal(true, isBST(tree2));
    });

    it('should return false', function() {
    	tree2.left.left.add(4, 5);
      	assert.equal(true, isBST(tree2));
    });
  });
});