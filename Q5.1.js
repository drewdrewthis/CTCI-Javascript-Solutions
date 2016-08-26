/*

5.1
You aregiven two 32-bit numbers, Nand M, andtwo bit positions, land j. 
Write a method to insert M into Nsuch that M starts at bit j and ends 
at bit i. You can assume that the bits j through i have enough space to 
fit all of M. That is, if M = 10011, you canassumethat there areat least 
5 bits between j and i. 

You would not,forexample, have j = 3 and i = 2,because M could notfully 
fit between bit 3 and bit 2.

EXAMPLE
Input: N=10000000000,
M=10011,
i=2,
j=6 
Output:N = 10001001100

*/


function bitCombine(M,N,i,j) {

	var mL = 0;
	var m = M;

	while(m > 0) {
		m = m >> 1;
		mL++;
	}

	return ( ~(( 1 << mL ) - 1 ) << ( j - (mL - 1)) & N ) | ( M << ( j - (mL - 1)));
	// With this algorithm, j - i can be longer than M and it will still work
	// This method assumes M is of unknown length, which makes i irrelevant.
}

var N = parseInt('10000000000', 2);
var M = parseInt('10011', 2);

var ans = bitCombine(M, N, 2, 6);

console.log((ans).toString(2));