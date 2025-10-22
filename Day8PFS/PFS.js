const prompt = require("prompt-sync")({ sigint: true });

const livres = [
  { idL: 1, titre: "Noces", auteur: "Camus", annee: 1938, disponible: true },
  { idL: 2, titre: "Chagrin", auteur: "Lutz", annee: 2010, disponible: false },
  { idL: 3, titre: "Poil de Carotte", auteur: "Renard", annee: 1894, disponible: true },
  { idL: 4, titre: "Gaspard", auteur: "Kehlmann", annee: 2003, disponible: true },
  { idL: 5, titre: "Jonas", auteur: "Lévy", annee: 1997, disponible: false }
];
let idCounter = 5 ;

function afficherMenu() {
  console.log("\n=== MENU PRINCIPAL ===");
  console.log("1. Introduire un livre");
  console.log("2. Ajouter plusieurs livres");
  console.log("3. Afficher tous les livres");
  console.log("4. Trier les livres par titre (ascendant/descendant)");
  console.log("5. Trier les livres par année de publication");
  console.log("6. Afficher uniquement les livres disponibles");
  console.log("7. Rechercher un livre par ID_livre");
  console.log("8. Ajouter un abonné");
  console.log("9. Afficher tous les abonnés");
  console.log("10. Enregistrer un emprunt");
  console.log("11. Enregistrer un retour");
  console.log("12. Afficher les livres empruntés par un abonné");
  console.log("13. Quitter l'application");
}


function ajouterLivre() {
    let idL = Number(prompt("Entrez l'ID de la livre : "));
    let nvtitre = prompt("Entrez le titre du livre : ");
    let nvauteur = prompt("Entrez la nom d'auteur : ");
    let nvannee = Number(prompt("Entrez l'annee du publication : "));

    let nouvelleLivre = {
        idL: idCounter,
        titre : nvtitre,
        auteur : nvauteur,
        annee : nvannee , 
        disponible : true
    };
    livres[livres.length] = nouvelleLivre;
    idCounter++;
    console.log("Livre ajoutée ");
}


function ajouterPlusieursLivres() {
  let nbLivres = Number(prompt("Combien de livres voulez-vous ajouter ?"));

  for (let i = 0; i < nbLivres; i++) {
    let nvtitre = prompt("Entrez le titre du livre : ");
    let nvauteur = prompt("Entrez le nom de l'auteur : ");
    let nvannee = Number(prompt("Entrez l'année de publication : "));

    let nouvelleLivre = {
      idL: idCounter,
      titre: nvtitre,
      auteur: nvauteur,
      annee: nvannee,
      disponible: true
    };

    livres.push(nouvelleLivre);
    console.log("Livre ajouté avec l'ID " + idCounter);
    idCounter++;
  }
}

function afficherLivres (){

    for (let i = 0; i < livres.length; i++) {
            console.log(`${livres[i].idL}. ${livres[i].titre}. ${livres[i].auteur}. ${livres[i].annee}${livres[i].disponible}`);
        }
}

function trierTitre() {

  let ordre = prompt("entre 'a' for ascendant et 'd' for descendant : ");

  if (ordre === "a") {

    livres.sort(function(a, b) {
    if (a.titre > b.titre) { return 1;} 
else if (a.titre < b.titre) { return -1;} 
else { return 0; }
} )}
 
else if (ordre === "d") {
    livres.sort(function(a, b) {
     if (a.titre < b.titre) {return 1;} 
else if (a.titre > b.titre) {return -1;} 
else { return 0;  }
} ) } 

else {console.log("Réponse invalide.");
    return; }

  for (let i = 0; i < livres.length; i++) {
    console.log(
      livres[i].idL + " - " +
      livres[i].titre + " par " +
      livres[i].auteur + " (" +
      livres[i].annee + ") - Disponible : " +
      livres[i].disponible);
}}

function trierAnnee(){
  let ordre = prompt("entre 'a' for ascendant et 'd' for descendant : ");

  if (ordre === "a") {
livres.sort((a,b) => a.annee - b.annee)
   }
 
else if (ordre === "d") {
   livres.sort((a,b) => b.annee - a.annee) } 

else {console.log("Réponse invalide.");
    return; }

  for (let i = 0; i < livres.length; i++) {
    console.log(
      livres[i].idL + " - " +
      livres[i].titre + " par " +
      livres[i].auteur + " (" +
      livres[i].annee + ") - Disponible : " +
      livres[i].disponible);
    }
}

function dispo() {
  for (let i = 0; i < livres.length; i++) {
    if (livres[i].disponible === true) {
      console.log (livres[i].idL + ". " +livres[i].titre + ". " +livres[i].auteur + ". " +livres[i].annee + " - Disponible : Oui");
    }}}



function rechercheId (){
  let idrech = Number(prompt("Entre le Id du livre : "));
for (let i = 0; i < livres.length; i++) {
    if (livres[i].idL === idrech) {
      console.log (livres[i].idL + ". " +livres[i].titre + ". " +livres[i].auteur + ". " +livres[i].annee + " - Disponible : Oui");
}}}


    afficherMenu();
    let choix = prompt("Choisissez une option : ");
    console.log(); // ligne vide

    if (choix === "1") {
        ajouterLivre();
    } else if (choix === "2") {
        ajouterPlusieursLivres();
    } else if (choix === "3") {
        afficherLivres();
    } else if (choix === "4") {
        trierTitre();
    } else if (choix === "5") {
        trierAnnee();
    } else if (choix === "6") {
        dispo();
    } else if (choix === "7") {
        rechercheId();
    } else if (choix === "0") {
        continuer = false;
        console.log("👋 Fin du programme.");
    } else {
        console.log("❗ Choix invalide.");
    }
    





