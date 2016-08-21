/*
Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/*
function rotateMatrix(matrix) {

	var min = 0;
	var max = matrix.length - 1;

	
	while (min < max ) {

		var temp1 = [];
		var temp2 = [];

		for (var i = min; i < max; i++) {

			// Top
			temp1 = matrix[i][max];
			matrix[i][max] = matrix[min][i];
			
			// Right
			temp2 = matrix[max][max - i + min] // Can only reach the max if you add back the min to i
			matrix[max][max - i + min] = temp1;

			// Bottom
			temp1 = matrix[max - i + min][min];
			matrix[max - i + min][min] = temp2;

			// Left
			matrix[min][i] = temp1;

		}

		min++;
		max--;

	}
	

	return matrix;
}*/

// More efficient
function rotateMatrix(matrix) {

	var min = 0;
	var max = matrix.length - 1;

	
	while (min < max ) {

		var top = [];

		for (var i = min; i < max; i++) {

			
			top = matrix[min][i];

			//  Left -> Top
			matrix[min][i] = matrix[max - i + min][min];
			
			// Bottom -> Left
			matrix[max - i + min][min] = matrix[max][max - i + min];

			// Right -> Bottom
			matrix[max][max - i + min] = matrix[i][max];

			// Top -> Right
			matrix[i][max] = top;

		}

		min++;
		max--;

	}
	

	return matrix;
}


console.log(rotateMatrix([
	["1","2"],
	["3","4"]
	]));

console.log(rotateMatrix([
	["1","2","3"],
	["4","5","6"],
	["7","8","9"]
	]));

console.log(rotateMatrix([
	["1","2","3","4"],
	["5","6","7","8"],
	["9","10","11","12"],
	["13","14","15","16"],
	]));

console.log(rotateMatrix([
	["1","2","3","4","A"],
	["5","6","7","8","B"],
	["9","10","11","12","C"],
	["13","14","15","16","D"],
	["17","18","19","20","E"],
	]));