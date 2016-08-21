/*

2.4

Write code to partition a linked list around a value x, 
such that all nodes less than x come before all nodes greater than or equal to x.

*/

'use strict;'

var linked = require('./Linked_list_library');

function partitionLL(head, x) {

	console.log("Partition - values above and below: " + x);

	// The trick to this is to not create two new LL
	// But to only extract one partition
	var n = head,
		sm = new linked.Node('temp'),
		lg = new linked.Node('temp'),
		sm_head = sm,
		lg_head = lg;

	while(n.next) {
		var d = n.next.data;

		if (d >= x) {
			lg.next = n.next;
			n = n.next;
			sm.next = null;
			lg = lg.next;
		} 
		else {
			sm.next = n.next;
			n = n.next;
			lg.next = null;
			sm = sm.next;
		}
	}

	if(head.data < x) {
		sm_head.data = head.data;
		lg_head = lg_head.next;
	}
	else {
		lg_head.data = head.data;
		sm_head = sm_head.next;
	}

	// Smash 'em back
	sm.next = lg_head;

	return sm_head;
}

function partitionLLv2(head, x) {

	console.log("Partition - values above and below: " + x);

	// Can I do this with only 1 new LL?

	var n = head,
		lg = new linked.Node('temp'),
		lg_head = lg;

	while(n.next.next) {
		var d = n.next.data;

		if (d >= x) {
			lg.next = n.next;
			n.next = n.next.next;
			lg = lg.next;
			lg.next = null;
		}
		else {
			n = n.next;
		}
	}

	// Check last number
	if(n.next.data >= x) {
		lg.next = n.next;
		n.next = null;
	}

	//Check first number
	if(head.data < x) {
		lg_head = lg_head.next;
	}
	else {
		lg_head.data = head.data;
		head = head.next;
	}

	// Smash 'em back
	n.next = lg_head;

	return head;
}




var arr = [3,1,4,8,5,5,3,2,1,9,0,3,3];
var head = linked.create(arr);

linked.print(partitionLL(head, 5));
console.log();
linked.print(partitionLLv2(head, 5));