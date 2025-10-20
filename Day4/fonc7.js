function nombrmultip(tab) {

    let Tableau = [] ;

for (let i = 0; i < tab.length; i++) {

 let somme = tab[i] * 2 
 
{
    Tableau.push(somme);
}
}
return Tableau;
}
const value = [ 1, 2, 3, 3, 4, 3, 4];
console.log(nombrmultip(value));



