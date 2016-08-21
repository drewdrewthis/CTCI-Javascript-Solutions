
function loopStack(stack, len) {

	if(stack[0].length === len ) {
		return stack;
	}

	var item = stack.pop();

	for(var i = 0; i < stack.length - 1; i++) {
		stack[i] = stack[i].splice('');
		for(var j = 0; j < stack[i].length - 1; j++) {
			stack[i].splice(j,0,item);
		}
		stack[i].join('');
	}

	return stack;

}

function perm(str) {
	return loopStack(str.splice('').reverse(), str.length);
}