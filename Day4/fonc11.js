function motlong(tab, valeur) {

  let Tableau = [];

  for (let i = 0; i < tab.length; i++)
     {

if  (tab[i].length >= valeur )

    {
    Tableau.push(tab[i]);
}

  }
  return Tableau;
}

const valeur = 4 ;
const  tab = ["Alice", "Bob", "Charlie"];

console.log(motlong(tab, valeur));

