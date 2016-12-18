/*

9.6 Implement an algorithm to print all valid 
(i.e., properly opened and closed) combinations of 
n-pairs of parentheses.

*/

'use strict';

function recPar(n) {
	if (n === 1) return ["()"];
	let set = recPar(n - 1);
	let new_set = [];
	for (const item of set) {
		const W = "(" + item + ")";
		const L = "()" + item;
		const R = item + "()";
		if(L === R) new_set.push(W,L);
		else new_set.push(W,L,R);
	} 
	return new_set;
	return new_set.filter((value,index,array) => array.indexOf(value) == index);
}

function recPar2(n) {
	if (n === 1) return ["()"];
	let set = recPar(n - 1);
	let new_set = [];
	for (const item of set) {
		const W = "(" + item + ")";
		const L = "()" + item;
		new_set.push(W,L,R);
	}
	new_set.pop();
	//return new_set;
	return new_set.filter((value,index,array) => array.indexOf(value) == index);
}

var assert = require('assert');


describe('Chapter 9: Question 6', function() {

	var tests = [
	    {args: 1, expected: ["()"]},
	    {args: 2, expected: ["(())","()()"]},
	    {args: 3, expected: [ '((()))', '()(())', '(())()', '(()())', '()()()' ]},
	    {args: 4, expected: "Pass"},
	  ];

	describe('Recursive Solution 1', function() {

		tests.forEach(function(test) {
			it("n = " + test.args.toString() + " => " + test.expected, function() {
			  if(test.expected != "Pass") {
			  	assert.deepEqual(recPar(test.args), test.expected);
			  }
			});

			it("No Dupes", function() {
				let hash = {};
				let result = recPar(test.args);
				console.log(result);

				for(const item of result) {
					if(hash[item]) {
						throw new Error(item);
					}
					hash[item] = true;
				}
			});
		});
	});

});