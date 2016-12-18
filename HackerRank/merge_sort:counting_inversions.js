'use strict';

/*

Given an arr. Sort the array with a modified in-place merge sort and count the number of inversions (swaps).

*UNFINISHED*


*/

var inversions = 0;

function merge(left,right) {
	var sort = new Array(left.length + right.length);
	var l = 0, r = 0, i = 0;

	while(left[l] && right[r]) {
		if (left[l] > right[r]) {
			sort[i++] = left[l++];
		}
		else {
			sort[i++] = right[r++];
		}
	}
	
	while(left[l]) {
		sort[i++] = left[l++];
	}
	
	while(right[r]) {
		sort[i++] = right[r++];
	}

	return sort;	
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const MID 	= Math.floor(arr.length/2);
	const LEFT 	= arr.slice(0, MID);
	const RIGHT	= arr.slice(MID, arr.length);
	return merge(mergeSort(LEFT), mergeSort(RIGHT));
}

mergeSort([2,1,3,1,2]);

console.log(inversions);
