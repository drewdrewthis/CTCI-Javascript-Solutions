/*

2.2

Implement an algorithm to delete a node in the middle of a singly linked list, 
given only access to that node.
EXAMPLE
Input: the node c from the linked list a->b->c->d->e
Result: nothing is returned, but the new linked list looks like a- >b- >d->e

*/

var linked = require('./Linked_list_library');

function getNode(head, pos) {

	for(var i = 1; i < pos; i++) {
		head = head.next;
	}

	return head;
}

function rmvNode(node){

	if(!node.next) {
		console.log
		console.error(new Error("Can't return last node"));
		//Optional
		node.data = null;
		return;
	}

	console.log("Removed: " + node.data);

	var next = node.next;
	node.data = next.data;
	node.next = next.next;

}

var arr = [3,1,4,8,5,5,3,2,1,9,0,8];
var head = linked.create(arr);
linked.print(head);

var node = getNode(head, 12); // Get whatever node to be removed
console.log('Remove this node: ' + node.data);
rmvNode(node); // Remove with node from above
linked.print(head);