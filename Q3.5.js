

/* 

3.5

Implement a MyQueue class which implements a queue using two stacks.

*/


var Stack = require('./stacks');

function MyQueue() {

	var self = this;

	self.FIFO = new Stack();
	self.LIFO = new Stack();
	self.counter = 0;

	self.push = function(item) {
		self.FIFO.push(item);
		self.counter++;
		return self.counter;
	}

	//TODO
	// - Create peek method
	// - Create switch stacks method

	self.pop = function() {



		var first;

		// Swap stacks
		while(self.FIFO.peek()) {
			var item = self.FIFO.pop();
			self.LIFO.push(item);
		}

		// Save first
		first = self.LIFO.pop();

		// Reset
		while(self.LIFO.peek()) {
			var item = self.LIFO.pop();
			self.FIFO.push(item);
		}

		self.counter--;
		return first;
	}




}


var my_queue = new MyQueue();

console.log(my_queue.push('A'));
console.log(my_queue.push('B'));
console.log(my_queue.push('C'));
console.log(my_queue.push('D'));
console.log(my_queue.push('E'));

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.push('JOE'));
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());