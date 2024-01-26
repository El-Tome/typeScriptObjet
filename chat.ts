import Animal from './animal.js';
export default class Chat extends Animal {
    private _nombreDeVies: number;
    // Constructeur étendu
    constructor(nom: string, nombreDeVies: number) {
        super(nom);
        this._nombreDeVies = nombreDeVies;
    }
    // Surcharge de la méthode faireDuBruit pour les chiens
    public faireDuBruit(): void {
        console.log(`${this._nom} miaule.`);
    }
    // Méthode publique pour afficher le nombre de vies restantes
    public montrerVies(): void {
        console.log(`${this._nom} a ${this._nombreDeVies} vies restantes.`);
    }
}