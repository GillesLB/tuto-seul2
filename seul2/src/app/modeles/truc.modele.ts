export interface ITruc {
    id: number;
    nom: string;
    couleur: string;
    prix: number;
    stock: number;
}

export class Truc implements ITruc {

    constructor(
        public id: number,
        public nom: string,
        public couleur: string,
        public prix: number,
        public stock: number,
    ) {}
}
