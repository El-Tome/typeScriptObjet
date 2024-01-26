"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    // Constructeur
    function Animal(nom) {
        this._nom = nom;
    }
    // Méthode publique pour afficher le cri de l'animal
    Animal.prototype.faireDuBruit = function () {
        console.log("".concat(this._nom, " fait un bruit ind\u00E9finissable."));
    };
    return Animal;
}());
exports.default = Animal;
