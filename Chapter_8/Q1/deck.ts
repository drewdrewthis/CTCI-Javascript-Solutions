import {Card} from './card';

export class Deck {
	cards: Array<Card>;
	constructor() {
		var self = this;
		if (self.cards) {
			return this;
		}
		else {
			self.cards = this.createDeck();
		}
	}
	createDeck = function() {
		var deck = new Array<Card>(52);
		var types = new Array<string> ("Club","Heart","Diamond","Spade");
		var i = 0;
		var card: Card;
		for (var t in types) {
			for (var j = 1; j < 14; j++) {
				card = new Card();
				card.type = types[t];
				card.number = j;
				deck[i++] = card;
			}
		}
		return deck;
	}
	shuffle = function() {
		var self = this;
		if (self.cards) {
			var rounds = 52;
			for (var i = 0; i < rounds; i++) {
				let min = 0;
				let max = 51;
				let a = Math.floor(Math.random() * (max - min + 1)) + min;
				let b = Math.floor(Math.random() * (max - min + 1)) + min;
				let tmp = self.cards[a];
				self.cards[a] = self.cards[b];
				self.cards[b] = tmp;
				//console.log("Shuffle " + a + " with " + b);
			}
		}
		else {
			this.cards = this.createDeck();
			this.shuffle();
		}
	}
	printDeck = function() {
		for (let c in this.cards) {
			console.log("Card " + c + ": ");
			this.cards[c].printCard();
		}
	}
}