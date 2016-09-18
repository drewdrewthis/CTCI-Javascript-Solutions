"use strict";
var Card = (function () {
    function Card() {
        this.isAce = function () {
            if (this.number === 1) {
                return true;
            }
            return false;
        };
        this.isKing = function () {
            if (this.number === 13) {
                return true;
            }
            return false;
        };
        this.isQueen = function () {
            if (this.number === 12) {
                return true;
            }
            return false;
        };
        this.isJack = function () {
            if (this.number === 11) {
                return true;
            }
            return false;
        };
        this.printCard = function () {
            var face = this.number;
            if (this.isAce()) {
                face = "Ace";
            }
            else if (this.isKing()) {
                face = "King";
            }
            else if (this.isQueen()) {
                face = "Queen";
            }
            else if (this.isJack()) {
                face = "Jack";
            }
            console.log(face + " of " + this.type + "s");
        };
    }
    return Card;
}());
exports.Card = Card;
