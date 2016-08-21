/*

2.7
Implement a function to check if a linked list is a palindrome.

*/

'use strict;'

var linked = require('./Linked_list_library');

function LL2Array(head) {
	var n = head;
	var arr = [head.data];

	while(n.next) {
		arr.push(n.next.data);
		n = n.next;
	}

	//console.log(arr);
	return arr;
}

function isPal(head) {
	var arr = LL2Array(head);
	var mid_floor = Math.floor((arr.length-1)/2);
	var mid_ceil = Math.ceil((arr.length-1)/2);

	for(var up = mid_ceil, down = mid_floor; up < arr.length; up++, down-- ) {
		if ( arr[up] != arr[down] ) {
			return false;
		}
	}

	return true;
}

function findMid(head) {
	var slow = head;
	var fast = head;

	while(fast.next) {
		fast = fast.next.next;
		if(!fast) {
			break;
		}
		slow = slow.next;
	}

	console.log(slow.data);


}

function isPalIterative(head) {
	var slow = head;
	var fast = head;
	var stack = [];

	while(fast && fast.next) {
		stack.push(slow.data);
		slow = slow.next;
		fast = fast.next.next;		
	}

	console.log(stack);
	// MOve forward creating stack,
	// THen move forward checking stack

	/* Check if odd number and skip if it does */

	if(fast) {
		slow = slow.next;
	}

	while(slow.next) {
		if (slow.data != stack.pop()) {
			return false;
		}
		slow = slow.next;
	}

	return true;
}



var LL1 = linked.create([1,3,2,4,5]);
var LL2 = linked.create([1,3,2,4,1,6]);

console.log(isPal(linked.create([1,3,2,4,5]))); 		// false
console.log(isPal(linked.create([1,3,2,3,1]))); 		// true
console.log(isPal(linked.create([1,2,3,3,2,1]))); 	// true
console.log(isPal(linked.create([1,2,3,2,2,1]))); 	// false
console.log(isPal(linked.create([]))); 				// true
console.log(isPal(linked.create([1]))); 				// true
console.log(isPal(linked.create([1,1]))); 			// true
console.log(isPal(linked.create([1,2]))); 			// false

findMid(LL2);
console.log(isPalIterative(linked.create([1,3,2,2,3,1])));