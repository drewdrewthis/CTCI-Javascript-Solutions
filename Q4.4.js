/*

4.4
Given a binary tree, design an algorithm which creates a linked list of all the nodes at
each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
*/

'use strict;'

var Tree = require('./Trees_and_Graphs');
var linked = require('./Linked_list_library');
var Node = linked.Node;

function treeToLinked(root) {
	// BFS

	var queue = [];
	var levels = {
		1: new Node(root.data)
	};
	root.level = 0;
	queue.push(root);

	while(queue.length > 0) {
		var r = queue.shift();
		for (var node in r) {
			var n = r[node];
			if (n instanceof Tree) {
				n.level = r.level + 1;
				queue.push(n);
				if(levels[n.level] && levels[n.level].tail) {
					levels[n.level].tail.next = new Node(n.data);
					levels[n.level].tail = levels[n.level].tail.next;
				}
				else {
					levels[n.level] = {};
					levels[n.level].tail = new Node(n.data),
					levels[n.level].head = levels[n.level].tail

				}
			}
		}
	}

	return levels;
}

var tree = new Tree(1);
tree.add(2,3);
tree.left.add(4,5);
tree.right.add(6,7);
tree.left.left.add(8);
tree.right.left.add(null,11); 
tree.right.left.right.add(12,13); 

var ll_obj = treeToLinked(tree);
console.log(ll_obj);
linked.print(ll_obj[2].head); 

