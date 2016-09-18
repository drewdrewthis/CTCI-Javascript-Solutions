/*

5.2

Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a 
double, print the binary representation. If the number cannot be represented 
accurately in binary with at most 32 characters, print "ERROR."

*/


// First, I want to write an algoritm that converts non-doubles / floating point


function toBinary(num) {

	var pow = 0;
	var output = [];

	while (num > 0) {
		if(num - Math.pow(2,pow) > 0) {
			output[pow] = 0;
		}
		else if (num - Math.pow(2,pow) === 0) {
			output[pow] = 1;
			console.log(output);
			break;
		}
		else {
			num -= Math.pow(2, --pow);
			console.log(num + " : " + pow);
			output[pow] = 1;
			console.log(output);
			pow = 0;
		}
		pow++;
	}

	return output.reverse().join('');
}

console.log(toBinary(38));