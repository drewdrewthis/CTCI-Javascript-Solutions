var linked = require('./Linked_list_library');
var Node = linked.Node;

function Stack() {

  var self = this;

  self.top = null;

  self.pop = function() {
    if (self.top) {
      var item = self.top.data;
      self.top = self.top.next;
      return item;
    }
    return null;
  }

  self.push = function(item) {
    var t = new Node(item);
    t.next = self.top;
    self.top = t;
  }

  self.peek = function() {
    if (self.top) {
      return self.top.data;
    } else {
      return null;
    }
  }

  self.isEmpty = function() {
    if (self.peek()) {
      return false;
    } else {
      return true;
    }
  }

  self.print = function() {
  	process.stdout.write("TOP");
  	while(!self.isEmpty()) {
  		process.stdout.write(" -> " + self.pop());
  	} 
  	process.stdout.write('\n');
  }
}

module.exports = Stack;
