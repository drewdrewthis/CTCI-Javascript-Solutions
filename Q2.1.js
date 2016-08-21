/*

2.1

Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?

*/

var linked = require('./Linked_list_library');

function rmvDupes(head) {
	var hash = {};
	var n = head;

	hash[n.data] = true;

	while(n.next){
		if(hash[n.next.data]) {
			console.log('Found: ' + n.next.data);
			n.next = n.next.next || null;
		}
		else {
			hash[n.next.data] = true;
			n = n.next;
		}
	}

	return head;
}

function rmvDupes2(head) {
	var p1 = head,
		p2 = head;

	while (p1.next) {

		if (p2.next === null) {
			p1 = p1.next;
			p2 = p1;
			continue;
		}

		if (p1.data == p2.next.data) {
			p2.next = p2.next.next || null;
			continue;
		}

		p2 = p2.next;

	}

	return head;
}

function recursiveDupes(head, hash) {

	if(!hash) {
		hash = {};
		hash[head.data] = true;
	}

	if(head.next == null) {
		return;
	}

	if(hash[head.next.data]) {
		// console.log(head.next.data);
		head.next = head.next.next || null;
	}
	else {
		hash[head.next.data] = true;
		head = head.next;
	}

	return recursiveDupes(head,hash);
}


var arr = [3,1,4,8,5,5,3,2,1,9,0,7,7];
var head = linked.create(arr);

linked.print(head);
//rmvDupes(head);
rmvDupes2(head);
//recursiveDupes(head);
linked.print(head);