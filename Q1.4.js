/*Write a method to replace all spaces in a string with'%20'. 
You may assume that the string has sufficient space at the end 
of the string to hold the additional characters, and that you 
are given the "true" length of the string. (Note: if implementing 
in Java, please use a character array so that you can perform 
this operation in place.)

EXAMPLE
Input: "Mr John Smith    "
Output: "Mr%20Dohn%20Smith"
*/

/* I misread this problem. "True length" means that There is just plenty of whitespace
at the end, so you'd have to scan through the string to find out the white space count.
*/


"use strict";

function lastLetterIndex(str) {
	for ( var i = str.length-1; i >= 0 ; i--) {
		if ( str[i] != " ") {
			return i;
		}
	}
	return 0;
}

function replaceSp(str) {
	var end = str.length -1;
	var i = lastLetterIndex(str);
	
	str = str.split("");

	while ( i >= 0 ) {
		if (str[i] === " ") {
			str[end] = "0";
			str[end-1] = "2";
			str[end-2] = "%";
			end = end - 3;
			i--;
		}
		else {
			str[end] = str[i];
			end--;
			i--;
		}
	}

	return str.join("");
}


console.log(replaceSp(" Mr John Smith      "));


//Mr John Smith Smith
//Mr John{ }Sm[i]%20Smith