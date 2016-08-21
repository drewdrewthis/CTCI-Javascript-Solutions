var linked = require('./Linked_list_library');
var Node = linked.Node;

function Stack() {
	
	this.top = null;

	this.pop = function() {
		if (this.top) {
			var item = this.top.data;
			this.top = this.top.next;
			return item;
		}
		return null;
	}

	this.push = function(item) {
		var t = new Node(item);
		t.next = this.top;
		this.top = t;
	}

	this.peek = function() {
		return this.top.data;
	}
}

module.exports = Stack;