
var Node = function(data) {
	this.data = data;
	this.next = null;
}

function createLL(arr) {

	var head = new Node(arr.shift());
	var end = head;

	while(arr.length > 0){
		end.next = new Node(arr.shift());
		end = end.next;
	}
	
	return head;
}

function printLL(head) {
	process.stdout.write(head.data.toString());
	while(head.next) {
		head = head.next;
		process.stdout.write(' -> ' + head.data);
	}
	process.stdout.write('\n');
}

module.exports = {
	Node: Node,
	create: createLL,
	print: printLL
};