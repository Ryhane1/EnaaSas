const prompt = require("prompt-sync")({ sigint: true });

// Données de test
let tasks = [
    { id: 1, description: "Apprendre JavaScript", isDone: false },
    { id: 2, description: "Faire les devoirs", isDone: true },
    { id: 3, description: "Lire sur Node.js", isDone: false }
];

let idCounter = 4; // Pour les nouvelles tâches

function afficherMenu() {
    console.log("\n=== To-Do List ===");
    console.log("1. Afficher les tâches");
    console.log("2. Ajouter une tâche");
    console.log("3. Rechercher une tâche (par ID)");
    console.log("4. Modifier une tâche (par ID)");
    console.log("5. Supprimer une tâche (par ID)");
    console.log("6. Marquer tâche comme terminée / en attente");
    console.log("7. Afficher tâches par statut");
    console.log("0. Quitter");
}

// 1. Afficher toutes les tâches
function afficherTaches() {
    if (tasks.length === 0) {
        console.log("Aucune tâche disponible.");
    } else {
        for (let i = 0; i < tasks.length; i++) {
            let statut = tasks[i].isDone ? "Terminée" : "En attente";
            console.log(`${tasks[i].id}. ${tasks[i].description} [${statut}]`);
        }
    }
}

// 2. Ajouter une tâche
function ajouterTache() {
    let desc = prompt("Entrez la description de la tâche : ");
    let nouvelleTache = {
        id: idCounter,
        description: desc,
        isDone: false
    };
    tasks[tasks.length] = nouvelleTache;
    idCounter++;
    console.log("✅ Tâche ajoutée !");
}

// 3. Rechercher une tâche par ID
function rechercherTache() {
    let id = parseInt(prompt("Entrez l'ID de la tâche : "));
    let trouve = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            let statut = tasks[i].isDone ? "Terminée" : "En attente";
            console.log(`${tasks[i].id}. ${tasks[i].description} [${statut}]`);
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("❌ Tâche introuvable.");
    }
}

// 4. Modifier une tâche par ID
function modifierTache() {
    let id = parseInt(prompt("Entrez l'ID de la tâche à modifier : "));
    let trouve = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            let nouvelleDesc = prompt("Nouvelle description : ");
            tasks[i].description = nouvelleDesc;
            console.log("✏️ Tâche modifiée !");
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("❌ Tâche non trouvée.");
    }
}

// 5. Supprimer une tâche par ID (sans splice)
function supprimerTache() {
    let id = parseInt(prompt("Entrez l'ID de la tâche à supprimer : "));
    let nouvelleListe = [];
    let supprimee = false;
    let j = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id !== id) {
            nouvelleListe[j] = tasks[i];
            j++;
        } else {
            supprimee = true;
        }
    }
    tasks = nouvelleListe;
    if (supprimee) {
        console.log("🗑️ Tâche supprimée.");
    } else {
        console.log("❌ Tâche introuvable.");
    }
}

// 6. Changer le statut d'une tâche
function changerStatut() {
    let id = parseInt(prompt("Entrez l'ID de la tâche : "));
    let trouve = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isDone = !tasks[i].isDone;
            console.log(`🔄 Statut mis à jour : ${tasks[i].isDone ? "Terminée" : "En attente"}`);
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("❌ Tâche non trouvée.");
    }
}

// 7. Filtrer les tâches par statut
function filtrerParStatut() {
    let choix = prompt("Afficher (1) Terminées ou (2) En attente ? ");
    let statutRecherche = (choix === "1");
    let trouve = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isDone === statutRecherche) {
            console.log(`${tasks[i].id}. ${tasks[i].description}`);
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("Aucune tâche trouvée avec ce statut.");
    }
}

// Boucle principale
let continuer = true;

while (continuer) {
    afficherMenu();
    let choix = prompt("Choisissez une option : ");
    console.log(); // ligne vide

    if (choix === "1") {
        afficherTaches();
    } else if (choix === "2") {
        ajouterTache();
    } else if (choix === "3") {
        rechercherTache();
    } else if (choix === "4") {
        modifierTache();
    } else if (choix === "5") {
        supprimerTache();
    } else if (choix === "6") {
        changerStatut();
    } else if (choix === "7") {
        filtrerParStatut();
    } else if (choix === "0") {
        continuer = false;
        console.log("👋 Fin du programme.");
    } else {
        console.log("❗ Choix invalide.");
    }
}
