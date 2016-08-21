/*
Implement a method to perform basic string compression 
using the counts of repeated characters. 

For example, the string aabcccccaaa would become a2blc5a3. 
If the "compressed" string would not become smaller than the 
original string, your method should return the original string.
*/


"use strict;"


function strCompression(str) {
	var newStr = "";
	var count = 1;
	var char = str[0];
	var i = 1;

	while (i < str.length) {
		if (str[i] == char) {
			count++;
			i++;
		}
		else {
			newStr += char + count;
			char = str[i];
			count = 0;
		}

	}

	newStr += char + count;

	return newStr.length < str.length ? newStr : str;
}

// With Buffer

function bufferCompression(str) {
	var newStr = [];
	var count = 1;
	var char = str[0];
	var i = 1;

	while (i < str.length) {
		if (str[i] == char) {
			count++;
			i++;
		}
		else {
			newStr.push(char);
			newStr.push(count);
			char = str[i];
			count = 0;
		}

	}

	newStr.push(char);
	newStr.push(count);

	return newStr.length < str.length ? newStr.join('') : str;
}

// With char count
function setSpaceCompression(str) {
	var newStr = [];
	var count = 1;
	var char = str[0];
	var c = 1;
	var uniques = 0;
	var u = 0;

	for (var i = 1, last = str[0]; i < str.length; i++) {
		if(str[i] != last) {
			uniques++;
		}
		last = str[i];
	}

	newStr.length = uniques * 2;

	while (c < str.length) {
		if (str[c] == char) {
			count++;
			c++;
		}
		else {
			newStr[u] = char;
			newStr[++u] = count;
			char = str[c];
			count = 0;
			u++;
		}

	}

	newStr[++u] = char;
	newStr[++u] = count;

	return newStr.length < str.length ? newStr.join('') : str;
}

console.time("Reg");
console.log(strCompression("aaaabbbbbccccddeccc"));
console.log(strCompression("a"));
console.log(strCompression("aabbce"));
console.timeEnd("Reg");
// Reg: 2.926ms

console.log(' ');

console.time("Buffer");
console.log(bufferCompression("aaaabbbbbccccddeccc"));
console.log(bufferCompression("a"));
console.log(bufferCompression("aabbce"));
console.timeEnd("Buffer");
// Buffer: 0.341ms

console.log(' ');

console.time("Set Space");
console.log(setSpaceCompression("aaaabbbbbccccddeccc"));
console.log(setSpaceCompression("a"));
console.log(setSpaceCompression("aabbce"));
console.timeEnd("Set Space");
// Buffer: 0.341ms