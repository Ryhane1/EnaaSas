
 let taches =  [
    { id : 1 , description : "lire un livre" , Done : false},
    { id : 2 , description : "sport", Done : true },
    { id : 3 , description : "programer",Done : false},
    { id : 4 , description : "faire ses dévotions", Done : true}
]


function Afficher(){

    let resultat ;
for(i=0; i< taches.length; i++){
    let test = taches[i]
 resultat += test.id+" - "+test.description+" - "+test.Done+"\n";
      }
    return resultat

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

function recherche() {
    let Recherch = Number(prompt("entre numero du tache : "));
if (taches[i].id == Recherch) {
    onsole.log(taches[i].id);}
}


function Modifier(){
    let Nvmodele;
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


function Supprimer() {
     let Recherch = Number(prompt("entre numero du tache : "));
if (Recherch == taches[i].id ) {
delete taches[i]
}


function verification() {

     let Recherch = Number(prompt("entre numero du tache : "));
if (Recherch == taches[i].id )
}





function Afficher(id , description, Done) {
    result = id[1];
    console.log(result)
}
console.log(
"1. Afficher les tâches\n
2. Ajouter une tâche\n
3. Rechercher une tâche\n
4. Modifier une tâche\n
5. Supprimer une tâche\n
6. Marquer une tâche comme terminée\n
7. Afficher tâches terminées / en attente\n
0. Quitter")

let index = Number(prompt("entre numero d'opperation : "))
for (i = 1 ; i <= taches.length; i++) {
switch(index) {
case 1 :
    console.log(taches[i]);
    break;

case 2 : 

console.log(Ajouter);
break;

case 3 :
console.log(recherche)


break;
case 4 : 

 console.log(Modifier)
 break;
 case 5 : 









}

}
const nouvelle = prompt("entre la nouvelle "+ taches.id