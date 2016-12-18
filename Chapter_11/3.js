/*

11.3

Given a sorted array of n integers that has been rotated an unknown number of times, 
write code to find an element in the array. You may assume that the array was originally 
sorted in increasing order.

*/

'use strict';

/*

Input: 	rotated, sorted (asc) array
Output: Index of item in input array

Goal: Improve on Brute Force O(n)

Notes:

Input array can be broken into 2 sorted sub-arrays

Steps:

1. Binary search original start OR element. If element found, return index
2. Once original start found, 
3. Check if arr[0] > or < element
4. If greater than, search front half (binary)
5. Else search second half
6. Return index when found

Best case: log(n);
Worst case: 2 * log(n)

*/

function binarySearch(arr, start, end, el) {

	while(start < end) {

		let mid = Math.floor((start + end)/2);

		if(arr[mid] < el) {
			start = mid;
		}
		else if (arr[mid] === el) {
			return mid;
		}
		else {
			end = mid;
		}
	}

	return -1;
}

function findStartORel(arr, el) {

	// Implement binary search
	var start = 0;
	var end = arr.length - 1;

	while(start < end) {

		let mid = Math.floor((start + end)/2);

		if(arr[mid] <= arr[start]) {
			end = mid;
		}
		else if (arr[mid] === el || arr[mid] < arr[mid - 1]) {
			return mid;
		}
		else if(arr[mid] > arr[end]) {
			start = mid;
		}

		//console.log("start", start, "mid", mid,"end", end);
	}

	return -1;
}


function findItem(arr, el) {

	// Edge cases
	if (arr.length < 2) return arr[0] || "";

	// Step 1
	var originalIndex = findStartORel(arr, el);
	if (arr[originalIndex] === el) {
		return originalIndex;
	}
	else if(arr[0] > el) {
		return binarySearch(arr, 0, originalIndex - 1, el);
	}
	else {
		return binarySearch(arr, originalIndex + 1, arr.length - 1, el);
	}

	return -1;
}

let A = [3,4,5,7,8,9,10,1,2];

console.log('Array', A, "Element", 9, 'Position', findItem(A, 9));
console.log('Array', A, "Element", 1, 'Position', findItem(A, 1));
console.log('Array', A, "Element", 5, 'Position', findItem(A, 5));
