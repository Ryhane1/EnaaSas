function nombrpair(tab) {

    let Tableau = [] ;

for (let i = 0; i < tab.length; i++) {

if (tab[i] % 2 === 0)
{
    Tableau.push(tab[i]);
}
}
return Tableau;
}
const value = [ 1, 2, 3, 3, 4, 3, 4];
console.log(nombrpair(value));



