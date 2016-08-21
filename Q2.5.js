/*

2.5

You have two numbers represented by a linked list, 
where each node contains a single digit. 
The digits are stored in reverse order, such that the 
Ts digit is at the head of the list. 

Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input:(7-> 1 -> 6) + (5 -> 9 -> 2).Thatis,617 + 295.
Output: 2 -> 1 -> 9.That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem. 
EXAMPLE
Input:(6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295.
Output: 9 -> 1 -> 2.That is, 912.
*/

'use strict;'

var linked = require('./Linked_list_library');
var Node = linked.Node;

function node2num(node) {

	var n = node;
	var string = n.data;
	var num = 0;

	while(n.next) {
		string = '' + n.next.data + string;
		n = n.next;
	}
	console.log(string);
	return parseInt(string);

}

function node2num(node) {

	var n = node;
	var string = n.data;
	var num = 0;

	while(n.next) {
		string =  n.next.data + '' + string;
		n = n.next;
	}
	console.log(string);
	return parseInt(string);

}

function num2node(string) {
	var node = new Node(string[string.length-1]);
	var head = node;

	for(var i = string.length-2; i >= 0; i--) {
		node.next = new Node(string[i]);
		node = node.next;
	}

	return head;
}

function sumNodeString(node1, node2) {

	 var num1 = node2num(node1);
	 var num2 = node2num(node2);
	 // This could be made more efficient by combining these
	 // into a single while loop in node2num(n1,n2);
	 var sum = num1 + num2;

	 console.log(sum);

	 return num2node(sum.toString());
}

var LL1 = linked.create([7,1,6]);
var LL2 = linked.create([5,9,2]);
var ans = sumNodeString(LL1,LL2);
linked.print(ans);