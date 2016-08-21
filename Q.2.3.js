/*

2.2

Implement an algorithm to delete a node in the middle of a singly linked list, 
given only access to that node.
EXAMPLE
Input: the node c from the linked list a->b->c->d->e
Result: nothing is returned, but the new linked list looks like a- >b- >d->e

*/


var Node = function(data) {
	this.data = data;
	this.next = null;
}

function createLL(arr) {

	var head = new Node(arr.shift());
	var end = head;

	while(arr.length > 0){
		end.next = new Node(arr.shift());
		end = end.next;
	}

	return head;
}

function printLL(head) {
	while(head.next) {
		console.log(head.data);
		head = head.next;
	}
	console.log(head.data);
}

function getNode(head, pos) {

	for(var i = 0; i <= pos; i++) {
		head = head.next;
	}

	return head;
}



function rmvNode(node){

	var next = node.next;

	node.data = next.data;
	node.next = next.next;

}



var arr = [3,1,4,8,5,5,3,2,1,9,0,8];
var head = createLL(arr);

print(getNode(head, 3).data);

