/* 

3.4

In the classic problem of the Towers of Hanoi, you have 3 towers and Ndisks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one). You have the following constraints:
(1) Only one disk can be moved at a time.
(2) A disk is slid off the top of one tower onto the next tower.
(3) A disk can only be placed on top of a larger disk.
Write a program to move the disksfrom the first tower to the last using stacks.

*/


var Stack = require('./stacks');

function createTowers(disks) {

	var towers = new Array(3);

	for(var i = 0; i < 3; i++) {
		towers[i] = new Tower(i);
	}
	/*
	for(var i = 3; i > 0; i--) {
		towers[0].disks.push(i*5); // 5, 10. 15
	}
	*/
	towers.print = function() {
		var print = new Array(towers.length);
		
		for(var i = 0; i < towers.length; i++) {
			var top = towers[i].disks.top;
			print[i] = top ? top.data : 'BASE';
		}

		return console.log(print);
	}

	return towers;
}

function Tower(i) {

	var self = this;

	self.disks = new Stack();
	self.index = i + 1;


	self.isEmpty = function() {
		if (self.disks.top === null) {
			return true;
		}
		return false;
	}

	self.add = function(d) {
		if(!self.isEmpty() && self.disks.peek() <= d) {
			console.error(new Error("Moved disk " + top + " from Tower " + self.index + " to Tower " + t.index));
		} 
		else {
			self.disks.push(d);
		}
	}

	self.moveTopTo = function(t) {
		top = self.disks.pop();
		t.add(top);
		console.log("Moved disk " + top + " from Tower " + self.index + " to Tower " + t.index);		
	}

	self.moveDisks = function(n, destination, buffer) {
		// Starts with the bottom disk
		// But first move is the top disk, and the recursively
		// moves down to the initial call, which is the bottom.
		if (n > 0) {
			self.moveDisks(n - 1, buffer, destination); // Move disk above to buffer, then ->
			self.moveTopTo(destination); // Move disk to destination, then ->
			buffer.moveDisks(n - 1, destination, self); // Move disk in buffer to destination
		}
	}
}

function moveHanoi(num_of_disks) {
	var n = num_of_disks;
	var towers = new createTowers(n);
	for(var i = n; i > 0; i--) {
		towers[0].add(i);
	}
	console.log(towers[2].isEmpty());
	towers.print();
	towers[0].moveDisks(n, towers[2], towers[1]);
	towers.print();
}


moveHanoi(5);
