
// Pseudocode
var DFS = function(root) {
	if(root === null) return;
	visit(root);
	root.visited = true;
	for(var node in root.adjacent) {
		if (node.visited === false) {
			DFS(node);
		}
	}
}

var BFS = function(root) {
	var queue = new Queue();
	queue.enqueue(root);

	while(!queue.isEmpty()) {
		var r = queue.dequeue();
		for (var node in r.adjacent) {
			queue.enqueue(node);
		}
	}
}

var Tree = function(value) {
	var self = this;
	self.data = value;
	self.left = null;
	self.right = null;

	Object.defineProperty(this, 'add', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: function(left, right) {
			self.left = new Tree(left);
			self.right = new Tree(right);
		}
	});
}

function bstHelper(arr, start, end) {
	if(start > end) {
		return null;
	}
	else{
		var mid = Math.floor((start + end)/2);
		var tree = new Tree(arr[mid]);
		tree.left = bstHelper(arr,start, mid - 1);
		tree.right = bstHelper(arr,mid + 1, end); 	
	}
	return tree;
}

function makeBST(arr) {
	return bstHelper(arr,0,arr.length-1);
}


var Graph = function(value) {
	var self = this;
	self.data = value;

	// TO DO
}

module.exports = {
	Tree: Tree,
	makeBST: makeBST
};