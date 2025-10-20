function sommetableau (tab) {

let somme = 0 ;

for ( let i=0 ; i < tab.length ; i++)
{

somme = somme + tab[i];
}
return somme;
}

const value = [ 1, 2, 3, 4];
console.log(sommetableau(value));



