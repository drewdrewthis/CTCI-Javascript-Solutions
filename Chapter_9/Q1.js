/*

9.1 A child is running up a staircase with n steps, and can hop either 1 step, 
2 steps, or 3 steps at a time. Implement a method to count how many possible 
ways the child can run up the stairs.

*/

'use strict';

function steps(n, start) {
	start = start || 0;
	if(start > n) return 0;
	if(start == n) return 1;
	return 	steps(n, start + 1) +
			steps(n, start + 2) +
			steps(n, start + 3);
}

// Book uses the start from top method:

/*

function steps(n) {
	if(n < 0) return 0;
	if(start == 0) return 1;
	return 	steps(n - 1) +
			steps(n - 2) +
			steps(n - 3);
}

*/

// Space and time complexity log(N^3)


function steps2(n) {
	var start = 0;
	var cache = new Array(n);

	return (function(n, start) {
		if(start > n) return 0;
		if(start == n) return 1;
		if(cache[start]) return cache[start];
		cache[start] = 	steps(n, start + 1) +
						steps(n, start + 2) +
						steps(n, start + 3);
		return cache[start];
	})(n,start);
}

// Space and time complexity log(N)

var assert = require('assert');

describe('Chapter 9: Question 1', function() {
	describe('Recursion Solution', function() {
	    it('1 step should equal 1 possible solutions', function() {
	      console.time('Recursion');
	      assert.equal(steps(1), 1);
	      console.timeEnd('Recursion');
	    });

	    it('2 step should equal 2 possible solutions', function() {
	      console.time('Recursion');
	      assert.equal(steps(2), 2);
	      console.timeEnd('Recursion');
	    });

	    it('3 step should equal 4 possible solutions', function() {
	      console.time('Recursion');
	      assert.equal(steps(3), 4);
	      console.timeEnd('Recursion');
	    });

	    it('4 step should equal 7 possible solutions', function() {
	      console.time('Recursion');
	      assert.equal(steps(4), 7);
	      console.timeEnd('Recursion');
	    });

	    it('20 steps should equal 121415 possible solutions', function() {
	      console.time('Recursion');
	      assert.equal(steps(20), 121415);
	      console.timeEnd('Recursion');
	    });

	});

	describe('DP Solution', function() {
		
	    it('1 step should equal 1 possible solutions', function() {
	      console.time('DP');
	      assert.equal(steps2(1), 1);
	      console.timeEnd('DP');
	    });

	    it('2 step should equal 2 possible solutions', function() {
	      console.time('DP');
	      assert.equal(steps2(2), 2);
	      console.timeEnd('DP');
	    });

	    it('3 step should equal 4 possible solutions', function() {
	      console.time('DP');
	      assert.equal(steps2(3), 4);
	      console.timeEnd('DP');
	    });

	    it('4 step should equal 7 possible solutions', function() {
	      console.time('DP');
	      assert.equal(steps2(4), 7);
	      console.timeEnd('DP');
	    });

	    it('20 steps should equal 121415 possible solutions', function() {
	      console.time('DP');
	      assert.equal(steps2(20), 121415);
	      console.timeEnd('DP');
	    });
	    
	});
});