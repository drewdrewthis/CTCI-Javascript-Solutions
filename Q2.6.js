
/*

2.6

Given a circular linked list, 
implement an algorithm which returns the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a 
node's next pointer points to an earlier node, so as to make a 
loop in the linked list.

EXAMPLE
Input:A ->B->C->D->E-> C[the same C as earlier] Output:C

*/

var linked = require('./Linked_list_library');
var Node = linked.Node;

function createLoopedLL(arr) {

	var head = new Node(arr.shift());
	var end = head;
	var initial_node = null;

	while(arr.length > 0){
		if(arr.length == 1) {
			initial_node = end;
			console.log('Find: ' + initial_node.data);
		}
		end.next = new Node(arr.shift());
		end = end.next;
	}

	end.next = initial_node;

	return head;
}

function printLL(head) {
	process.stdout.write(head.data);
	var count = 0;
	while(head.next && count < 10) {
		head = head.next;
		process.stdout.write(' -> ' + head.data);
		count++;
	}
	process.stdout.write('\n');
}




function findInitialNode(head) {

	var seen_data = {};
	var found = false;
	var n = head;

	while(!found) { // Set a counter to break infinite loop if not found.
		if (seen_data[n.data]) {
			// This is if there is repeat data in the actual linked list
			// You would have to use a hash bucket and then check through the bucket.
			var bucket = seen_data[n.data];
			for(var i = 0; i < bucket.length; i++) {
				// console.log(bucket.length);
				if (bucket[i] == n) {
					found = true; // Not really necessary.
					return n.data;
				}
			}
			seen_data[n.data].push(n);
		}
		else {
			seen_data[n.data] = [n];
		}
		n = n.next;
	}
	
}

function findInitialNode2(head) {
	// Modified from book

	var slow = head;
	var fast = head;

	while(fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			console.log('collision: ' + fast.data + " + " + slow.data);
			break; // Collision
		}
	}

	if(fast == null || fast.next == null) {
		// No loop
		return null;
	}

	slow = head;

	while(slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return fast.data;

}


var LL = createLoopedLL(['A','A','A','A','D','A','A']);
var LL2 = createLoopedLL(['A','B','C','D','E','F','G']);
printLL(LL);
printLL(LL2);

console.log(findInitialNode(LL));
console.log();
console.log(findInitialNode2(LL2));