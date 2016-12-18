'use strict';

/*

Mathematical analysis of quicksort shows that, 
on average, the algorithm takes O(n log n) comparisons 
to sort n items. In the worst case, it makes O(n2) 
comparisons, though this behavior is rare.

*/

// Not in place

function quickSort(arr) {

    if (arr.length < 2) return arr;

    let leftArr = [];
    let rightArr = [];

    let pivot = 0;

    for (let i = 1; i < arr.length; i++) {
    	arr[i] < arr[pivot] ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
    }

    return quickSort(leftArr).concat(arr[pivot], quickSort(rightArr));
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9, 3];


console.log('Sorted Array: ', quickSort(a));


