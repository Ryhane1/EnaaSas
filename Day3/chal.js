
const prompt = require("prompt-sync")();

let nombre = prompt("Entrez un nombre : ");

for (let i = 1; i <= 10; i=i+1) 
    {
  let resultat = nombre * i;
  console.log(nombre + " x " + i + " = " + resultat);
  }
  