
 const taches =  [
    { id : 1 , description : "lire un livre" , Done : false},
    { id : 2 , description : "sport", Done : true },
    { id : 3 , description : "programer",Done : false},
    { id : 4 , description : "faire ses dévotions", Done : true},
]

for (i=0 ; i< taches.length; i++){
console.log(taches[i][0])

}
 

function Afficher(){
    let resultat ;
for(i=0; i< taches.length; i++){
    let test = taches[i]
 resultat += test.id+" - "+test.description+" - "+test.Done+"\n";
      }
    return resultat

}
console.log(Afficher())