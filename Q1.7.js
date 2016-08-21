// Q.1.7
// Write an algorithm such that if an element in an MxN matrix is 0, 
//its entire row and column are set to 0.

/*
function checkAndSet(matrix) {
	var M = matrix.length,
		N = matrix[0].length;

	var zeroSet = [];

	for (var r = 0; r < M; r++) {
		for (var c = 0; c < N; c++) {
			if (matrix[r][c] === "0") {
				zeroSet.push([r,c]);
			}
		}
	}

	zeroSet.forEach(function(coord) {
		console.log(coord);
		setZeros(matrix, coord[0], coord[1]);
	});

	return matrix;
}

function setZeros(matrix, r, c) {
	var M = matrix.length,
		N = matrix[0].length;
		len = (M > N) ? M : N;

	for( var i = 0; i < len; i++) {
		if (matrix[r] && matrix[r][i]) matrix[r][i] = 0;
		if (matrix[i] && matrix[i][c]) matrix[i][c] = 0;
	}

	return matrix;
}*/

// More efficient
function checkAndSet(matrix) {
	var M = matrix.length,
		N = matrix[0].length,
		row = new Array(N),
		col = new Array(M);

	var bitVectorRow = 0;
	var bitVectorCol = 0;

	for (var r = 0; r < M; r++) {
		for (var c = 0; c < N; c++) {
			if (matrix[r][c] === "0") {
				row[r] = true;
				col[c] = true;

				bitVectorRow |= (1 << r);
				bitVectorCol |= (1 << c);
			}
		}
	}

	// console.log((bitVectorRow | (1 << 5)).toString(2));
	console.log(bitVectorRow.toString(2));
	console.log(bitVectorCol.toString(2));

	for (var r = 0; r < M; r++) {
		for (var c = 0; c < N; c++) {
			if ((bitVectorRow >> r & 1) || (bitVectorCol >> c & 1)) {
				matrix[r][c] = "0";
			}
		}
	}

	console.log(matrix)


	//setZeros(matrix, row, col);

	//return matrix;
}

function setZeros(matrix, row, col) {
	var M = matrix.length,
		N = matrix[0].length;
		len = (M > N) ? M : N;

	
	for (var r = 0; r < M; r++) {
		for (var c = 0; c < N; c++) {
			if (row[r] || col[c]) {
				matrix[r][c] = "0";
			}
		}
	}

	return matrix;
}

// How would I do this with a bit vector?
function checkAndSet(matrix) {
	var M = matrix.length,
		N = matrix[0].length,
		row = new Array(N),
		col = new Array(M);

	var bitVectorRow = 0;
	var bitVectorCol = 0;

	for (var r = 0; r < M; r++) {
		for (var c = 0; c < N; c++) {
			if (matrix[r][c] === "0") {
				row[r] = true;
				col[c] = true;

				bitVectorRow |= (1 << r);
				bitVectorCol |= (1 << c);
			}
		}
	}

	// console.log((bitVectorRow | (1 << 5)).toString(2));
	console.log(bitVectorRow.toString(2));
	console.log(bitVectorCol.toString(2));

	for (var r = 0; r < M; r++) {
		for (var c = 0; c < N; c++) {
			if ((bitVectorRow >> r & 1) || (bitVectorCol >> c & 1)) {
				matrix[r][c] = "0";
			}
		}
	}

	console.log(matrix)

	//setZeros(matrix, row, col);
	//return matrix;
}


console.log(checkAndSet([
	["1","2","0","4","A"],
	["5","6","7","8","B"],
	["9","10","11","12","C"],
	["13","14","15","16","D"],
	["17","18","19","0","E"],
	]));


