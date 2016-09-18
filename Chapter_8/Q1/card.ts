export class Card {
	type: string;
	number: number;
	isAce = function() {
		if (this.number === 1) {
			return true;
		}
		return false;
	}
	isKing = function() {
		if (this.number === 13) {
			return true;
		}
		return false;
	}
	isQueen = function() {
		if (this.number === 12) {
			return true;
		}
		return false;
	}
	isJack = function() {
		if (this.number === 11) {
			return true;
		}
		return false;
	}
	printCard = function() {
		let face = this.number;
		if (this.isAce()) {
			face = "Ace";
		} else if (this.isKing()) {
			face = "King";
		} else if (this.isQueen()) {
			face = "Queen";
		} else if (this.isJack()) {
			face = "Jack";
		}
		console.log(face + " of " + this.type + "s");
	}
}