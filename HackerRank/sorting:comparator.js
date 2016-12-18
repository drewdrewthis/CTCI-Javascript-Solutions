'use strict';

/* Sorting: Comparator

Given an array of n Player objects, write a comparator that sorts them in order of decreasing score; if 2 or more players have the same score, sort those players alphabetically by name. To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the Comparator.compare(T o1, T o2) method.

*/

function Player(name, score) {
	this.name = name;
	this.score = score;
}

function merge(left,right) {
	
	var sorted = new Array(left.length + right.length);
	var l = 0;
	var r = 0;
	var i = 0;

	while(left[l] || right[r]) {
		// While there are items in either array
		// Compare them. Compare func will return true if:
		// Left > right OR right doesn't exist.
		
		if (comparePlayers(left[l], right[r])) {
			sorted[i++] = left[l++];
		}
		else {
			sorted[i++] = right[r++];
		}
	}
	
	return sorted;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid,arr.length);
	return merge(mergeSort(left),mergeSort(right));
}

function comparePlayers(A,B) {
	if (!A) return false;
	if (!B) return true;
	
	if (A.score > B.score || 
		(A.score === B.score && A.name < B.name)) {
		return true;
	}
	else {
		return false;
	}
	
	throw Error("Invalid input");
}

function comparator(arr) {
	return mergeSort(arr);
}
/*
console.log(comparePlayers(new Player("Billy", 1),
new Player("Sarah", 14)))
*/

console.log(comparator([
new Player("Billy", 14),
new Player("Sarah", 12),
new Player("Major", 4),
new Player("Minor", 100),
new Player("Quince", 12),
new Player("Stacy", 12),
new Player("Aaron", 12)
]));

console.log(comparator([]));