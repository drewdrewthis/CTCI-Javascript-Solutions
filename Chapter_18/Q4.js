'use strict';

module.exports = function(n, place) {
	var count = 0;
	place = place || 0;
	if (n < 2) return 0;
	else {
		let first_digit = n % 10, second_digit;
		place++;
		if (first_digit >= 2) {
			count++;
		}
		n = Math.floor(n/10);
		second_digit = n % 10;
		if (second_digit > 2) {
			count += 10 * place + second_digit;
		} else if (second_digit === 2){
			count += place * first_digit;
		} else {
			count++;
		}
	}
	return count + count2s(n, place);
};