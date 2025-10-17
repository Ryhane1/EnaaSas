    const prompt = require("prompt-sync")();

    let nbr1 = parseInt(prompt("Entrez le premier nombre : "));

function fact (nbr1) {
  if (nbr1 < 0) {
    return NaN; 
  }
  let resultat = 1;
  for (let i = 2; i <= nbr1; i++) {
    resultat = resultat * i;
console.log(resultat) 
  }
  return resultat;
}
console.log(resultat) 
