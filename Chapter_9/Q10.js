/*

9.10 You have a stack of n boxes, with widths w., heights l\ and depths d r 
The boxes cannot be rotated and can only be stacked on top of one another if 
each box in the stack is strictly larger than the box above it in width, 
height, and depth. Implement a method to build the tallest stack possible, 
where the height of a stack is the sum of the heights of each box.

*/

'use strict';

function Box(h,w,d,id) {
	this.h = h;
	this.w = w;
	this.d = d;
	this.id = "Box " + id;
}

function compareBoxes(boxA, boxB) {
	if(!boxA || !boxB) return false;
    if (boxA.h > boxB.h &&
        boxA.w > boxB.w &&
        boxA.d > boxB.d) return true;

    return false;
}

function compareHeights(setA, setB) {
	let A = setA.length ? setA.reduce((sum, cur) => sum += cur.h, 0) : 0;
	let B = setB.length ? setB.reduce((sum, cur) => sum += cur.h, 0) : 0;

	if (A > B) return setA;
	return setB;
}

// Could potentially make this more efficient with dynamic programming
// Once you figure out which boxes stack on which, instead of using the
// remaining_boxes, you could use fitting_boxes, which you'd store in a hash
// from the first round.


function stack(boxes) {
    if (boxes.length == 1) return boxes;
    let maxset = [];
    for (const box of boxes) {
        let remaining_boxes = boxes.filter((b) => b != box);
        let set = stack(remaining_boxes);
        if (compareBoxes(box, set[0])) {
            set = [box].concat(set);
        }
        maxset = compareHeights(set, maxset);
    }
    //console.log(maxset);
    return maxset;
}

var BOXES = [];

BOXES.push(new Box(1,1,1,1)),
BOXES.push(new Box(3,4,2,2)),
BOXES.push(new Box(4,6,1,3)),
BOXES.push(new Box(10,5,3,4)),
BOXES.push(new Box(7,16,10,5));

let set1 = [ BOXES[0] ];
let set2 = [ BOXES[1], BOXES[0] ];
let set3 = [ BOXES[0], BOXES[1], BOXES[2] ];
let set4 = [ BOXES[0], BOXES[1], BOXES[2], BOXES[3]];
let set5 = [ BOXES[0], BOXES[1], BOXES[2], BOXES[3], BOXES[4]];

/*
console.log(stack(set1).map((item) => [item.id,"Height: " + item.h]));
console.log(stack(set2).map((item) => [item.id,"Height: " + item.h]));
console.log(stack(set3).map((item) => [item.id,"H: " + item.h]));
*/

console.log(stack(set5).map((item) => [item.id,"Height: " + item.h]));



/*
var assert = require('assert');

describe('Chapter 9: Question 10', function() {

	var BOXES = [];

	BOXES.push(new Box(1,1,1,1)),
	BOXES.push(new Box(3,4,2,2)),
	BOXES.push(new Box(5,6,3,3)),
	BOXES.push(new Box(1,3,2,4)),
	BOXES.push(new Box(7,16,10,5));

    describe('CompareBoxes', function() {

    	let tests = [
    	    { args: [BOXES[0], BOXES[1]], expected: false},
    	    { args: [BOXES[1], BOXES[0]], expected: true }
    	];

        tests.forEach(function(test) {
            it(test.expected.toString(), function() {
            	assert.deepEqual(compareBoxes(test.args[0],test.args[1]), test.expected);
            });
        })
    });

    describe('CompareHeights', function() {

    	let tests = [
    	    { args: [
    	    	[ 
    	    		BOXES[0],
	    		  	BOXES[1],
	    		  	BOXES[2]
	    		],
	    		[
	    		  	BOXES[4]
	    		]
	    	  ], 
    	      expected: [
    	      		BOXES[0],
    	      		BOXES[1],
    	      		BOXES[2]
    	      	]
    	  	},
    	    { args: [
    	    	[ 
    	    		BOXES[2],
    	    	  	BOXES[3]
    	    	],
    	    	[ 	
    	    		BOXES[2] 
    	    	]
    	      ], 
    	      expected: [ 
    	      	BOXES[2],
    	    	BOXES[3]
    	    	] 
    	    }
    	];

        tests.forEach(function(test) {
            it("First", function() {
            	assert.deepEqual(compareHeights(test.args[0],test.args[1]), test.expected);
            });
        })
    });

    describe('BoxStack', function() {

    	let set1 = [ BOXES[0] ];
    	let set2 = [ BOXES[0], BOXES[1] ];
    	let set3 = [ BOXES[0], BOXES[1], BOXES[2] ];
    	let set4 = [ BOXES[0], BOXES[1], BOXES[2] ];

    	let tests = [
    	    { args: [set1], expected: ""}
    	];

        tests.forEach(function(test) {
            it("Set1", function() {
            	console.log(stack(test.args[0]));
            });
        })
    });
});

*/