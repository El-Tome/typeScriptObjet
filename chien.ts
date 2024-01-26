import Animal from './animal.js';
export default class Chien extends Animal {
    // Constructeur
    constructor(nom: string) {
        // Appel du constructeur de la classe de base avec le mot-clé "super"
        super(nom);
    }
    // Surcharge de la méthode faireDuBruit pour les chiens
    public faireDuBruit(): void {
        console.log(`${this._nom} aboie.`);
    }
}