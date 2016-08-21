/*

1.1 Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

*/

// Using an object to store
function checkDupes(str) {
	var chars = {};
	for ( var i = 0; i < str.length; i++ ) {
		if ( chars[str[i]] ) {
			return false;
		}
		chars[str[i]] = true;
	}

	return true;
}

// Using an array to store
function checkDupesArr(str) {
	// 256 is only important for a large str input, I think. 
	// Otherwise it would probaby be more efficient to 
	// just change the str length on the fly

	var char_arr = new Array(256); 
	if (str.length > 256) return false;
	for ( var i = 0; i < str.length; i++ ) {
		if ( char_arr[str.charCodeAt(i)] ) {
			return false;
		}
		char_arr[str.charCodeAt(i)] = true;
	}

	return true;
}

/*
console.log(checkDupes("abced")); // True
console.log(checkDupes("abcced")); // False

console.log(checkDupesArr("abced")); // True
console.log(checkDupesArr("abcced")); // False
*/

// Using a Bitvector 


function bitFunc(str) { // This is brilliant;

	// return 37 << 3 == 37 * Math.pow(2,shiftAmt) && 37 << 3  == 37 * 8;

	//return -8 >> 2 // (-8 / 2^shiftAmt)
	var checker = 0;

	for (var i = 0; i < str.length; i++) {
		var val = str.charCodeAt(i) - 'a'.charCodeAt(0);
		console.log(str.charCodeAt(i) + " " + 'a'.charCodeAt(0));
		console.log(val);
		console.log((checker & (1 << val)).toString(2));
		if ((checker & (1 << val)) > 0) {
			//console.log((checker & (1 << val)).toString(2));
			return false;

		}
		checker |= (1 << val);
		//console.log(checker.toString(2));
	}
	//console.log((999999999999999999999999999999999).toString(2));
	
	return true;


}

console.log(bitFunc("abcdefghijklmnopqrstuvwxyz")); // True
console.log(bitFunc("123Zrabcdefghijklmnopqrs")); // Fals