/*

1.2 Implement a function void reverse(char* str) 
in C or C++ which reverses a null- terminated string.

*/


// In JS

function reverseStr(str) {
	var end = 0;
	str = str.split('');
	str.push(null);
	console.log(str);

	for ( var i = 0; i < Infinity; i++ ) {
		if (str[i] === undefined ) {
			end = i - 1;
			console.log(end);
			break;
		}
	}
	for ( var start = 0; end > start; start++, end-- ) {
		var temp = str[start];
		str[start] = str[end];
		str[end] = temp;
	}

	return str.join('');
}

console.log(reverseStr("abcde"));
