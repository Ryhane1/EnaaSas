function compterOccurrences(tab, valeur) {

  let compteur = 0;

  for (let i = 0; i < tab.length; i++) {

    if (tab[i] === valeur)
         {
      compteur++;
    }
  }
  return compteur;
}


const value = [ 1, 2, 3, 2, 3, 4];

console.log(Maxtableau(value));

const monTableau = [1, 2, 3, 4, 2, 5, 2];
const nombreOccurrences = compterOccurrences(monTableau, 2);
console.log(nombreOccurrences); // Affichera 3