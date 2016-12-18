'use strict';

// 9.5 Write a method to compute all permutations of a string

// Helper function 
function createNewSet(string, letter) {
    let new_perm_set = [];

    for (let i = 0; i <= string.length; i++) {
        let tmp = string.split('');
        tmp.splice(i, 0, letter);
        new_perm_set.push(tmp.join(''));
    }

    return new_perm_set;
}

// Second Helper Function for Iterative approach
function processStrArr(arr, letter) {
    let new_perm_set = [];

    if (!arr.length) return [letter];

    for (const string of arr) {
        new_perm_set = new_perm_set.concat(createNewSet(string, letter));
    }

    return new_perm_set;
}

function iterPerm(string) {
    let letter_arr = string.split('');
    let perms = [""];
    while (letter_arr.length) {
        let letter = letter_arr.pop();
        perms = processStrArr(perms, letter);
    }
    return perms;
}

// ------------

// Recursive 
function recPerm(string, i) {
    /* 
    // If you didn't want to pass i
    let letter = string.slice(0,1);
    string = string.slice(1);
    */
    i = i || 0;
    if (!string[i]) return [""];
    let perms = recPerm(string, i + 1);
    let new_set = [];
    for (const perm of perms) {
        new_set = new_set.concat(createNewSet(perm, string[i]));
    }
    return new_set;
}

var assert = require('assert');

describe('Chapter 9: Question 5', function() {

    var tests = [
        { args: "", expected: [""] },
        { args: "a", expected: ["a"] },
        { args: "ab", expected: ["ab", "ba"] },
        { args: "abc", expected: ['abc', 'bac', 'bca', 'acb', 'cab', 'cba'] }
    ];

    describe('Iterative Solution', function() {

        tests.forEach(function(test) {
            it(test.args + " => " + test.expected, function() {
                assert.deepEqual(iterPerm(test.args), test.expected);
            });
        })
    });

    describe('Recursive Solution', function() {

        tests.forEach(function(test) {
            it(test.args.toString() + " => " + test.expected, function() {
                assert.deepEqual(recPerm(test.args), test.expected);
            });
        })
    });

});
