// Q1.8.js

/* 

Assume you have a method isSubstring which 
checks if one word is asubstring of another. 
Given two strings, si and s2, write code to 
check Ifs2 isa rotation of si using only 
onecalltoisSubstring (e.g., "waterbottLe" is 
a rotation of "erbot- tLewat").

*/

function isRotation(s1, s2) {
	var j = 0, end = 0;

	if(s1.length != s2.length || s1.length <= 1 ) return false;

	for ( var i = 0; i < s1.length; i++ ) {
		
		end = j > 0 ? j : 0;
		if( s1[i] == s2[j] ) j++;
		else j = 0;
	}

	return s1 == s2.slice(end + 1) + s2.slice(0, end + 1);
}

// Better solution:

function betterSolution(s1, s2) {
	
	var s1s1 = s1 + s1;

	if(s1.length != s2.length || s1.length <= 1 ) return false;
	//else return isSubstring(s1s1, s2);
	else return s1s1.includes(s2);
}


console.log(isRotation("waterbottle","bottlewater")); // True
console.log(isRotation("waterbottle","ewaterbottl")); // True
console.log(isRotation("waterbottle","aterbottlew")); // True
console.log(isRotation("waterbottle","aterbostlew")); // False
console.log(isRotation("waterbottle","aterbow")); // False

console.log('');

console.log(betterSolution("waterbottle","bottlewater")); // True
console.log(betterSolution("waterbottle","ewaterbottl")); // True
console.log(betterSolution("waterbottle","aterbottlew")); // True
console.log(betterSolution("waterbottle","aterbostlew")); // False
console.log(betterSolution("waterbottle","aterbow")); // False