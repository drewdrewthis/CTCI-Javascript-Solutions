/*

11.2 
Write a method to sort an array of strings so that all the anagrams are next to each
other.

*/

'use strict';

// Example:

let A = ['Madam Curie','come','quilt','rats','William Shakespeare','tars','cemo','star','tool','I am a weakish speller','Radium came'];
// => ['Madam Curie','Radium came','come','cemo','rats','star','tars','William Shakespeare','I am a weakish speller','quilt','tool']

function anagramSort(arr) {

	// 1. For each string
	// 2. Arrange into buckets by hash key of sum of charCodes
	// 3. concat all buckets

	var hash = {};
	var result = [];

	for(let word of arr) {
		let sum = 0;
		for(let letter of word) {
			if(letter != " ") {
				// Don't count spaces
				sum += letter.toLowerCase().charCodeAt();
			}
		}
		if (hash[sum]) {
			hash[sum].push(word);
		}
		else {
			hash[sum] = new Array(word);
		}
	}

	console.log("Hash", hash);

	// Concat
	for (let bucket in hash) {
		result = result.concat(hash[bucket]);
	}

	return result;
}

console.log("Unsorted", A);
console.log("Sorted", anagramSort(A));

// Complexity: O(Letters) + O(buckets);