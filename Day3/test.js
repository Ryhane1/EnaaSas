const prompt = require("prompt-sync")();

let nomber = []
 
for ( let i=0 ; i < 10 ; i++)
{
let saisie = prompt("entree le numero "+ i ,": ");

nomber.push(parseInt(saisie));
}
let somme = 0;

for ( let i=0 ; i < 10 ; i++)


{
    
somme += nomber[i];

}

let moyenne = somme / 10;


console.log ("La somme des éléments est : " +somme);
console.log("La moyenne des éléments est : " + moyenne);
