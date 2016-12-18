/* 
9.3 A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i. 
Given a sorted array of distinct integers, write a method to find a magic index, 
if one exists, in arrayA.

FOLLOW UP
What if the values are not distinct?
*/

'use strict';

function  magic(A) {
	for(let i = 0; i < A.length && A[i] <= i; i++) {
		if(A[i] === i) return i;
	}
	return false;
}

// O(n) <= worst; 
// O(n/2) <= avg;
// O(1) <= best;

function  rec(A,i) {
	i = i || 0;
	if(A[i] === undefined || A[i] > i ) return false;
	if(A[i] === i) return i;
	return rec(A,i + 1);
}

// O(n) <= worst; 
// O(n/2) <= avg;
// O(1) <= best;

function binary(A) {
	let start = 0;
	let end = A.length - 1;
	let mid = 0;
	
	while(start <= end) {
		let mid = Math.round((start + end)/2);
		if(A[mid] > mid) end = mid - 1;
		if(A[mid] === mid) return mid;
		if(A[mid] < mid) start = mid + 1;
	}

	return false;
}

function  magic2(A) {
	for(let i = 0; i < A.length; i++) {
		if(A[i] === i) return i;
	}
	return false;
}

// O(n) <= worst; 
// O(n/2) <= avg;
// O(1) <= best;

function  rec2(A,i) {
	i = i || 0;
	if(A[i] === undefined) return false;
	if(A[i] === i) return i;
	return rec2(A,i + 1);
}

// O(n) <= worst; 
// O(n/2) <= avg;
// O(1) <= best;

function binary2(A) {
	let start = 0;
	let end = A.length - 1;
	let mid = 0;
	
	while(start <= end) {
		let mid = Math.round((start + end)/2);
		//console.log(mid);
		if(A[mid] < mid) end = mid - 1;
		if(A[mid] === mid) return mid;
		if(A[mid] > mid) start = mid + 1;
	}

	return false;
}

// O(log(n)) <= worst; 
// O(log(n/2)) <= avg;
// O(1) <= best;

var assert = require('assert');

describe('Chapter 9: Question 3', function() {

	describe('Distinct Values', function() {

		describe('Iterative Solution', function() {
		    it('[0,1,2,3,4]', function() {
		      assert.equal(magic([0,1,2,3,4]),0);
		    });

		    it('[-100,0,2,7,9] should equal 2', function() {
		      assert.equal(magic([-100,0,2,7,9]),2);
		    });

		    it('[5,7,9] should be false', function() {
		      assert.equal(magic([5,7,9]),false);
		    });
		});

		describe('Recursive Solution', function() {
		    it('[0,1,2,3,4]', function() {
		      assert.equal(rec([0,1,2,3,4]),0);
		    });

		    it('[-100,0,2,7,9] should equal 2', function() {
		      assert.equal(rec([-100,0,2,7,9]),2);
		    });

		    it('[5,7,9] should be false', function() {
		      assert.equal(rec([5,7,9]),false);
		    });
		});

		describe('Binary Solution', function() {
		    it('[0,1,2,3,4]', function() {
		      assert.equal(binary([0,1,2,3,4]),2);
		    });

		    it('[-100,0,1,3,9] should equal 3', function() {
		      assert.equal(binary([-100,0,1,3,9]),3);
		    });

		    it('[5,7,9] should be false', function() {
		      assert.equal(binary([5,7,9]),false);
		    });
		});

	});

	describe('Non-Distinct Values', function() {

		describe('Iterative Solution', function() {
		    it('[3,3,3,3]', function() {
		      assert.equal(magic2([3,3,3,3]),3);
		    });
		});

		describe('Recursive Solution', function() {
		    it('[3,3,3,3]', function() {
		      assert.equal(rec2([3,3,3,3]),3);
		    });
		});

		describe('Binary Solution', function() {
		    it('[3,3,3,3]', function() {
		      assert.equal(binary2([3,3,3,3]),3);
		    });
		});

		describe('Binary Solution', function() {
		    it('[0,0,0,0]', function() {
		      assert.equal(binary2([3,3,3,3]),3);
		    });
		});

		describe('Binary Solution', function() {
		    it('[0,0,3,3]', function() {
		      assert.equal(binary2([3,3,3,3]),3);
		    });
		});

		describe('Binary Solution', function() {
		    it('[1,1,1,1]', function() {
		      assert.equal(binary2([1,1,1,1]),1);
		    });
		});

	});
});

// If array values are not distinct, the limits would have to be adjusted