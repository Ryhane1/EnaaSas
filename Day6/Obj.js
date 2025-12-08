const prompt = require("prompt-sync")();

const voiture = {
    marque : "Mercedes",
    modele : "S-class",
    annee : 2024,
}
console.log(voiture.marque, voiture.annee);
voiture.annee = (Number(prompt("annee du modele : ")));
console.log(voiture.marque, voiture.annee);
voiture.couleur = prompt( "entre la couleur : ");
console.log(voiture.marque, voiture.annee, voiture.couleur);
delete voiture.modele;
