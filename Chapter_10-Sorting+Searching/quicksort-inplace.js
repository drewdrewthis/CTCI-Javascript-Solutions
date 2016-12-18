'use strict';

/*

Mathematical analysis of quicksort shows that, 
on average, the algorithm takes O(n log n) comparisons 
to sort n items. In the worst case, it makes O(n2) 
comparisons, though this behavior is rare.

*/

// In place

var quickSort = function() {

    function swap(left, right) {

        let arr = this;

        let tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;

        console.log('Swap','Left: ', left, ' Right: ', right);
        console.log('Array: ', arr);
    }

    function partition(left, pivot) {

        let arr = this;

        let right = pivot - 1;

        while (left < right) {

            while (arr[left] < arr[pivot] && left < right) left++;
            while (arr[right] > arr[pivot] && left < right) right--;

            if (arr[left] > arr[right]) {
            	console.log('Pivot: ', pivot);
                swap.apply(arr, [left, right]);
                left++;
                right--;
            }
        }

        if (arr[left] > arr[pivot]) {
        	console.log('Final Pivot: ', pivot, "Left:", left);
            swap.apply(arr, [left, pivot]);
        }

        return left;
    }

    var qSort = function(left, right) {

        let arr = this;

        let pivot = partition.apply(arr, [left, right]);

        if (left < pivot) {
            qSort.apply(arr, [left, pivot]);
        }
        if (pivot + 1 < right) {
            qSort.apply(arr, [pivot + 1, right]);
        }
    }

    qSort.apply(this, [0, this.length - 1]);
}

var a = [400, 3, 1, 2, 15, 44, 23, 12, 14, 16, 74, 65, 89, 1];

Object.defineProperty(Array.prototype, 'quickSort', {
    value: quickSort
});
console.log('Unsorted Array: ', a);
a.quickSort();
console.log('Sorted Array: ', a);
