
const readline = require("readline-sync");


let num = readline.questionInt("Entrez un nombre : ");


if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Nul");
}


