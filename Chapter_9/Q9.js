/*

9.9 Write an algorithm to prim all ways of arranging eight 
queens on an 8x8 chess board so that none of them share the 
same row, column or diagonal. In this case, "diagonal" means 
all diagonals, not just the two that bisect the board.

*/

'use strict';

// Helper functions


function markRow(board, row) {
    for (let i = 0; i < board[row].length; i++) {
        board[row][i] = true;
    }
    return board;
}

function markCol(board, col) {
    for (let i = 0; i < board.length; i++) {
        board[i][col] = true;
    }
    return board;
}

function markDiag(board, row, col) {
    //Forward Down
    for (let r = row, c = col; r < board.length && c < board[r].length; r++, c++) {
        board[r][c] = true;
    }
    //Forward Up
    for (let r = row, c = col; r >= 0 && c < board[r].length; r--, c++) {
        board[r][c] = true;
    }
    //Backward Down
    for (let r = row, c = col; r < board.length && c >= 0; r++, c--) {
        board[r][c] = true;
    }
    //Backward Up
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
        board[r][c] = true;
    }
    return board;
}

function markAll(board, coord, row, col) {

    board = markRow(board, row);
    board = markCol(board, col);
    board = markDiag(board, row, col);
    board[row][col] = "Quen";
    console.log(board);
    return board;
}

function perm(board, n) {
    if (n === 0) return 1;
    let row = n - 1;
    let sum = 0;
    console.log(board[row][0])
    for (const col of board[row]) {
        if (!col) { // if null
        	markAll(board[row][col]);
            sum += perm(board, n - 1);
        }
    }
    return sum;
}

function Board(n) {
    this.board = new Array(n);
    for (let i = 0; i < this.board.length; i++) {
        this.board[i] = new Array(n).fill(null);
    }
}

let board = new Board(8);

//console.log(board);
console.log(perm(board, 8));
//console.log(board);
