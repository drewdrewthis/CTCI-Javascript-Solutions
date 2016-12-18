/*

11.1 

You are given two sorted arrays, A and B, where A has a large enough 
buffer at the end to hold B. Write a method to merge B into A in sorted order.

*/

'use strict';

let A = [1, 4, 5, 9];
let B = [2, 3, 7, 8, 10];

A.length = A.length + B.length;

// Thought => modified mergesort?
// Mergesort needs the helper function

function merge(A,B) {

	let a = 0;
	let b = 0;
	let i = A.length - 1;

	while(A[i]) {
		if (B[b] == undefined || A[a] > B[b]) {
			A[i] = A[a];
			i--;
			a++;
		}
		else {
			A[i] = B[b];
			i--;
			b++;
		}
	}


	return A;

}


console.log('Unsorted', A, B);
console.log('Sorted', merge(A,B));
