const prompt = require("prompt-sync")({ sigint: true });

const livres = [
  { idL: 1, titre: "Noces", auteur: "Camus", annee: 1938, disponible: true },
  { idL: 2, titre: "Chagrin", auteur: "Lutz", annee: 2010, disponible: false },
  { idL: 3, titre: "Poil de Carotte", auteur: "Renard", annee: 1894, disponible: true },
  { idL: 4, titre: "Gaspard", auteur: "Kehlmann", annee: 2003, disponible: true },
  { idL: 5, titre: "Jonas", auteur: "Lévy", annee: 1997, disponible: false }
];
let idCounter = 5 ;




function rechercheId (){
  let idrech = Number(prompt("Entre le Id du livre : "));
for (let i = 0; i < livres.length; i++) {
    if (livres[i].idL === idrech) {
      console.log (livres[i].idL + ". " +livres[i].titre + ". " +livres[i].auteur + ". " +livres[i].annee + " - Disponible : Oui");
}}}
rechercheId()






  console.log("8. Ajouter un abonné");
  console.log("9. Afficher tous les abonnés");
  console.log("10. Enregistrer un emprunt");
  console.log("11. Enregistrer un retour");
  console.log("12. Afficher les livres empruntés par un abonné");
      let idL = Number(prompt("Entrez l'ID de la livre : "));


      livres[livres.length] = nouvelleLivre;
