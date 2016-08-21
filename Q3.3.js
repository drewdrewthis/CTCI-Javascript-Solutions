/* 

3.3

Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
Therefore, in real life, we would likely start a new stack when the previous stack 
xceeds somethreshold. Implement a data structureSetOf Stacks that mimics this. 

SetOf Stacks should be composed of several stacks and should create a new stack 
once the previous one exceeds capacity. SetOf Stacks. push() and SetOf Stacks. 
pop() should behave identically to a single stack (that is,popO should return 
the same values as it would if there were just a single stack).

*/


var Stack = require('./stacks');

function SetOfStacks() {
	var self = this;
	self.set 		= new Array;
	self.max 		= 3;
	self.counter 	= 0;
	self.push = function(item) {
			if (self.counter % self.max === 0) {
				var stack = new Stack;
				stack.push(item);
				self.set.push(stack);
				console.log('New Stack');
			}
			else {
				self.set[self.set.length - 1].push(item);
			}
			self.counter++;
			return self.counter;
		}
	self.pop = function() {
		var item = null;
		try {
			var item = self.set[self.set.length - 1].pop() || null;
		}
		catch(e) {
			var item = null;
		}
		
		if(item) return item;
		else {
			self.set.pop();
			try {
				item = self.set[self.set.length - 1].pop() || null;
			}
			catch(e) {
				item = null;
			}	
		}
		self.counter--;
		return item;
	}
	// Follow up
	self.popAt = function(i) {
		return self.set[i].pop();
	}

}

var set = new SetOfStacks();
console.log(set.push(1));
console.log(set.push(3));
console.log(set.push(4));
console.log(set.push(5));
console.log(set.popAt(0)); // 3
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
