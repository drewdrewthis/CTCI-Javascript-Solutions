/*

https://www.hackerrank.com/challenges/ctci-find-the-running-median

*/

'use strict';

function Heap(type) {
    var heap_array = [];

    this.type = type;

    this.size = 0;
    
    this.getArray = () => heap_array;
    
    this.peekRoot = function() {
        return heap_array[0];
    }
    
    this.getNode = function(index) {
        return heap_array[index];
    }
    
    this.getLeftChildIndex = function(node_index) {
        if(!heap_array[node_index]) return false;
        return 2*node_index + 1;
    }
    
    this.getRightChildIndex = function(node_index) {
        if(!heap_array[node_index]) return false;
        return 2*node_index + 2;
    }
    
    this.getParentIndex = function(node_index) {
        if(!heap_array[node_index]) return false;
        return Math.floor((node_index - 1) / 2);
    }
    
    this.swap = function(index_a,index_b) {
        var tmp = heap_array[index_b];
        heap_array[index_b] = heap_array[index_a];
        heap_array[index_a] = tmp;
    }
    
    this.fixHeapBottomUp = function() {
    	if(heap_array.length < 2) return null;
        for(let i = heap_array.length - 1; i > 0; i--) {
            let node = this.getNode(i);
            let parent_index = this.getParentIndex(i);
            let parent = this.getNode(parent_index);
            if(this.type === 'min') {
            	if(node < parent) {
            	    this.swap(i,parent_index);
            	}
            }
            if(this.type === 'max') {
            	if(node > parent) {
            	    this.swap(i,parent_index);
            	}
            }
        }
    }

    this.fixHeapTopDown = function() {
    	if(heap_array.length < 2) return null;
        for(let i = 0; i < heap_array.length; i++) {
            let node = this.getNode(i);
            let left_child_index = this.getLeftChildIndex(i);
            let left_child = this.getNode(left_child_index);
            if(this.type === 'min') {
            	if(node < left_child) {
            	    this.swap(i,left_child_index);
            	}
            }
            if(this.type === 'max') {
            	if(node > left_child) {
            	    this.swap(i,left_child_index);
            	}
            }
        }
        this.fixHeapBottomUp();
    }
    
    this.add = function() {
    	for(let item of arguments) {
    		heap_array.push(item);
        	this.fixHeapBottomUp();
        	this.size = heap_array.length;
        }
    }
    
    this.poll = function(num) {
        let first = heap_array.shift();
        let last = heap_array.pop();
        heap_array.unshift(last);
        this.fixHeapTopDown();
        this.size = heap_array.length;
        return first;
    }

    this.emptyHeap = function() {
    	heap_array.length = 0;
    	return heap_array;
    }
}

var median_heap = {
	median: undefined,
	low_heap: new Heap('max'),
	high_heap: new Heap('min'),
	setMedian: function() {
		if (this.low_heap.size > this.high_heap.size) {
			this.median = this.low_heap.peekRoot();
		}
		else {
			let min_root = this.low_heap.peekRoot();
			let max_root = this.high_heap.peekRoot();
			this.median = ((min_root + max_root) / 2);
		}
		return this.median;
	},
	add: function() {
		for(let item of arguments) {

			item = +item; // Makes sure that all items are numbers, not strings

			if (this.median === undefined ||
				this.median > item) 
			{
				this.low_heap.add(item);

			} 
			else {
				this.high_heap.add(item);
			}

			this.balanceHeaps();
			this.setMedian();
			//this.printAll();
			console.log(this.median.toFixed(1));
		}

		return this.median;
	},
	balanceHeaps: function() {

		let dif = this.low_heap.size - this.high_heap.size;

		if (dif === 1 || dif === 0) return null;

		if (dif > 1) {
			// Pop from min into max
			let item = this.low_heap.poll();
			this.high_heap.add(item);
			//console.log('Balance Heaps', item);
		} else if (dif < 0) {
			// Pop from max into min
			let item = this.high_heap.poll();
			this.low_heap.add(item);
		}
		this.balanceHeaps(); // Double check
		
	},
	printAll: function() {
		console.log(this.median.toFixed(1));
		console.log("Low Heap", this.low_heap.getArray());
		console.log("High Heap", this.high_heap.getArray());
	},
	emptyHeaps: function() {
		this.low_heap.emptyHeap();
		this.high_heap.emptyHeap();
		this.median = undefined;
		this.printAll();
	},
	printMedian: function() {
		console.log(this.median.toFixed(1));
	}

}

function main() {
	/*)
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    */
    


    //median_heap.add(5,6,3,2,4,3,12,22,16,14,1,9);
    //median_heap.emptyHeaps();
   	median_heap.add(1,2,3,4,5,6,7,8,9,10);
};

main();
