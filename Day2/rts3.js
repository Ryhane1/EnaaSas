const prompt = require("prompt-sync")();


let nombre1 = prompt("Entrez le premier nombre : ");
let nombre2 = prompt("Entrez le deuxième nombre : ");


if (nombre1 > nombre2) {
  console.log(nombre1 + " est le plus grand nombre.");
} else if (nombre2 > nombre1) {
  console.log(nombre2 + " est le plus grand nombre.");
} else {
  console.log("Les deux nombres sont égaux.");
}
