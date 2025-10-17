const prompt = require("prompt-sync")();

let num = prompt("Entrez un nombre : ");


if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Nul");
}

