/*

3.7

An animal shelter holds only dogs and cats, and operates on a strictly 
"first in, first out" basis. People must adopt either the "oldest" 
(based on arrival time) of all animals at the shelter, or they can select 
whether they would prefer a dog or a cat (and will receive the oldest animal 
of that type). They cannot select which specificanimal they would like. 

Create the data structures to maintain this system and implement operations 
such as enqueue, dequeueAny, dequeueDog and dequeueCat.You mayusethe built-in 
LinkedList data structure.ch that all nodes less than x come before all nodes 
greater than or equal to x.

*/

'use strict;'

var linked = require('./Linked_list_library');
var Node = linked.Node;

function AnimalShelter() {

	// Lookup/Modify Time: O(1) Space: O(N)

	var self = this;
	var counter = 0;
	var heads = {}; 
	// When working with linked lists in JS, 
	// we have to keep track of the head separately.

	self.enqueue = function(animal_type) {

		if(self[animal_type]) {
			self[animal_type].next = new Node(++counter);
			self[animal_type] = self[animal_type].next;
		}
		else {
			self[animal_type] = new Node(++counter);
			heads[animal_type] = self[animal_type];
		}

		console.log("--> Enqueued " + animal_type + " - ID# " + counter);
	}

	self.isOut = function(animal_type) {
		if(!heads[animal_type] || !heads[animal_type].data) {
			return true;
		}
		else {
			return false;
		}
	}

	self.dequeueCat = function() {

		if (self.isOut('cat')) {
			console.log("X - No more cats");
			return null;
		}

		var cat_id = heads['cat'].data;
		heads['cat'] = heads['cat'].next;
		console.log("Dequeued cat - ID# " + cat_id);
	}

	self.dequeueDog = function() {

		if (self.isOut('dog')) {
			console.log("X - No more dogs");
			return null;
		}

		var dog_id = heads['dog'].data;
		//console.log(self['dog'].data + " --- " + self['dog'].next.data)
		heads['dog'] = heads['dog'].next;
		console.log("Dequeued dog - ID# " + dog_id);
	}

	self.dequeueAny = function() {

		if(self.isOut('cat') && self.isOut('dog')) {
			return console.log("Oh no! We're out of pets"); 
		}

		if (self.isOut('dog') || self['cat'].data < self['dog'].data) {
			self.dequeueCat();
		}
		else {
			self.dequeueDog();
		}
	}
}

var shelter = new AnimalShelter();



shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('dog');

shelter.dequeueCat();
shelter.dequeueDog();
shelter.dequeueAny();
shelter.dequeueDog();
shelter.dequeueDog();
shelter.dequeueDog();
shelter.dequeueDog();
shelter.dequeueAny();
shelter.dequeueCat();
shelter.dequeueAny();

console.log(shelter instanceof AnimalShelter);
