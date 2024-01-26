"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importation fichier
var chien_js_1 = require("./chien.js");
var chat_js_1 = require("./chat.js");
// Projets Pratiques
// Utilisation des classes dans un projet pratique
var monChien = new chien_js_1.default("Buddy");
var monChat = new chat_js_1.default("Whiskers", 9);
monChien.faireDuBruit(); // Affiche "Buddy aboie."
monChat.faireDuBruit(); // Affiche "Whiskers fait un bruit indéfinissable."
monChat.montrerVies(); // Affiche "Whiskers a 9 vies restantes."
