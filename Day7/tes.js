const prompt = require("prompt-sync")();


 let taches =  [
    { id : 1 , description : "lire un livre" , Done : false},
    { id : 2 , description : "sport", Done : true },
    { id : 3 , description : "programer",Done : false},
    { id : 4 , description : "faire ses dévotions", Done : true}
]

for (i = 1 ; i <= taches.length; i++) {
function recherche() {
    let Recherch = Number(prompt("entre numero du tache : "));
if (taches[i].id == Recherch) {
    onsole.log(taches[i].id);}
}

function Modifier(){
    let Nvmodele
   let Recherch = Number(prompt("entre numero du tache : "));
if (taches[i].id == Recherch) {
    onsole.log(taches[i]);
const descriptionnv = prompt("Entrez la nouvelle description :");
const etat = prompt("Entrez la nouvelle etat :");
Nvmodele = { 
taches[i].id == Recherch,
taches[i].description = descriptionnv,
taches[i].Done = etat,
}
}
return Nvmodele
}






function Ajouter() {


const nvid = prompt("Entrez le numero NV Id :");
const descriptionnv = prompt("Entrez la description de la tache :");
const etat = prompt("Entrez l'etat :");
let i = nvid;
taches.push(
taches.id = nvid,
taches.description =descriptionnv,
taches.Done = etat);

console.log(taches)

}


console.log(Ajouter());



}