/*

4.1
Implement a function to check if a binary tree is balanced. 
For the purposes of this question, a balanced tree is defined to 
be a tree such that the heights of the two subtrees of any node never 
differ by more than one.
*/

'use strict;'

var Tree = require('./Trees_and_Graphs');

function isBalanced(root) {
	/* 
	BFS Approach - different from recursive approach in book
	
	This approach takes into account that every level of the tree should be full
	according to 2^H, where height is the height of the tree. If a level isn't full, 
	and the level before it is also not full, then we know that it's not balanced.
	*/

	var queue = [];
	var levels = [1];
	root.level = 0;
	queue.push(root);

	while(queue.length > 0) {
		var r = queue.shift();
		for (var node in r) {
			if (r[node] instanceof Tree) {
				r[node].level = r.level + 1;
				queue.push(r[node]);
				levels[r[node].level] = levels[r[node].level] + 1 || 1;
				if (levels[r[node].level] < Math.pow(2,r[node].level) && 
					levels[r[node].level - 1] < Math.pow(2,r[node].level - 1)) {
					return false;
				}
			}
		}
	}

	return levels;
}

var tree = new Tree(1);
console.log(isBalanced(tree)); // True
tree.add(2,3);
console.log(isBalanced(tree)); // True
tree.left.add(4,5);
tree.right.add(6,7);
console.log(isBalanced(tree)); // True
tree.left.left.add(8);
tree.right.left.add(null,11); 
console.log(isBalanced(tree)); // True
tree.right.left.right.add(12,13); 
console.log(isBalanced(tree)); // False



