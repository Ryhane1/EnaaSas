function nombrepitition(tab, valeur) {

let compteur = 0 ;

for ( let i=0 ; i < tab.length ; i++)
{

if (tab[i] === valeur)

{
compteur++;
}
}
return compteur;
}

const value = [ 1, 2, 3, 3, 4, 3, 4];
console.log(nombrepitition(value, 3));



