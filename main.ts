//importation fichier
import Chien from './chien.js';
import Chat from './chat.js';
// Projets Pratiques
// Utilisation des classes dans un projet pratique
const monChien = new Chien("Buddy");
const monChat = new Chat("Whiskers", 9);
monChien.faireDuBruit(); // Affiche "Buddy aboie."
monChat.faireDuBruit(); // Affiche "Whiskers fait un bruit indéfinissable."
monChat.montrerVies(); // Affiche "Whiskers a 9 vies restantes."