/* 

3.5

Write a program to sort a stack in ascending order (with biggest items on top). 
You may use at most one additional stack to hold items, but you may not copy 
the elements into any other data structure (such as an array). The stack 
supports the following operations: push, pop, peek, and isEmpty.

*/


var Stack = require('./stacks');

var counter = 0;
function sortStack(stack) {

	var s1 = stack;
	var s2 = new Stack();
	var temp = s1.pop();
	var is_sorted = true;
	
	// Less than
	while(!s1.isEmpty()) {
		if(s1.peek() > temp) {
			s2.push(s1.pop());
			is_sorted = false;
		}
		else {
			s2.push(temp);
			temp = s1.pop();
		}
		counter++;
	}

	s2.push(temp);
	temp = s2.pop();

	while(!s2.isEmpty()) {
		if(s2.peek() < temp) {
			s1.push(s2.pop());
			is_sorted = false;
		}
		else {
			s1.push(temp);
			temp = s2.pop();
		}
		counter++;
	}

	s1.push(temp);

	if(is_sorted) {
		console.log("My answer's efficiency: " + counter);
		counter = 0;
		return s1;
	}
	else {
		return sortStack(s1);
	}
}

function bookAns(s) {
	var r = new Stack();
	while(!s.isEmpty()) {
		var tmp = s.pop();
		while (!r.isEmpty() && r.peek() > tmp) {
			s.push(r.pop());
			counter++;
		}
		r.push(tmp);
	}
	console.log("Book answer's efficiency: " + counter);
	counter = 0;
	return r;
}

var stack = new Stack();
var stack2 = new Stack();
var arr = [3,4,2,1,6,5,10,7,8,11];
var hash = {};
for(var i = 0; i < 20; i++) {
	var num = Math.round(Math.random() * (45 - 1) + 1);
	if (hash[num]) {
		i--;
	}
	else {
		hash[num] = true;
		stack.push(num);
		stack2.push(num);
	}
	
	//stack.push(arr[i]);
}

stack = sortStack(stack);
stack2 = bookAns(stack2);
console.log("\x1b[31m"); // make output red;
stack.print();
stack2.print();
