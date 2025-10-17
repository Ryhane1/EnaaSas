
const prompt = require("prompt-sync")();


let nombre1 = prompt("Entrez le nombre : ");


if (nombre1 >= 90 && nombre1 <= 100 ) {
  console.log(" A ");
} else if (nombre1 >= 80 && nombre1 <= 89 ) {
  console.log(" B ");
  } else if (nombre1 >= 70 && nombre1 <= 79 ) {
  console.log(" C ");
  } else if (nombre1 >= 60 && nombre1 <= 69 ) {
  console.log(" D ");
  } else if (nombre1 < 60 ) {
  console.log(" F ");
} else {
  console.log("valeur errone");
}




