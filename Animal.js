"use strict";
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance);
    };
    Animal.prototype.roar = function () {
        console.log("ROAR!!!");
    };
    return Animal;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animal;
