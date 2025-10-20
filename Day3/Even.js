
const prompt = require("prompt-sync")();

let nombres = [];


for (let i = 0; i < 5; i++) {
  let saisie = prompt("Veuillez entrer un entier (entier " + (i + 1) + "/5) :");

  nombres.push(parseInt(saisie));
}


console.log("Tableau original :", nombres.join(", "));


nombres.reverse();

console.log("Tableau inversé :", nombres.join(", "));


