'use strict';

function probs(num) {
	let result = 0;
	result += Math.pow(num,2); // Y, Y
	result += Math.pow(num,2) * Math.pow(1-num,1); // N, Y, Y
	result += Math.pow(num,2) * Math.pow(1-num,1); // Y, N, Y
	//result += Math.pow(num,3) * Math.pow(1-num,0); // Y, Y, Y
	return result;

}

for(let i = 0; i < 1; i += 0.1) {
	let result = i.toFixed(2) + " : " + probs(i).toFixed(2);
	console.log(result);
}