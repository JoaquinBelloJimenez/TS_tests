enum FruitInFrench{
    Cerise,
    Banane,
    Pomme,
    Abricot,
    Poire,
    Pêche,
    Prune,
    Pastèque,
    Melon,
    Tomate,
    Orange,
    Citron,
    Framboise,
    Mûre,
    Myrtille,
    Ananas,
    Noix_de_coco
}

const favouriteFruit = FruitInFrench.Orange;

enum NumbersInFrench{
    Zéro = 0,
    Un = 1,
    Deux = 2,
    Trois = 3,
    Quatre = 4,
    Cinq = 5,
    Six = 6,
    Sept = 7,
    Huit = 8,
    Neuf = 9,
    Dix = 10
}

const seven = NumbersInFrench.Sept;
const ten = NumbersInFrench["Dix"];
const eight = NumbersInFrench[8];

const enum VerbePouvoir{
    Je = "peux",
    Tu = "peux",
    Il = "peut",
    Nous = "pouvons",
    Vous = "pouvez",
    Elles = "peuvent"
}

// The cool thing about the constant enums is that JS don't even know them. They are hidden within the TypeScript magic. WoW -_-