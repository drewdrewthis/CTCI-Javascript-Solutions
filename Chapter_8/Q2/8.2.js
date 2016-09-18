'use strict';

function Call(dur) {
	this.duration = dur;
}

function Rep(name, title) {
	this.name = name;
	this.title = title;
}

function CallCenter(respondents, managers, directors) {
	var self = this;

	this.respondents = {
		avail: respondents || [],
		busy: [],
		center: self
	}

	this.managers = {
		avail: managers || [],
		busy: [],
		center: self
	}

	this.directors = {
		avail: directors || [],
		busy: [],
		center: self
	}

	this.call_history = [];

	this.call_counter = 0;

	this.messages = [];

	this.extendCallClass = function(call) {
		call.id = ++self.call_counter;
		call.startCall = function(callback,params) {
			var self = this;
			return (function(params) {
				console.log("Call #" + params[2].id + " started.");
				return setTimeout(() => callback.apply(this, params), self.duration);
			})(params);
		}

		return call;
	}

	this.dispatchCall = function(call) {
		call = self.extendCallClass(call);
		if(self.respondents.avail.length) return self.assignCall(call, 'respondents'); 
		if(self.managers.avail.length) return self.assignCall(call, 'managers'); 
		if(self.directors.avail.length) return self.assignCall(call, 'directors'); 
		return self.leaveMessage(call);
	}

	this.assignCall = function(call, employee_type) {
		let group = self[employee_type];
		let rep = group.avail.pop();
		group.busy.push(rep);
		self.call_history.push(call);
		console.log('Call assigned to ' + rep.title + ' ' + rep.name);
		return call.startCall(self.endCall, [rep, group, call]);
	}

	this.endCall = function(rep, group, call) {
		group.busy = group.busy.filter( p => p !== rep);
		group.avail.unshift(rep);
		self.calls = self.call_history.filter(c => c.id !== call.id);
		console.log('Call #' + call.id + ' completed');
	}

	this.leaveMessage = function(call) {
		self.messages.push(call);
		console.log('Sorry, no more available representatives..');
		console.log('Call #' + call.id + ' sent to voicemail');
	}
}

var respondent1 = new Rep('John','respondent');
var respondent2 = new Rep('Kelly','manager');
var respondent3 = new Rep('Chris','respondent');

var center = new CallCenter([respondent1, respondent3], [respondent2]);

center.dispatchCall(new Call(1000));
center.dispatchCall(new Call(500));
center.dispatchCall(new Call(1000));
center.dispatchCall(new Call(100));
setTimeout(function() {
	center.dispatchCall(new Call(300));
}, 1000);