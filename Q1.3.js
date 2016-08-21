/*

Given two strings, write a method to decide if one is a permutation of the other.

*/

"use strict";

function isPerm(strA, strB)  {
	var A = {};
	var B = {};

	if ( strA.length != strB.length ) return false;

	for (var i = 0; i < strA.length; i++) {
		A[strA[i]] = A[strA[i]] ? A[strA[i]] + 1 : 1;
		B[strB[i]] = B[strB[i]] ? B[strB[i]] + 1 : 1;
	}

	// console.log(Object.keys(A));

	for ( var letter in A ) {
		// console.log(letter);
		if ( !B.hasOwnProperty(letter) || B[letter] != A[letter] ) {
			return false;
		}
	}

	return true;
}

var strA = 'ABCDEFGHIJKA';
var strB = 'BAACDFEGHIKJ';
var strC = 'BACDFE';
var strD = 'BACDFEGHILJ';

console.log(isPerm(strA,strB));
console.log(isPerm(strC,strB));
console.log(isPerm(strA,strD));
console.log(isPerm(strA,0));


// Alternate solution is to sort the arrays.

/*
Like in many questions, we should confirm some details with our interviewer. We should understand if the anagram comparison is case sensitive.That is, is God an anagram of dog? Additionally, we should ask if whitespace is significant.
We will assume for this problem that the comparison is case sensitive and whitespace is significant. So, "god " is different from "dog".*/