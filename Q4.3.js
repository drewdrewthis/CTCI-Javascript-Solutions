/*

4.3
Given a sorted (increasingorder) array with unique integer elements, 
write an algorithm to create a binary search tree with minimal height.
*/

'use strict;'

var Tree = require('./Trees_and_Graphs');

var counter = 0;

function bstHelper(arr, start, end) {
	counter++;
	if(start > end) {
		return null;
	}
	else{
		var mid = Math.floor((start + end)/2);
		var tree = new Tree(arr[mid]);
		console.log(counter + ". --> [" + start + " : " + mid + " : " + end + "] --> " + arr[mid]);
		tree.left = bstHelper(arr,start, mid - 1); // 1, 1 => 2, 1
		//console.log(counter + ". Left --> [" + start + " : " + (mid-1) + "] --> " + arr[mid]);
		tree.right = bstHelper(arr,mid + 1, end); 
		//console.log(counter + ". Right --> [" + (mid+1) + " : " + end + "] --> " + arr[mid]);

	}
	//console.log(tree);
	return tree;
}

function makeBST(arr) {
	return bstHelper(arr,0,arr.length-1);
}

var arr = [1,2,3,4,5,6,7,8];
makeBST(arr);



