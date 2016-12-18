/*

FInd all the permutations of string S in string B

*/

'use strict';

// Example

/*
let string_S = "xacxzaa"
let string_B = "fxaazxacaaxzoecazxaxaz"
*/

let string_S = "xacxzaa"
let string_B = "fxaazxacaaxzoecazxaxaz"


	// Brute:
	// 1. Find all perms of S => Array<s>
	// 2. For each string s in A, B.includes(s)
	// O(S!)

	// Thoughts:
	// There are no triple aaa's in B
	// There is only one double

	// Thoughts:
	// Trying to find a match in B
	// Iterate through B, creating substrings of length S from each letter
	// -> can stop at letter B.length - S.length - 1
	// -> Trie?
	// -> For each substring created, iterate through each letter to see if 
	// there is a corresponding letter in S
	// -> Can turn S into a "bucket" of letters, popping each off each time to keep track
	// -> if run out of letters, or if letter doesn't exist in bucket, break
	// -> if end is reached successfully, add substring to result array

	// Will need a large loop for B, and then an internal loop for each substring
	// Must be a way to optimize for each subsequent substring.. will check after

	// Will need a check substring function, and an object with letter counts that will be used for each check
	// Will need a result array for substrings
	// Will need a function to build obj



function buildBucket(S) {
	let bucket = {};

	for (let letter of S) {
		if(bucket[letter]) {
			bucket[letter]++;
		}
		else {
			bucket[letter] = 1;
		}
	}

	return bucket;
}

function isSubstring(string, bucket) {

	var bucket = Object.create(bucket); // Must copy bucket, or will modify original bucket

	for (let letter of string) {
		if (bucket[letter] && --bucket[letter] >= 0) {
			// If letter doesn't exist OR
			// subtracting a letter creates a negative value in bucket
			continue;
		}
		else {
			return false;
		}
	}

	return true;
}

function findPerms(S, B) {

	var result = [];
	var letter_bucket = buildBucket(S);

	for ( let i = 0; i < B.length - S.length; i++) {
		let substring = B.slice(i, i + S.length);
		if(result.indexOf(substring) < 0) {
			// Optimize by making sure not include dupes
			if (isSubstring(substring, letter_bucket)) {
				result.push(substring);
			}
		};
	}

	return result;
}

console.log(findPerms(string_S,string_B));
console.log(findPerms("XAXCCA","AXCCAXACXACACXA"));
console.log(findPerms("X","A"));
console.log(findPerms("","A"));