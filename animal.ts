export default class Animal {
    // Propriété privée
    protected _nom: string;
    // Constructeur
    constructor(nom: string) {
        this._nom = nom;
    }
    // Méthode publique pour afficher le cri de l'animal
    public faireDuBruit(): void {
        console.log(`${this._nom} fait un bruit indéfinissable.`);
    }
}