

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somme = 0;

const tailleTableau = nombres.length;

for (let i = 0; i < tailleTableau; i++) {
  somme += nombres[i];
}

let moyenne = somme / tailleTableau;

console.log("Le tableau est : " + nombres.join(", ")); 
console.log("La somme des éléments est : " + somme); 
console.log("La moyenne des éléments est : " + moyenne)
