"use strict";
var card_1 = require('./card');
var Deck = (function () {
    function Deck() {
        this.createDeck = function () {
            var deck = new Array(52);
            var types = new Array("Club", "Heart", "Diamond", "Spade");
            var i = 0;
            var card;
            for (var t in types) {
                for (var j = 1; j < 14; j++) {
                    card = new card_1.Card();
                    card.type = types[t];
                    card.number = j;
                    deck[i++] = card;
                }
            }
            return deck;
        };
        this.shuffle = function () {
            var self = this;
            if (self.cards) {
                var rounds = 52;
                for (var i = 0; i < rounds; i++) {
                    var min = 0;
                    var max = 51;
                    var a = Math.floor(Math.random() * (max - min + 1)) + min;
                    var b = Math.floor(Math.random() * (max - min + 1)) + min;
                    var tmp = self.cards[a];
                    self.cards[a] = self.cards[b];
                    self.cards[b] = tmp;
                }
            }
            else {
                this.cards = this.createDeck();
                this.shuffle();
            }
        };
        this.printDeck = function () {
            for (var c in this.cards) {
                console.log("Card " + c + ": ");
                this.cards[c].printCard();
            }
        };
        var self = this;
        if (self.cards) {
            return this;
        }
        else {
            self.cards = this.createDeck();
        }
    }
    return Deck;
}());
exports.Deck = Deck;
