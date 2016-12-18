'use strict';

function getSubsets(set, index) {
	let allsubsets = [[]];
	index = index || 0;
	if(set[index]) {
		allsubsets = getSubsets(set, index + 1); // [[]]
		const moresubsets = allsubsets.slice(0); // [[]]
		console.log("More");
		console.log(moresubsets);
		for (let i = 0; i < allsubsets.length; i++) {
			allsubsets[i].push(set[index]);
		} // [[1]]
		console.log("More");
		console.log(moresubsets);
		allsubsets = allsubsets.concat(moresubsets); //[[1],[]]
	}
	return allsubsets;
}

console.log(getSubsets([1]));

// I believe that this isn't working be cause there is a data leak between recursions