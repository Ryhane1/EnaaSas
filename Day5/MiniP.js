const prompt = require("prompt-sync")();

function addit (nbr1, nbr2) {
{
somme = nbr1 + nbr2;
}
return somme;
}

function soustra (nbr1, nbr2) {
{
somme = nbr1 - nbr2;
}
return somme;
}

function multi (nbr1, nbr2) {
{
somme = nbr1 * nbr2;
}
return somme;
}
 
function divis (nbr1, nbr2) {
     if (nbr2 == 0) {
    
    let nbr2 = Number(prompt("entre numero different a 0 :"));
    return nbr2
  }

somme = nbr1 / nbr2;
 
return somme;
}

function puiss (nbr1, nbr2) {
{
somme = nbr1 ** nbr2;
}
return somme;
}

function racin (nbr1) {
{
somme = Math.sqrt(nbr1);
}
return somme;
}

function fact (nbr1) {
  
  let resultat = 1;
  for (let i = 1; i <= nbr1; i++) 
    resultat *= i ;
  
  return resultat;
}






console.log( "Addition = 1", "Soustraction = 2", "Multiplication = 3", "Division = 4", "Puissance = 5", "Racine carrée = 6", "Factorielle = 7" , "Quitter : 8", "Historique : 9")

let opprt = parseInt(prompt ("Entrez le numero de votre opperation : "));

let Tableau = [];


if  ( opprt >= 1 && opprt <= 5)

{
  let nbr1 = parseInt(prompt("Entrez le premier nombre : "));  
  let nbr2 = parseInt(prompt("Entrez le deuxième nombre : "));

    switch( opprt){
    
  case 1:
    resultat = addit (nbr1, nbr2);
Tableau.push( resultat );
      break;
  case 2:
  resultat = soustra (nbr1, nbr2);
Tableau.push( resultat );
break;
  case 3: 
  resultat = multi (nbr1, nbr2)  ; 
Tableau.push( resultat );
    
      break;
  case 4:
  resultat = divis (nbr1, nbr2) ; 
Tableau.push( resultat );
    
    break;
    
  case 5:
    resultat = puiss (nbr1, nbr2) ;
Tableau.push( resultat );
break;

    }
 } 


    else if  ( opprt >= 6 && opprt <= 7)
{
    let nbr1 = Number(prompt("Entrez un nombre : "));

    if ( opprt = 6){
      resultat = racin (nbr1) ;
     Tableau.push( resultat);
    }

else if ( opprt = 7){
       resultat = fact (nbr1) ;
     Tableau.push( resultat);

    }    
}

else if  ( opprt == 8){
resultat = console.log("Quitter")
}


else if  ( opprt == 9){
resultat = console.log(Tableau)
}

console.log(resultat)
