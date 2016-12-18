'use strict';

function Node(x) {
	this.value = x;
	this.left = null;
	this.right = null;
}

function BinaryTree() {
	this.addHelper = function(x) {
		//console.log(x);
		if (!this.root) {
			this.root = new Node(x);
		}
		else {
			let node = this.root;
			while(node) {
				if(node.value < x) {
					if(!node.left) {
						return node.left = new Node(x);
					}
					else {
						node = node.left;
					}
				} else {
					if(!node.right) {
						return node.right = new Node(x);
					}
					else {
						node = node.right;
					}
				}
			}
		}
	}

	this.add = function() {
		Array.from(arguments).forEach(x => this.addHelper(x));
	}
}

var tree = new BinaryTree();
tree.add(4,2,5,1,3,0,6);

function binary2Linked(root, parent, side) {
	if(!root) return null;
	console.log(root.value);
	root.prev = binary2Linked(root.left,root,'prev') || parent || null;
	root.next = binary2Linked(root.right,root,'next') || parent || null;
	if(side === 'prev' && root.next !== null) {
		return root.next;
	} else if (side === 'next' && root.prev !== null) {
		return root.prev;
	} 
	return root;
}

var head = binary2Linked(tree.root);

while(head) {
	console.log(head.value);
	head = head.prev;
}