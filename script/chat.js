"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_js_1 = require("./animal.js");
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    // Constructeur étendu
    function Chat(nom, nombreDeVies) {
        var _this = _super.call(this, nom) || this;
        _this._nombreDeVies = nombreDeVies;
        return _this;
    }
    // Surcharge de la méthode faireDuBruit pour les chiens
    Chat.prototype.faireDuBruit = function () {
        console.log("".concat(this._nom, " miaule."));
    };
    // Méthode publique pour afficher le nombre de vies restantes
    Chat.prototype.montrerVies = function () {
        console.log("".concat(this._nom, " a ").concat(this._nombreDeVies, " vies restantes."));
    };
    return Chat;
}(animal_js_1.default));
exports.default = Chat;
