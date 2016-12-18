/*

9.7 Implement the "paint fill" function that one 
might see on many image editing programs. That is,
given a screen (represented by a two-dimensional array of colors), 
a point, and a new color, fill in the surrounding area until the color 
changes from the original color.

*/

'use strict';

function fill(matrix, point, new_color, old_color) {

    let y = point[0];
    let x = point[1];
    /*
    //Includes diagonal adjacencies
    let eight = [
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 1, y],
        [x + 1, y - 1],
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y]
    ];
    */
    let adj = [
        [x, y + 1],
        [x + 1, y],
        [x, y - 1],
        [x - 1, y]
    ]

    old_color = old_color || matrix[x][y];
    matrix[x][y] = new_color;

    for (const px of adj) {
        if (matrix[px[0]] &&
            matrix[px[0]][px[1]] &&
            matrix[px[0]][px[1]] === old_color) {

            matrix[px[0]][px[1]] = new_color;
            fill(matrix, [px[0], px[1]], new_color, old_color);
        }
    }

    /*
    if(matrix[x-1] && matrix[x-1][y-1] != color) {
    	matrix[x-1][y-1] = color;
    	fill(matrix,color,[x-1,y-1]);
    }
    */

}


var assert = require('assert');

describe('Chapter 9: Question 5', function() {

    let colors = ['GR', 'BL', 'OR'];

    function matrix(num) {
        let arr = new Array(num);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(num)
            for(let j = 0; j < arr[i].length; j++) {
            	arr[i][j] = colors[Math.floor(Math.random() * (3 - 0) + 0)];
            }
        }
        return arr;
    }

    var tests = [
        { args: [matrix(12), [2, 3], 'XX'], expected: '' }
    ];

    describe('Recursive Solution', function() {

        tests.forEach(function(test) {
            it(test.args[2] + " => " + test.expected, function() {
            	console.log(test.args[0])
                fill.apply(this, test.args);
                test.args[0][test.args[1][0]][test.args[1][1]] = 'OO';
                console.log(test.args[0])
            });
        })
    });
});
