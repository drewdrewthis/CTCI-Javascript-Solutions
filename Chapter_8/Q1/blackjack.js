"use strict";
var deck_1 = require('./deck');
var Blackjack = (function () {
    function Blackjack() {
        this.init = function () {
            var self = this;
            self.deck = new deck_1.Deck();
            self.deck.shuffle();
            self.hand = {
                cards: new Array(),
                total: 0
            };
        };
        this.draw = function () {
            this.hand.cards.push(this.deck.cards.pop());
            if (this.gameOver()) {
                console.log("Game over! Total: " + this.hand.total);
            }
            else {
                this.hand.cards[this.hand.cards.length - 1].printCard();
                console.log("Current total: " + this.hand.total);
            }
        };
        this.gameOver = function () {
            this.totalHand();
            if (this.hand.total > 21) {
                return true;
            }
            return false;
        };
        this.totalHand = function () {
            this.hand.total = this.hand.cards.reduce(function (sum, curr) { return sum + curr.number; }, 0);
        };
        this.showHand = function () {
            for (var c in this.hand.cards) {
                this.hand.cards[c].printCard();
            }
        };
        this.start = function () {
            this.draw();
        };
        this.restart = function () {
            this.init();
            this.start();
        };
        this.init();
    }
    return Blackjack;
}());
exports.Blackjack = Blackjack;
