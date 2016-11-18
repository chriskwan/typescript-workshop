"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal_1 = require("./Animal");
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        console.log("Slithering.");
        _super.prototype.move.call(this, distance);
    };
    Snake.prototype.hiss = function () {
        console.log("hiss");
    };
    return Snake;
}(Animal_1.default));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        return _super.apply(this, arguments) || this;
    }
    Horse.prototype.move = function (distance) {
        console.log("Galloping");
        _super.prototype.move.call(this, distance);
    };
    Horse.prototype.jump = function () {
        console.log("I jumped");
    };
    return Horse;
}(Animal_1.default));
var jim;
jim = new Snake("Jim");
jim.roar();
var anne = new Horse("Anne");
anne.jump();
jim.move(15);
jim.hiss();
anne.move(20);
if (anne instanceof Horse) {
    console.log("Yeah it's a horse...");
}
