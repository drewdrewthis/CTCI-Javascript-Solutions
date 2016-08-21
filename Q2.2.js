/*

2.2

Implement an algorithm to find the kth to last element of a singly linked list.

*/

var linked = require('./Linked_list_library');


// This is most optimal Time: 0(n) Space: O(1)
function findKth(head, k) {
	var i = 0;
	var kth = head;

	while(head.next) {
		i++;
		if ( i >= k ) {
			// Only progress kth node
			// after moving k nodes forward
			kth = kth.next;
		}
		head = head.next;
	}

	return kth.data;
}

// Kind of like approach C variant
function recursK(head, k, node) {
	var i = i || 0; 
	// Remember that any variables set during first iteration
	// are available to all future iterations
	var node = node || head;

	if(head.next) {
		i++;
		if ( i >= k ) {
			node = node.next;
		}
		head = head.next;
		return recursK(head, k, node);
	}

	return node.data;
}

// From book solutions
function recursK2(head, k) {
	var i;

	if(!head) {
		return 0;
	}

	i = recursK2(head.next, k) + 1;

	if(i === k) {
		return head.data;
	}
	return head.data;
}

var arr = [2,1,4,8,5,5,3,2,1,9,0,8];
var head = linked.create(arr);


console.log(findKth(head, 5));
console.log(recursK(head, 5));
console.log(recursK2(head, 5));
