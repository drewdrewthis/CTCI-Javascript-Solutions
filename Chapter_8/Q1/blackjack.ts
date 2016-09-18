import {Deck} from './deck';
import {Card} from './card';

export class Blackjack {
	deck: Deck;
	hand: {
		cards: Array<Card>;
		total: number;
	}

	constructor() {
		this.init();
	}

	init = function() {
		var self = this;
		self.deck = new Deck();
		self.deck.shuffle();
		self.hand = {
			cards: new Array<Card>(),
			total: 0
		}
	}

	draw = function() {
		this.hand.cards.push(this.deck.cards.pop());
		if (this.isGameOver()) {
			console.log("Game over! Total: " + this.hand.total);
		}
		else {
			this.hand.cards[this.hand.cards.length - 1].printCard();
			console.log("Current total: " + this.hand.total);
		}
	}

	isGameOver = function() {
		this.totalHand();
		if (this.hand.total > 21) {
			return true;
		}
		return false;
	}

	totalHand = function() {
		this.hand.total = this.hand.cards.reduce((sum,curr) => sum + curr.number, 0);
	}

	showHand = function() {
		for (let c in this.hand.cards) {
			this.hand.cards[c].printCard();
		}
	}

	start = function() {
		this.draw();
	}

	restart = function() {
		this.init();
		this.start();
	}
}
